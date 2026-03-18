FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY notifications-service ./notifications-service

WORKDIR /app/notifications-service
EXPOSE 5007
CMD ["node", "server.js"]