FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY jobs-service ./jobs-service

WORKDIR /app/jobs-service
EXPOSE 5003
CMD ["node", "server.js"]