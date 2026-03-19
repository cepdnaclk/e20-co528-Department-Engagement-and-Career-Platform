FROM node:18-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . ./auth-service

FROM node:18-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app /app

WORKDIR /app/auth-service
EXPOSE 5001
CMD ["node", "server.js"]
