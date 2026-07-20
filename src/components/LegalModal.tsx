import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export type LegalKind = "privacy" | "terms";

interface LegalModalProps {
  kind: LegalKind;
  onClose: () => void;
  returnFocusRef?: React.RefObject<HTMLElement | null>;
}

const TITLES: Record<LegalKind, string> = {
  privacy: "Privacy Policy",
  terms: "Terms & Conditions",
};

export function LegalModal({ kind, onClose, returnFocusRef }: LegalModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const titleId = `legal-modal-title-${kind}`;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const prevActive = document.activeElement as HTMLElement | null;
    // Focus close button on open
    requestAnimationFrame(() => closeBtnRef.current?.focus());

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      } else if (e.key === "Tab") {
        const root = dialogRef.current;
        if (!root) return;
        const focusables = root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      const target = returnFocusRef?.current ?? prevActive;
      target?.focus?.();
    };
  }, [onClose, returnFocusRef]);

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[color:var(--navy-deep)]/70 px-4 py-8 backdrop-blur-sm animate-in fade-in duration-200"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex w-full max-w-[850px] max-h-[80vh] flex-col overflow-hidden rounded-3xl border border-border bg-card text-card-foreground shadow-elevated animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-6 py-5 sm:px-8">
          <div>
            <h2
              id={titleId}
              className="font-display text-xl font-bold tracking-tight sm:text-2xl"
            >
              {TITLES[kind]}
            </h2>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Effective Date: 17 July 2026
            </p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-4 focus:ring-[color:var(--steel)]/20"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          {kind === "privacy" ? <PrivacyContent /> : <TermsContent />}
        </div>
      </div>
    </div>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-7 font-display text-base font-bold tracking-tight sm:text-lg">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{children}</p>;
}

function UL({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
      {children}
    </ul>
  );
}

function LI({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--steel)]" />
      <span>{children}</span>
    </li>
  );
}

function PrivacyContent() {
  return (
    <div className="text-foreground">
      <P>
        Data Controller: Zeker Innovations, a sole proprietorship (eenmanszaak) registered with the Dutch Chamber of Commerce (KVK) under number 42004595, registered address Balen van Andelplein 109, 2273 LH, Voorburg, Netherlands.
      </P>

      <H3>1. Introduction</H3>
      <P>
        Zeker Innovations ("we", "us", "our") is committed to protecting the privacy and personal data of users of our website (zekerinnovations.com), mobile applications, and connected hardware platform (together, the "Services"). This Privacy Policy explains what personal data we collect, why we collect it, how we use and protect it, and what rights you have under the General Data Protection Regulation (Regulation (EU) 2016/679, "GDPR") and applicable Dutch law (UAVG).
      </P>
      <P>
        By using our Services, you acknowledge that you have read and understood this Privacy Policy.
      </P>

      <H3>2. Data We Collect</H3>
      <UL>
        <LI>
          <strong className="text-foreground">Account Data:</strong> name, email address, and phone number provided during registration and account verification.
        </LI>
        <LI>
          <strong className="text-foreground">Device & Telemetry Data:</strong> hardware state and status events and associated timestamps generated by your connected device.
        </LI>
        <LI>
          <strong className="text-foreground">Device Identifiers:</strong> mobile push-notification tokens and device identifiers used to route real-time operational alerts.
        </LI>
        <LI>
          <strong className="text-foreground">Technical Data:</strong> IP address, app version, and basic diagnostic/log data.
        </LI>
      </UL>

      <H3>3. Purposes and Legal Basis for Processing</H3>
      <UL>
        <LI>
          <strong className="text-foreground">Performance of a contract (Art. 6(1)(b)):</strong> to create and manage your account and operate the Services.
        </LI>
        <LI>
          <strong className="text-foreground">Legitimate interests (Art. 6(1)(f)):</strong> network security, fraud prevention, service reliability.
        </LI>
        <LI>
          <strong className="text-foreground">Legal obligation (Art. 6(1)(c)):</strong> to comply with applicable law.
        </LI>
        <LI>
          <strong className="text-foreground">Consent (Art. 6(1)(a)):</strong> for optional marketing communications, withdrawable at any time.
        </LI>
      </UL>

      <H3>4. Data Retention</H3>
      <P>
        Account Data and Telemetry/log data are each retained for up to 90 days after account closure or collection, after which they are deleted or anonymised.
      </P>

      <H3>5. Sharing of Data and Sub-Processors</H3>
      <P>
        We do not sell or rent personal data. We share data with trusted processors under data processing agreements, including Microsoft Azure (hosting) and OneSignal (push notifications).
      </P>

      <H3>6. International Data Transfers</H3>
      <P>
        Where data is processed outside the EEA, we use appropriate safeguards such as Standard Contractual Clauses.
      </P>

      <H3>7. Data Security</H3>
      <P>
        We use encryption in transit and at rest, access controls, and regular security review of infrastructure providers.
      </P>

      <H3>8. Your Rights Under GDPR</H3>
      <P>
        You have the right to access, rectify, erase, restrict, port, and object to processing of your data, and to withdraw consent at any time. Contact us to exercise these rights, or lodge a complaint with the Dutch Data Protection Authority (autoriteitpersoonsgegevens.nl).
      </P>

      <H3>9. Children's Privacy</H3>
      <P>
        Our Services are not intended for individuals under 16.
      </P>

      <H3>10. Contact Us</H3>
      <P>
        For questions or data requests: <a href="mailto:zeker.innovations@gmail.com" className="font-medium text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--steel)]">zeker.innovations@gmail.com</a>.
      </P>

      <H3>11. Changes to This Policy</H3>
      <P>
        We may update this Policy from time to time, with the Effective Date revised accordingly.
      </P>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="text-foreground">
      <P>
        These Terms govern your access to and use of the website, software applications, and connected hardware infrastructure operated by Zeker Innovations, a sole proprietorship (eenmanszaak), KVK number 42004595, registered address Balen van Andelplein 109, 2273 LH, Voorburg, Netherlands.
      </P>

      <H3>1. Eligibility</H3>
      <P>
        You must be at least 16 years old to use the Services.
      </P>

      <H3>2. Account and Operational Security</H3>
      <P>
        You are responsible for your login credentials. Notify us at <a href="mailto:zeker.innovations@gmail.com" className="font-medium text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--steel)]">zeker.innovations@gmail.com</a> if you suspect unauthorised access.
      </P>

      <H3>3. Acceptable Use</H3>
      <P>
        You agree not to reverse-engineer our software/hardware, intercept or misuse data, use the Services unlawfully, gain unauthorised access, or introduce malware.
      </P>

      <H3>4. Proprietary Rights</H3>
      <P>
        Zeker Innovations retains full ownership of all software, backend logic, and hardware sensor components.
      </P>

      <H3>5. Third-Party Services</H3>
      <P>
        We rely on third-party infrastructure providers and are not liable for their outages.
      </P>

      <H3>6. Disclaimers and Limitation of Liability</H3>
      <P>
        Services are provided "as-is." Our liability is capped at the amount you've paid (if any) in the preceding 12 months, except where liability cannot be limited under Dutch/EU law.
      </P>

      <H3>7. Indemnification</H3>
      <P>
        You agree to indemnify Zeker Innovations against claims arising from your breach of these Terms.
      </P>

      <H3>8. Suspension and Termination</H3>
      <P>
        We may suspend/terminate accounts for violations; you may terminate anytime via <a href="mailto:zeker.innovations@gmail.com" className="font-medium text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--steel)]">zeker.innovations@gmail.com</a>.
      </P>

      <H3>9. Changes to These Terms</H3>
      <P>
        We may update these Terms with reasonable notice of material changes.
      </P>

      <H3>10. Governing Law</H3>
      <P>
        Governed by the laws of the Netherlands; disputes go to Dutch courts, without prejudice to mandatory EU consumer rights.
      </P>

      <H3>11. Severability</H3>
      <P>
        Invalid provisions don't affect the rest of the Terms.
      </P>

      <H3>12. Contact</H3>
      <P>
        <a href="mailto:zeker.innovations@gmail.com" className="font-medium text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--steel)]">zeker.innovations@gmail.com</a>
      </P>
    </div>
  );
}
