FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY events-service ./events-service

WORKDIR /app/events-service
EXPOSE 5004
CMD ["node", "server.js"]