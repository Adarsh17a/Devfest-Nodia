/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {},
  reactStrictMode: true,
  transpilePackages: [
    '@tensorflow/tfjs-core',
    '@tensorflow/tfjs-backend-cpu',
    '@tensorflow/tfjs-backend-webgl',
    '@tensorflow/tfjs-converter',
    '@tensorflow-models/pose-detection',
    '@mediapipe/pose'
  ],
  webpack: (config) => {
    // Configure ESM modules and workers
    config.resolve.extensionAlias = {
      '.js': ['.js', '.ts', '.tsx']
    };

    // Handle ESM modules
    config.module.rules.push({
      test: /\.m?js$/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });

    // Configure asset modules for WASM and media
    config.module.rules.push({
      test: /\.wasm$/,
      type: 'asset/resource'
    });

    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      type: 'asset/resource'
    });

    // Add fallbacks for Node.js modules
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      crypto: false
    };

    return config;
  },
  experimental: {
    // Enable optimizations
    optimizePackageImports: ['@mediapipe/pose']
  },
  // Headers for cross-origin isolation
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin"
          },
          {
            key: "Cross-Origin-Embedder-Policy", 
            value: "require-corp"
          }
        ]
      }
    ];
  }
};

module.exports = nextConfig;

