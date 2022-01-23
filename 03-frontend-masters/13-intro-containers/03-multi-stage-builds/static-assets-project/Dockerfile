FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# or nginx:1.17-alpine
FROM nginx:1.17
COPY --from=builder /app/build /usr/share/nginx/html

# COPY --from=builder /app/build /usr/share/nginx/html