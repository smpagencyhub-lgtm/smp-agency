"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const inputBase =
  "w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-200";

export interface CountryOption {
  name: string;
  code: string;
}

interface SearchableCountrySelectProps {
  options: CountryOption[];
  value: string;
  onChange: (value: string) => void;
  id?: string;
  required?: boolean;
  placeholder?: string;
}

export default function SearchableCountrySelect({
  options,
  value,
  onChange,
  id = "country",
  required = false,
  placeholder = "Select country",
}: SearchableCountrySelectProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const filtered = search.trim()
    ? options.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase().trim())
      )
    : options;

  const selectedOption = options.find((c) => c.name === value);

  useEffect(() => {
    if (!open || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      top: rect.bottom + 4,
      left: rect.left,
      width: rect.width,
    });
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        const portal = document.getElementById("country-select-dropdown-portal");
        if (portal?.contains(e.target as Node)) return;
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleScrollOrResize = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setPosition({
          top: rect.bottom + 4,
          left: rect.left,
          width: rect.width,
        });
      }
    };
    window.addEventListener("scroll", handleScrollOrResize, true);
    window.addEventListener("resize", handleScrollOrResize);
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize, true);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [open]);

  const handleSelect = (name: string) => {
    onChange(name);
    setOpen(false);
    setSearch("");
  };

  const dropdownContent = open && (
    <div
      id="country-select-dropdown-portal"
      role="listbox"
      className="fixed z-[200] py-2 bg-neutral-800 border border-neutral-600 rounded-lg shadow-xl max-h-64 flex flex-col"
      style={{
        top: position.top,
        left: position.left,
        width: position.width,
      }}
    >
      <div className="px-2 pb-2 shrink-0">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search countries..."
          className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-600 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
          autoFocus
          onKeyDown={(e) => e.stopPropagation()}
        />
      </div>
      <ul className="overflow-y-auto overscroll-contain max-h-48 min-h-0">
        {filtered.length === 0 ? (
          <li className="px-4 py-3 text-sm text-gray-500">No countries found</li>
        ) : (
          filtered.map((c) => (
            <li key={c.code}>
              <button
                type="button"
                role="option"
                aria-selected={value === c.name}
                onClick={() => handleSelect(c.name)}
                className={`w-full px-4 py-2.5 text-left text-sm transition-colors ${
                  value === c.name
                    ? "bg-red-600/20 text-red-400"
                    : "text-gray-300 hover:bg-neutral-700/80 hover:text-white"
                }`}
              >
                {c.name}
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        className={`${inputBase} cursor-pointer text-left flex items-center justify-between gap-2 min-h-[46px] ${
          !value ? "text-gray-500" : "text-white"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-required={required}
      >
        <span>{selectedOption ? selectedOption.name : placeholder}</span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {typeof document !== "undefined" && createPortal(dropdownContent, document.body)}

      <input
        type="text"
        name={id}
        value={value}
        readOnly
        tabIndex={-1}
        required={required}
        className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
        aria-hidden
        id={`${id}-hidden`}
      />
    </div>
  );
}
