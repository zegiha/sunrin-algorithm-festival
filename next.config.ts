import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Turbopack을 사용하지 않을 때의 설정
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // React 19 호환성을 위한 설정
            jsxRuntime: 'automatic',
          },
        },
      ],
    });

    return config;
  },

  // 실험적 기능 (Next.js 15용) - Turbopack과 함께 사용할 때
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
}

export default nextConfig