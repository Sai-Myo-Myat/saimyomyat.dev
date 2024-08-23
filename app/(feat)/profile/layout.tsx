import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen max-w-screen-xl mx-auto">{children}</main>
  );
}
