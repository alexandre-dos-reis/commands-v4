FROM node:16 as builder

ARG BACKEND_ENDPOINT
ENV NEXT_PUBLIC_BACKEND_ENDPOINT=${BACKEND_ENDPOINT}

ARG BACKEND_TOKEN
ENV BACKEND_TOKEN=${BACKEND_TOKEN}

WORKDIR /app
RUN npm install -g pnpm
COPY pnpm-lock.yaml ./
RUN pnpm fetch
COPY . .
RUN pnpm install -r --offline --frozen-lockfile
RUN pnpm build
RUN pnpm prune --prod

FROM node:16-alpine as runner
WORKDIR /app
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

ARG BACKEND_ENDPOINT
ENV NEXT_PUBLIC_BACKEND_ENDPOINT=${BACKEND_ENDPOINT}

EXPOSE 3000
ENTRYPOINT [ "yarn", "start" ]