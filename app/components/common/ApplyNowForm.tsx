"use client";

import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countries from "world-countries";
import { toast } from "sonner";
import SearchableCountrySelect from "./SearchableCountrySelect";

const inputBase =
  "w-full px-4 py-3 bg-neutral-800/50 border border-neutral-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 focus:ring-2 focus:ring-red-600/20 transition-all duration-200";

const countryList = [...countries]
  .filter((c) => c.name.common)
  .sort((a, b) => a.name.common.localeCompare(b.name.common))
  .map((c) => ({ name: c.name.common, code: c.cca2 }));

export interface ApplyNowFormData {
  stageName: string;
  phone: string;
  instagram: string;
  country: string;
}

export interface ApplyNowFormProps {
  onSubmit?: (data: ApplyNowFormData) => void | Promise<void>;
  onCancel?: () => void;
  loading?: boolean;
}

export default function ApplyNowForm({
  onSubmit,
  onCancel,
  loading,
}: ApplyNowFormProps) {
  const [formData, setFormData] = useState<ApplyNowFormData>({
    stageName: "",
    phone: "",
    instagram: "",
    country: "",
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!error) return;
    const timer = setTimeout(() => setError(null), 4000);
    return () => clearTimeout(timer);
  }, [error]);

  const isFormEmpty =
    !formData.stageName.trim() &&
    !(formData.phone || "").trim() &&
    !formData.country.trim() &&
    !formData.instagram.trim();

  const validate = (): string | null => {
    if (!formData.stageName.trim()) {
      return "Please enter your stage name.";
    }

    if (!formData.phone || !formData.phone.trim()) {
      return "Please enter a valid phone number.";
    }

    if (!formData.country.trim()) {
      return "Please select your country.";
    }

    if (
      formData.instagram &&
      !/^[A-Za-z0-9._]{2,30}$/.test(formData.instagram.replace(/^@+/, ""))
    ) {
      return "Instagram username can only contain letters, numbers, dots and underscores.";
    }

    return null;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInstagramChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/^@+/, "");
    setFormData((prev) => ({ ...prev, instagram: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormEmpty) {
      toast.warning("Form incomplete", {
        description: "Please fill in the required fields to apply.",
      });
      setError("Please fill in the required fields to apply.");
      return;
    }

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      toast.warning("Please check your details", { description: validationError });
      return;
    }

    onSubmit?.({
      ...formData,
      instagram: formData.instagram ? `@${formData.instagram}` : "",
      phone: formData.phone || "",
    });
  };

  return (
    <div className="relative -mx-4 -my-4 sm:-mx-6 sm:-my-5 min-h-[180px]">
      {/* Loading overlay: fills full modal body (no spacing) */}
      {loading && (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-950/95 backdrop-blur-md rounded-b-xl sm:rounded-b-2xl"
          aria-hidden="true"
        >
          <div className="flex flex-col items-center gap-6 px-10 py-8 rounded-2xl border border-neutral-700/50 bg-neutral-900/98 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_25px_50px_-12px_rgba(0,0,0,0.7)] min-w-[220px]">
            <div
              className="h-11 w-11 rounded-full border-[3px] border-neutral-700 border-t-red-500 animate-spin"
              style={{ animationDuration: "0.75s" }}
            />
            <div className="text-center space-y-1.5">
              <p className="text-sm font-semibold text-white">
                Submitting application
              </p>
              <p className="text-xs text-gray-500">
                Please wait a moment…
              </p>
            </div>
          </div>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className={`relative space-y-4 sm:space-y-5 px-4 py-4 sm:px-6 sm:py-5 ${loading ? "pointer-events-none" : ""}`}
      >
      {error && (
        <div className="rounded-lg bg-red-600/20 border border-red-600/50 text-red-400 px-4 py-3 text-sm">
          {error}
        </div>
      )}
      <div>
        <label
          htmlFor="stageName"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Stage Name *
        </label>
        <input
          type="text"
          id="stageName"
          name="stageName"
          required
          value={formData.stageName}
          onChange={handleChange}
          className={inputBase}
          placeholder="Your stage / display name"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Phone *
        </label>
        <PhoneInput
          international
          defaultCountry="US"
          value={formData.phone || undefined}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, phone: value || "" }))
          }
          placeholder="Enter phone number"
          className="apply-form-phone-input"
          numberInputProps={{
            id: "phone",
            name: "phone",
            required: true,
          }}
        />
      </div>

      <div>
        <label
          htmlFor="instagram"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Instagram
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
            @
          </span>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={formData.instagram}
            onChange={handleInstagramChange}
            className={`${inputBase} pl-8`}
            placeholder="username"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="country"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Country *
        </label>
        <SearchableCountrySelect
          id="country"
          options={countryList}
          value={formData.country}
          onChange={(value) =>
            setFormData((prev) => ({ ...prev, country: value }))
          }
          required
          placeholder="Select country"
        />
      </div>

      <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4 sm:pt-5">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 px-4 py-3 sm:py-3 rounded-lg border border-neutral-600 text-gray-300 hover:bg-neutral-800 hover:border-neutral-500 transition-colors font-medium"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          disabled={!!loading}
          className="flex-1 px-4 py-3 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:ring-offset-2 focus:ring-offset-neutral-900"
        >
          {loading ? "Sending..." : "Submit"}
        </button>
      </div>
      </form>
    </div>
  );
}
