#!/bin/bash
# 🛑 Script de réparation Next.js pour Termux

echo "🧹 Nettoyage du cache..."
rm -rf .next

echo "⚡ Vérification de la config Next.js..."
if [ ! -f next.config.mjs ]; then
  echo "[!] next.config.mjs manquant, création..."
  cat > next.config.mjs <<'JS'
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    allowedDevOrigins: ["http://10.0.0.47:3001"],
  },
  webpack: (config) => {
    config.watchOptions = {
      ignored: ["**/node_modules", "/data", "/system", "/storage", "/proc", "/dev"],
    };
    return config;
  },
};
export default nextConfig;
JS
else
  echo "[ok] next.config.mjs déjà présent."
fi

echo "🚀 Lancement de Next.js sur le port 3001..."
pnpm dev
