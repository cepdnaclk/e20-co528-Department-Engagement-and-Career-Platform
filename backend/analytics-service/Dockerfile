FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY analytics-service ./analytics-service

WORKDIR /app/analytics-service
EXPOSE 5008
CMD ["node", "server.js"]