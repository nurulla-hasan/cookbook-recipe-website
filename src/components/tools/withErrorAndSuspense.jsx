
import React, { Suspense } from "react";
import { ErrorBoundary } from "./ErrorBoundary";

export const withErrorAndSuspense = (ComponentOrElement, fallback = <div>Loading...</div>) => {
    const elem = React.isValidElement(ComponentOrElement) ? ComponentOrElement : <ComponentOrElement />;
    return (
        <ErrorBoundary>
            <Suspense fallback={fallback}>{elem}</Suspense>
        </ErrorBoundary>
    );
};