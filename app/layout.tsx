import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: {
    template: "%s | Sai Myo Myat",
    default: "Sai Myo Myat - A Full-stack Developer",
  },
  description:
    "I am a full-stack developer with over two years of experiences in developing createive websites and mobile apps",
  creator: "Sai Myo Myat",
  keywords: ["Next.js", "React", "JavaScript", "Portfolio", "Sai Myo Myat"],
  formatDetection: {
    email: true,
    telephone: true,
    address: true,
  },
  openGraph: {
    siteName: "Sai Myo Myat",
    type: "website",
    url: "https://portfolio-seven-kohl-54.vercel.app",
    title: {
      template: "%s | Sai Myo Myat",
      default: "Sai Myo Myat - A Full-stack Developer",
    },
    description:
      "I am a full-stack developer with over two years of experiences in developing createive websites and mobile apps",
    images: {
      url: `https://portfolio-seven-kohl-54.vercel.app/me.jpg`,
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
      url: `https://portfolio-seven-kohl-54.vercel.app/me.jpg`,
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
        <main>{children}</main>
      </body>
    </html>
  );
}
