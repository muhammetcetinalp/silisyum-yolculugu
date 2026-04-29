# syntax=docker/dockerfile:1.7

# ---------- 1) Bağımlılıkları kur ----------
FROM node:20-alpine AS deps
WORKDIR /app

# libc ile uyumluluk için
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN npm ci


# ---------- 2) Uygulamayı derle ----------
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build


# ---------- 3) Üretim çalışma zamanı ----------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Root olmayan kullanıcı
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Standalone output: yalnızca gerekli dosyalar
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
