import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "300" });

export const metadata: Metadata = {
  title: "Sai Myo Myat",
  description:
    "I am a full-stack developer with over two years of experiences in developing createive websites and mobile apps",
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
