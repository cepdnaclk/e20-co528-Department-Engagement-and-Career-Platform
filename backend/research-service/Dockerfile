FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY research-service ./research-service

WORKDIR /app/research-service
EXPOSE 5005
CMD ["node", "server.js"]