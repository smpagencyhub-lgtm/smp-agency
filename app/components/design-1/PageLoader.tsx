"use client";

/**
 * Route loader for Next.js Suspense (loading.tsx).
 * Entrance animation + staggered reveal create a natural, professional feel.
 */
export default function PageLoader() {
  return (
    <div
      className="page-loader-backdrop fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      aria-live="polite"
      aria-busy="true"
      role="status"
    >
      <div className="page-loader-content flex flex-col items-center">
        {/* Dual-ring spinner — more refined, appears first */}
        <div className="page-loader-spinner relative h-12 w-12" aria-hidden>
          <div className="absolute inset-0 rounded-full border-2 border-gray-100" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-theme-brand animate-spin" />
          <div
            className="absolute inset-1 rounded-full border-2 border-transparent border-b-theme-brand-muted animate-spin"
            style={{ animationDirection: "reverse", animationDuration: "1.2s" }}
          />
        </div>
        {/* Progress track — appears after spinner */}
        <div className="page-loader-track mt-6 w-40 h-1 overflow-hidden rounded-full bg-gray-100">
          <div className="loader-bar h-full w-1/3 rounded-full bg-theme-brand" />
        </div>
        <p className="page-loader-label mt-4 text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
          Loading
        </p>
      </div>
      <style jsx>{`
        .page-loader-backdrop {
          animation: loaderBackdropIn 0.45s ease-out forwards;
        }
        .page-loader-content {
          opacity: 0;
          transform: translateY(8px);
          animation: loaderContentIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) 0.12s
            forwards;
        }
        .page-loader-spinner {
          opacity: 0;
          transform: scale(0.92);
          animation: loaderSpinnerIn 0.4s cubic-bezier(0.22, 1, 0.36, 1) 0.18s
            forwards;
        }
        .page-loader-track {
          opacity: 0;
          transform: translateY(4px);
          animation: loaderTrackIn 0.35s ease-out 0.35s forwards;
        }
        .page-loader-label {
          opacity: 0;
          animation: loaderLabelIn 0.3s ease-out 0.5s forwards;
        }
        @keyframes loaderBackdropIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes loaderContentIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes loaderSpinnerIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes loaderTrackIn {
          from {
            opacity: 0;
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes loaderLabelIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes page-loader-bar {
          0%,
          100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(250%);
          }
        }
        .loader-bar {
          animation: page-loader-bar 1.4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
