FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY messaging-service ./messaging-service

WORKDIR /app/messaging-service
EXPOSE 5006
CMD ["node", "server.js"]