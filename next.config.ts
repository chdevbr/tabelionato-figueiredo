import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  
  // OBRIGATÓRIO porque o nome do repo é "tabelionato-figueiredo"
  basePath: "/tabelionato-figueiredo",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;