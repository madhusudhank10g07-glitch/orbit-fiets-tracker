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
              Effective Date: July 17, 2026
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
        At Zeker Innovations, accessible from https://zekerinnovations.com and through our
        associated mobile applications, we are committed to protecting the privacy of our
        platform users. This document outlines the general data parameters processed by our
        system architecture.
      </P>

      <H3>1. Information We Process</H3>
      <P>
        To facilitate standard data transmission between hardware modules and our application
        endpoints, the system securely processes:
      </P>
      <UL>
        <LI>
          <strong className="text-foreground">User Profile Data:</strong> Basic account
          registration metrics including name, email verification, and contact phone numbers.
        </LI>
        <LI>
          <strong className="text-foreground">Telemetry Events:</strong> Binary hardware state
          changes (State A and State B logs) along with automated system timestamps.
        </LI>
        <LI>
          <strong className="text-foreground">System Identifiers:</strong> Mobile device
          communication tokens necessary for routing real-time operational notifications.
        </LI>
      </UL>

      <H3>2. Data Utilization</H3>
      <P>
        All ingested technical metrics are used strictly to maintain network synchronization,
        display live inventory availability statuses, and deliver immediate status alerts to
        authorized system administrators.
      </P>

      <H3>3. Infrastructure Partners</H3>
      <P>
        Data is encrypted and hosted securely using enterprise cloud storage environments
        (Microsoft Azure) and standard push communication pipelines (OneSignal). We do not
        share, sell, or distribute operational logs to external marketing or advertising firms.
      </P>

      <H3>4. Contact Details</H3>
      <P>For data access inquiries, please reach our administrative compliance team at:</P>
      <P>
        <a
          href="mailto:contact@zekerinnovations.com"
          className="font-medium text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--steel)]"
        >
          contact@zekerinnovations.com
        </a>
      </P>
    </div>
  );
}

function TermsContent() {
  return (
    <div className="text-foreground">
      <P>Welcome to Zeker Innovations.</P>
      <P>
        These terms and conditions govern the use of our company website, software
        applications, and integrated technology infrastructure.
      </P>
      <P>By accessing our platform, you agree to these terms in full.</P>

      <H3>1. Operational Security</H3>
      <P>
        Users are solely responsible for maintaining the absolute confidentiality of their
        system login tokens and account credentials.
      </P>

      <H3>2. Proprietary Rights</H3>
      <P>
        Zeker Innovations retains complete ownership, copyrights, and intellectual property
        rights for all software application interfaces, backend logic, and proprietary hardware
        sensor components.
      </P>
      <P>Users strictly agree not to:</P>
      <UL>
        <LI>Decompile</LI>
        <LI>Reverse-engineer</LI>
        <LI>Intercept data payloads</LI>
        <LI>Copy proprietary technologies</LI>
      </UL>

      <H3>3. Liability Limitations</H3>
      <P>Our data infrastructure is provided on an "as-is" basis.</P>
      <P>
        While we maintain high system uptime metrics, Zeker Innovations cannot be held legally
        or financially responsible for:
      </P>
      <UL>
        <LI>Unexpected network delays</LI>
        <LI>Third-party carrier failures</LI>
        <LI>Direct operational losses</LI>
        <LI>Indirect operational losses caused by data latency</LI>
      </UL>

      <H3>4. Support Framework</H3>
      <P>For administrative inquiries or compliance clarifications, please contact:</P>
      <P>
        <a
          href="mailto:contact@zekerinnovations.com"
          className="font-medium text-[color:var(--navy)] underline underline-offset-4 hover:text-[color:var(--steel)]"
        >
          contact@zekerinnovations.com
        </a>
      </P>
    </div>
  );
}
