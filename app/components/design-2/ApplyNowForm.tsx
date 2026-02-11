"use client";

import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import countries from "world-countries";
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

  const validate = () => {
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

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    onSubmit?.({
      ...formData,
      instagram: formData.instagram ? `@${formData.instagram}` : "",
      phone: formData.phone || "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      {error && (
        <div className="fixed inset-x-0 top-4 z-[60] flex justify-center px-4">
          <div className="max-w-md w-full rounded-lg bg-red-600/95 text-white px-4 py-3 text-sm shadow-lg shadow-red-900/40">
            {error}
          </div>
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
  );
}
