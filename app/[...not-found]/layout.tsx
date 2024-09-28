import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
};

export default function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto px-6 sm:px-4">
      <div className="flex flex-col justify-center items-center min-h-screen">
        {children}
      </div>
    </div>
  );
}
