/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
    allowedDevOrigins: ["http://10.0.0.47:3001"], // adapte si ton IP change
  },
  webpack: (config) => {
    config.watchOptions = {
      ignored: ["**/node_modules", "/data", "/system", "/storage", "/proc", "/dev"],
    };
    return config;
  },
};
export default nextConfig;
