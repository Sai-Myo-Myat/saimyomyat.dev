"use client";

import Button from "@/components/ui-overwrite/button";
import { useRouter } from "next/navigation";
import React, { PropsWithChildren, useCallback } from "react";

const GoBack: React.FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const onGoBack = useCallback(() => {
    router.back();
  }, [router]);

  if (children) {
    return <div onClick={onGoBack}>{children}</div>;
  }

  return <Button onClick={onGoBack}>Go Back</Button>;
};

export default GoBack;
