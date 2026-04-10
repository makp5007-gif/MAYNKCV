'use client';

import { useEffect } from 'react';

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
    <div className="min-h-screen flex items-center justify-center bg-background text-white p-4">
      <div className="max-w-md w-full text-center space-y-6 bg-surface/40 p-8 rounded-3xl border border-white/10">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-white/60">An unexpected error occurred. Please try again.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
