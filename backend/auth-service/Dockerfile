FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY shared ./shared
COPY auth-service ./auth-service

WORKDIR /app/auth-service
EXPOSE 5001
CMD ["node", "server.js"]