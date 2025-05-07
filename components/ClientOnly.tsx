"use client";

import { useEffect, useState } from "react";

/**
 * ClientOnly component ensures that children are only rendered on the client side
 * This prevents "document is not defined" errors during server-side rendering
 */
export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <>{children}</>;
}
