import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { PrivacyContent } from "@/components/LegalContent";
import { Mark } from "@/components/Brand";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Zeker Innovations" },
      {
        name: "description",
        content:
          "How Zeker Innovations collects, uses, and protects personal data under GDPR and Dutch law (UAVG).",
      },
      { property: "og:title", content: "Privacy Policy — Zeker Innovations" },
      {
        property: "og:description",
        content:
          "How Zeker Innovations collects, uses, and protects personal data under GDPR and Dutch law (UAVG).",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8 lg:h-20">
          <Link to="/" className="group flex items-center gap-2.5">
            <Mark />
            <span className="font-display text-[15px] font-bold tracking-tight sm:text-base">
              Zeker <span className="font-medium text-muted-foreground">Innovations</span>
            </span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Effective Date: 17 July 2026
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <div className="mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-10">
          <PrivacyContent />
        </div>
      </main>
      <footer className="border-t border-border/60 py-8">
        <p className="mx-auto max-w-3xl px-5 text-center text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} Zeker Innovations. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
