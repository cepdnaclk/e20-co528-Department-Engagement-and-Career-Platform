FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . ./messaging-service

FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app

WORKDIR /app/messaging-service
EXPOSE 5006
CMD ["node", "server.js"]
