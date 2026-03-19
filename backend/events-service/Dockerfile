FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . ./events-service

FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app

WORKDIR /app/events-service
EXPOSE 5004
CMD ["node", "server.js"]
