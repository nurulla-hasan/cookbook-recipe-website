import { clsx } from "clsx";
import { Suspense } from "react";
import { twMerge } from "tailwind-merge"
import { ErrorBoundary } from "@/components/ErrorBoundary";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// withErrorAndSuspense
export const withErrorAndSuspense = (Component, fallback = <div>Loading...</div>) => {
  const elem = typeof Component === "function" ? <Component /> : Component;
  return (
    <ErrorBoundary>
      <Suspense fallback={fallback}>{elem}</Suspense>
    </ErrorBoundary>
  );
};
