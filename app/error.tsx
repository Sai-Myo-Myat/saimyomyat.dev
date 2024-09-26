"use client"; // Error boundaries must be Client Components

import GoBack from "@/components/base/go-back-button";
import Button from "@/components/ui-overwrite/button";
import { BanIcon } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen max-w-screen-lg mx-auto px-6 sm:px-4">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-7xl text-primary">404</h1>
        <div className="flex items-center gap-2">
          <p className="text-lg">Something went wrong...</p>
          <BanIcon size={16} />
        </div>
        <div className="flex gap-4">
          <GoBack />
          <Button onClick={reset}>Try Again</Button>
        </div>
      </div>
    </div>
  );
}
