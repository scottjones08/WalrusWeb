FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN mkdir -p data
EXPOSE 3000
CMD ["node", "--import", "tsx", "server.ts"]
