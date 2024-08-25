import { Marcellus } from "next/font/google";
import "./globals.css";

const besley = Marcellus({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={besley.className}
        style={{
          backgroundImage: "url('/news_paper_background.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
