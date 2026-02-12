import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // 👈 これを追加！「静的なHTMLとして書き出すよ」という命令
  images: {
    unoptimized: true, // 👈 これも追加！画像をCloudflareでも表示できるようにする設定
  },
};

export default nextConfig;