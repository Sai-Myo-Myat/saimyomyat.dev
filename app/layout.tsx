import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: { template: "%s | Sai Myo Myat", default: "Sai Myo Myat" },
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
    title: { template: "%s | Sai Myo Myat", default: "Sai Myo Myat" },
    description:
      "I am a full-stack developer with over two years of experiences in developing createive websites and mobile apps",
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
