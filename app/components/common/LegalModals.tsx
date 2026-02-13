"use client";

import { useEffect } from "react";

// --- LEGAL CONTENT DATA ---
const LEGAL_CONTENT = {
  terms: {
    title: "Terms of Policy",
    date: "06/08/25",
    content: (
      <div className="space-y-8 text-gray-300 font-light leading-relaxed">
        {/* Intro */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">1. Introduction</h4>
          <p>
            Welcome to SMP Agency (“we,” “us,” or “our”). By accessing or using
            our website located at{" "}
            <span className="text-red-500">https://smpagency.co.uk/</span>{" "}
            (“Site”) and utilizing our agency services, you agree to be bound by
            these Terms of Policy (“Terms”). If you disagree with any part of
            these terms, you may not access the Site.
          </p>
        </section>

        {/* Services */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">2. Services</h4>
          <p>
            SMP Agency provides management, marketing, and support services for
            content creators and social media personalities. We reserve the
            right to modify, suspend, or discontinue any part of our services at
            any time without prior notice.
          </p>
        </section>

        {/* User Obligations */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            3. User Obligations
          </h4>
          <p className="mb-2">By using the Site, you agree to:</p>
          <ul className="list-disc pl-5 space-y-2 marker:text-red-600">
            <li>
              Provide accurate, current, and complete information when
              submitting contact forms or inquiries.
            </li>
            <li>
              Use the Site only for lawful purposes and in accordance with these
              Terms.
            </li>
            <li>
              Not use the Site in any way that could damage, disable,
              overburden, or impair the Site or interfere with any other
              party&apos;s use.
            </li>
          </ul>
        </section>

        {/* IP */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            4. Intellectual Property
          </h4>
          <p>
            The content, features, and functionality of the Site (including but
            not limited to text, graphics, logos, and software) are owned by SMP
            Agency and are protected by international copyright, trademark, and
            other intellectual property laws.
          </p>
        </section>

        {/* Liability */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            5. Limitation of Liability
          </h4>
          <p>
            To the fullest extent permitted by law, SMP Agency shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including without limitation, loss of profits,
            data, use, goodwill, or other intangible losses, resulting from your
            access to or use of or inability to access or use the Site.
          </p>
        </section>

        {/* Governing Law */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            6. Governing Law
          </h4>
          <p>
            These Terms shall be governed and construed in accordance with the
            laws of the jurisdiction in which SMP Agency operates, without
            regard to its conflict of law provisions.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">7. Contact Us</h4>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mt-2 text-white">
            Email:{" "}
            <a
              href="mailto:Smpteammedia@gmail.com"
              className="text-red-500 hover:underline"
            >
              Smpteammedia@gmail.com
            </a>
          </p>
        </section>
      </div>
    ),
  },
  privacy: {
    title: "Privacy Policy",
    date: "06/08/25",
    content: (
      <div className="space-y-8 text-gray-300 font-light leading-relaxed">
        <p>
          SMP Agency (“we,” “us,” or “our”) respects your privacy and is
          committed to protecting your personal data in accordance with the UK
          GDPR and EU GDPR. This Privacy Policy explains how we collect, use,
          and safeguard your information when you visit our website,{" "}
          <span className="text-red-500">https://smpagency.co.uk/</span>{" "}
          (“Site”).
        </p>

        {/* 1. What We Collect */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            1. What We Collect
          </h4>
          <div className="space-y-4">
            <div>
              <strong className="text-white block mb-1">
                Personal Data You Provide:
              </strong>
              <ul className="list-disc pl-5 space-y-1 marker:text-red-600">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Social media handles</li>
                <li>Business details (if applicable)</li>
                <li>Any other data submitted via our contact forms</li>
              </ul>
            </div>
            <div>
              <strong className="text-white block mb-1">
                Automatically Collected Data:
              </strong>
              <ul className="list-disc pl-5 space-y-1 marker:text-red-600">
                <li>IP address</li>
                <li>Device/browser info</li>
                <li>Pages visited</li>
                <li>Time on site</li>
                <li>Referring URLs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 2. Legal Basis */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            2. Legal Basis for Processing (GDPR)
          </h4>
          <p className="mb-2">
            Under GDPR, we process your personal data under the following legal
            bases:
          </p>
          <ul className="list-disc pl-5 space-y-2 marker:text-red-600">
            <li>
              <strong className="text-white">Consent:</strong> When you actively
              provide data (e.g., submitting a contact form).
            </li>
            <li>
              <strong className="text-white">Contract:</strong> When data is
              needed to provide services or respond to inquiries.
            </li>
            <li>
              <strong className="text-white">Legitimate Interests:</strong> For
              business analytics, site optimization, or to prevent fraud.
            </li>
            <li>
              <strong className="text-white">Legal Obligation:</strong> When we
              must retain data due to legal or regulatory requirements.
            </li>
          </ul>
        </section>

        {/* 3. Usage */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            3. How We Use Your Info
          </h4>
          <ul className="list-disc pl-5 space-y-1 marker:text-red-600">
            <li>Communicate with you</li>
            <li>Respond to inquiries or service requests</li>
            <li>Improve the Site and user experience</li>
            <li>Send newsletters or marketing (only if you opt-in)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* 4. Sharing */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">4. Data Sharing</h4>
          <p className="mb-2">
            We do not sell your data. We may share information with:
          </p>
          <ul className="list-disc pl-5 space-y-1 marker:text-red-600">
            <li>
              Trusted third-party vendors (hosting, analytics, email tools)
            </li>
            <li>Legal authorities if required to comply with laws</li>
          </ul>
          <p className="mt-2 text-sm italic">
            All vendors are contractually obligated to keep your information
            secure and confidential.
          </p>
        </section>

        {/* 5. Rights */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            5. Your GDPR Rights
          </h4>
          <p className="mb-2">You have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 marker:text-red-600">
            <li>Access your personal data</li>
            <li>Rectify incorrect or incomplete data</li>
            <li>Erase your data (“right to be forgotten”)</li>
            <li>Restrict or object to processing</li>
            <li>Request data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, email us at{" "}
            <a
              href="mailto:Smpteammedia@gmail.com"
              className="text-red-500 hover:underline"
            >
              Smpteammedia@gmail.com
            </a>
            . If you&apos;re in the EU/UK and unsatisfied, you may also contact
            your local data protection authority.
          </p>
        </section>

        {/* 6-10 Miscellaneous */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            6. Data Retention
          </h4>
          <p>
            We only keep personal data as long as necessary to fulfill the
            purposes we collected it for, including legal, accounting, or
            reporting obligations.
          </p>
        </section>

        <section>
          <h4 className="text-white font-bold text-lg mb-3">7. Cookies</h4>
          <p>
            This Site uses cookies to function properly and track performance.
            You can manage cookie preferences in your browser settings. We also
            use services like Google Analytics, which may store cookies on your
            device. These tools do not give us access to your personal identity.
          </p>
        </section>

        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            8. International Transfers
          </h4>
          <p>
            If you are based outside the UK and EU, your data may be processed
            in countries with different data protection standards. We ensure
            appropriate safeguards (e.g., Standard Contractual Clauses) are in
            place when transferring data.
          </p>
        </section>

        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            9. Third-Party Links
          </h4>
          <p>
            We may link to external sites. We are not responsible for their
            privacy practices. Always read their privacy policies before
            submitting data.
          </p>
        </section>

        <section>
          <h4 className="text-white font-bold text-lg mb-3">
            10. Updates to This Policy
          </h4>
          <p>
            We may occasionally update this Privacy Policy. When we do, we will
            update the “Effective Date” at the top. Continued use of the Site
            after changes means you accept the updated terms.
          </p>
        </section>

        {/* 11. Contact */}
        <section>
          <h4 className="text-white font-bold text-lg mb-3">11. Contact Us</h4>
          <p className="mb-2">
            If you have any questions or concerns about this policy or your
            data, reach out:
          </p>
          <p className="text-white font-semibold">SMP Agency</p>
          <p>
            Website: <span className="text-red-500">www.smpagency.com</span>
          </p>
          <p>
            Email:{" "}
            <a
              href="mailto:Smpteammedia@gmail.com"
              className="text-red-500 hover:underline"
            >
              Smpteammedia@gmail.com
            </a>
          </p>
        </section>
      </div>
    ),
  },
};

interface LegalModalsProps {
  activeModal: "terms" | "privacy" | null;
  onClose: () => void;
}

export default function LegalModals({
  activeModal,
  onClose,
}: LegalModalsProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeModal]);

  if (!activeModal) return null;

  const content = LEGAL_CONTENT[activeModal];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-sm modal-backdrop-animate"
      onClick={onClose} // Click backdrop to close
    >
      <div
        className="relative w-full max-w-3xl bg-neutral-900 border border-neutral-800 rounded-xl shadow-[0_0_40px_-10px_rgba(220,38,38,0.3)] flex flex-col max-h-[85vh] modal-content-animate"
        onClick={(e) => e.stopPropagation()} // Prevent close on content click
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 bg-neutral-900 sticky top-0 z-10 rounded-t-xl">
          <div>
            <h2 className="text-2xl font-bold text-white">{content.title}</h2>
            <p className="text-red-500 text-sm mt-1">
              Effective Date: {content.date}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:rotate-90"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto legal-scrollbar">
          {content.content}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-800 bg-neutral-900/50 flex justify-end rounded-b-xl">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-lg transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
