"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <SonnerToaster
      position="top-center"
      toastOptions={{
        className:
          "!bg-neutral-900 !border-neutral-700 !text-white !shadow-xl",
        style: {
          background: "rgb(23 23 23)",
          border: "1px solid rgb(64 64 64)",
          color: "white",
          borderRadius: "12px",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
        },
      }}
      richColors
      closeButton
    />
  );
}
