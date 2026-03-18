FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY api-gateway ./api-gateway

WORKDIR /app/api-gateway
EXPOSE 5000
CMD ["node", "server.js"]