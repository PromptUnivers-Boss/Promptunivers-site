#!/usr/bin/env bash
set -euo pipefail

cd ~/promptunivers-site

echo "🧹 Cleaning project..."
rm -rf node_modules .next package-lock.json pnpm-lock.yaml

echo "⚡ Fixing CSS build: removing lightningcss (not supported on Termux ARM)..."
pnpm remove lightningcss || true

echo "⚡ Installing PostCSS fallback..."
pnpm add -D postcss postcss-loader autoprefixer tailwindcss

# Crée un fichier postcss.config.js si absent
if [ ! -f postcss.config.js ]; then
  cat > postcss.config.js <<'JS'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
JS
fi

echo "📦 Reinstalling dependencies..."
pnpm install

echo "🚀 Starting Next.js on port 3001..."
pnpm dev -p 3001
