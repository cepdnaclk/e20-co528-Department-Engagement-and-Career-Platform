FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY feed-service ./feed-service

WORKDIR /app/feed-service
EXPOSE 5002
CMD ["node", "server.js"]