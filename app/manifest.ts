import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sai Myo Myat's Portfolio Website",
    short_name: "saimyomyat.dev",
    display: "standalone",
    background_color: "#117DA2",
    theme_color: "#117DA2",
    icons: [
      {
        src: "/logo-icon.jpg",
        sizes: "192x192",
        type: "image/jpg",
      },
    ],
  };
}
