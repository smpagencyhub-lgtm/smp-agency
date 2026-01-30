"use client";

import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

const variantStyles = {
  primary:
    "inline-block px-8 py-4 bg-[var(--theme-brand)] hover:bg-[var(--theme-brand-hover)] text-white font-semibold text-sm tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--theme-brand)] focus:ring-offset-2 focus:ring-offset-[var(--theme-bg)]",
  secondary:
    "inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 bg-white text-black font-semibold text-sm tracking-wide uppercase rounded-full hover:bg-white/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20",
} as const;

type Button2BaseProps = {
  variant?: keyof typeof variantStyles;
  showArrow?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type Button2AsLink = Button2BaseProps & {
  href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof Button2BaseProps>;

type Button2AsButton = Button2BaseProps & {
  href?: never;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof Button2BaseProps>;

export type Button2Props = Button2AsLink | Button2AsButton;

export default function Button2({
  variant = "primary",
  showArrow = false,
  size = "md",
  className = "",
  children,
  ...rest
}: Button2Props) {
  const baseStyles = variantStyles[variant];
  const sizeStyles =
    size === "sm"
      ? "text-xs gap-1.5"
      : size === "lg"
        ? "text-base gap-2.5"
        : "";
  const arrowSize =
    size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4 h-4";

  const combinedClassName = [baseStyles, sizeStyles, className]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {children}
      {showArrow && <ArrowRightIcon className={arrowSize} />}
    </>
  );

  if ("href" in rest && rest.href) {
    const { href, ...linkRest } = rest;
    return (
      <a href={href} className={combinedClassName} {...linkRest}>
        {content}
      </a>
    );
  }

  const {
    type = "button",
    href: _omit,
    ...buttonRest
  } = rest as Button2AsButton & { href?: string };
  return (
    <button type={type} className={combinedClassName} {...buttonRest}>
      {content}
    </button>
  );
}
