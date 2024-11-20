# Giai đoạn build
FROM node:18-alpine as build

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build

# Giai đoạn production
FROM node:18-alpine as production

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/pnpm-lock.yaml ./pnpm-lock.yaml

RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile

EXPOSE 5000

CMD ["pnpm", "start"]