"use client";

import Button from "@/components/ui-overwrite/button";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const GoBack = () => {
  const router = useRouter();

  const onGoBack = useCallback(() => {
    router.back();
  }, [router]);

  return <Button onClick={onGoBack}>Go Back</Button>;
};

export default GoBack;
