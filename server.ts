import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { z } from "zod";
import { nanoid } from "nanoid";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const NODE_ENV = process.env.NODE_ENV ?? "development";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";

const dataDir = path.join(__dirname, "data");
const contactsPath = path.join(dataDir, "contacts.json");
const pitchesPath = path.join(dataDir, "pitches.json");

const ensureDataDir = async () => {
  await fs.mkdir(dataDir, { recursive: true });
};

const readJson = async <T>(filePath: string, fallback: T): Promise<T> => {
  try {
    const raw = await fs.readFile(filePath, "utf-8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const writeJson = async <T>(filePath: string, data: T) => {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: "Too many requests, please try again later.",
});

if (NODE_ENV !== "production") {
  const allowedOrigins = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  app.use(
    cors({
      origin:
        allowedOrigins.length > 0
          ? allowedOrigins
          : ["http://localhost:5173"],
      methods: ["GET", "POST"],
      credentials: true,
    })
  );
}

app.use(express.json());
app.use("/api", apiLimiter);

const requireAdmin = (req: express.Request, res: express.Response, next: () => void) => {
  if (NODE_ENV === "production" && !ADMIN_PASSWORD) {
    return res.status(500).json({ error: "Admin password not configured." });
  }
  const password = req.header("x-admin-password");
  if (!password || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

const contactSchema = z.object({
  businessName: z.string().min(1).max(120),
  contactName: z.string().min(1).max(120),
  email: z.string().email().max(120),
  phone: z.string().min(7).max(40),
  industry: z.string().min(1).max(120),
  volume: z.string().min(1).max(120),
  currentProcessor: z.string().max(120).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
});

const pitchSchema = z.object({
  merchantName: z.string().min(1).max(160),
  industry: z.string().min(1).max(120),
  monthlyVolume: z.number().positive().max(10_000_000),
  currentProcessor: z.string().max(120).optional().or(z.literal("")),
  currentRate: z.number().positive().max(10),
});

interface PitchRecord {
  id: string;
  merchantName: string;
  industry: string;
  monthlyVolume: number;
  currentProcessor?: string;
  currentRate: number;
  walrusRatePercent: number;
  walrusRateFixed: number;
  monthlySavings: number;
  annualSavings: number;
  createdAt: string;
}

const baseRates: Record<string, { percent: number; fixed: number }> = {
  Restaurant: { percent: 1.95, fixed: 0.1 },
  "Laundromat": { percent: 2.2, fixed: 0.1 },
  "Laundromat / Coin-Op": { percent: 2.2, fixed: 0.1 },
  "Medical/Dental": { percent: 2.1, fixed: 0.1 },
  "Medical / Dental": { percent: 2.1, fixed: 0.1 },
  Retail: { percent: 1.95, fixed: 0.1 },
  "E-commerce": { percent: 2.4, fixed: 0.15 },
  "Professional Services": { percent: 2.3, fixed: 0.1 },
};

const calculateWalrusRate = (industry: string, monthlyVolume: number) => {
  const base = baseRates[industry] ?? { percent: 2.3, fixed: 0.1 };
  let adjustment = 0;
  if (monthlyVolume >= 250_000) adjustment = -0.15;
  else if (monthlyVolume >= 100_000) adjustment = -0.1;
  else if (monthlyVolume >= 50_000) adjustment = -0.05;
  const percent = Math.max(1.5, base.percent + adjustment);
  return { percent, fixed: base.fixed };
};

app.post("/api/contact", async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid submission." });
  }

  const contacts = await readJson(contactsPath, [] as unknown[]);
  const entry = {
    id: nanoid(),
    ...parsed.data,
    currentProcessor: parsed.data.currentProcessor || undefined,
    message: parsed.data.message || undefined,
    createdAt: new Date().toISOString(),
  };
  const updated = [entry, ...contacts];
  await writeJson(contactsPath, updated);

  return res.json({ success: true });
});

app.post("/api/pitch", requireAdmin, async (req, res) => {
  const parsed = pitchSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Invalid pitch request." });
  }

  const { percent, fixed } = calculateWalrusRate(
    parsed.data.industry,
    parsed.data.monthlyVolume
  );

  const monthlySavings = Math.max(
    0,
    (parsed.data.monthlyVolume * (parsed.data.currentRate - percent)) / 100
  );

  const pitch: PitchRecord = {
    id: nanoid(),
    merchantName: parsed.data.merchantName,
    industry: parsed.data.industry,
    monthlyVolume: parsed.data.monthlyVolume,
    currentProcessor: parsed.data.currentProcessor || undefined,
    currentRate: parsed.data.currentRate,
    walrusRatePercent: percent,
    walrusRateFixed: fixed,
    monthlySavings,
    annualSavings: Math.round(monthlySavings * 12),
    createdAt: new Date().toISOString(),
  };

  const pitches = await readJson(pitchesPath, [] as PitchRecord[]);
  const updated = [pitch, ...pitches];
  await writeJson(pitchesPath, updated);

  return res.json({ url: `/pitch/${pitch.id}` });
});

app.get("/api/pitch/:id", async (req, res) => {
  const pitches = await readJson(pitchesPath, [] as PitchRecord[]);
  const pitch = pitches.find((item) => item.id === req.params.id);
  if (!pitch) {
    return res.status(404).json({ error: "Pitch not found." });
  }
  return res.json(pitch);
});

app.get("/api/pitches", requireAdmin, async (_req, res) => {
  const pitches = await readJson(pitchesPath, [] as PitchRecord[]);
  return res.json(pitches);
});

app.get("/api/contacts", requireAdmin, async (_req, res) => {
  const contacts = await readJson(contactsPath, [] as unknown[]);
  return res.json(contacts);
});

const distDir = path.join(__dirname, "dist");
const renderPitchHtml = async (pitch: PitchRecord) => {
  const indexPath = path.join(distDir, "index.html");
  const html = await fs.readFile(indexPath, "utf-8");
  const title = `${pitch.merchantName} — Custom Walrus Rate`;
  const description = `See your custom Walrus Payments rate and estimated annual savings of $${pitch.annualSavings.toLocaleString()}.`;

  const ogTags = `
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="/walrus-logo.jpg" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  `;

  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${description}" />`
    )
    .replace(/<\/head>/, `${ogTags}\n  </head>`);
};

if (NODE_ENV === "production") {
  app.use(express.static(distDir));

  app.get("/pitch/:id", async (req, res) => {
    const pitches = await readJson(pitchesPath, [] as PitchRecord[]);
    const pitch = pitches.find((item) => item.id === req.params.id);
    if (!pitch) {
      return res.status(404).send("Pitch not found");
    }

    try {
      const html = await renderPitchHtml(pitch);
      return res.send(html);
    } catch (error) {
      console.error(error);
      return res.status(500).send("Unable to load pitch");
    }
  });

  app.get("/{*path}", async (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`WalrusWeb server running on port ${PORT}`);
});
