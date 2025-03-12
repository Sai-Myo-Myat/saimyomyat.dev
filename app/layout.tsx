import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: {
    template: "%s | Sai Myo Myat",
    default: "Sai Myo Myat - A Full-stack Developer",
  },
  applicationName: "Sai Myo Myat",
  description:
    "I am a full-stack developer with over two years of experiences in developing createive websites and mobile apps",
  creator: "Sai Myo Myat",
  authors: [{ name: "Sai Myo Myat", url: process.env.NEXT_PUBLIC_URL }],
  keywords: ["Sai Myo Myat", "Front-end developer", "Nextjs Portfolio"],
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    siteName: "Sai Myo Myat",
    type: "website",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    title: {
      template: "%s | Sai Myo Myat",
      default: "Sai Myo Myat - A Full-stack Developer",
    },
    description:
      "I am a full-stack developer with over two years of experiences in developing createive websites and mobile apps",
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/saimyomyat-og.jpg`,
      width: "300px",
      height: "300px",
      alt: "Sai Myo Myat's profile",
    },
  },
  twitter: {
    site: "Sai Myo Myat",
    title: {
      template: "%s | Sai Myo Myat",
      default: "Sai Myo Myat - A Full-stack Developer",
    },
    description:
      "I am a full-stack developer with over two years of experiences in developing createive websites and mobile apps",
    images: {
      url: `${process.env.NEXT_PUBLIC_URL}/saimyomyat-og.jpg`,
      width: "300px",
      height: "300px",
      alt: "Sai Myo Myat's profile",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
