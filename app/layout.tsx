import { Marcellus, Roboto } from "next/font/google";
import "./globals.css";

const besley = Roboto({ subsets: ["latin"], weight: "300" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={besley.className}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
