import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";


import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Radar,
  Activity,
  Cpu,
  Building2,
  Lock,
  MapPin,
  Mail,
  Phone,
  Smartphone,
  CheckCircle2,
  Network,
  Wrench,
  Compass,
} from "lucide-react";
import heroImage from "@/assets/hero-orbit.jpg";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zeker Innovations | Orbit Fiets Smart Cycle Parking" },
      {
        name: "description",
        content:
          "Zeker Innovations introduces Orbit Fiets, a smart cycle parking and monitoring innovation built for safety, efficiency, and theft control.",
      },
      { property: "og:title", content: "Zeker Innovations | Orbit Fiets Smart Cycle Parking" },
      {
        property: "og:description",
        content:
          "Smart, in-house ideated cycle parking innovation from Voorburg, Netherlands — built for safety, efficiency, and theft control.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "Zeker Innovations" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zeker Innovations | Orbit Fiets" },
      {
        name: "twitter:description",
        content: "Smart Tracking. Zero Theft. A Netherlands-based smart cycle parking innovation.",
      },
      { name: "theme-color", content: "#0f1b3d" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Zeker Innovations",
          url: "/",
          email: "zeker.innovations@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Balen van Andelplein 109",
            postalCode: "2273 LH",
            addressLocality: "Voorburg",
            addressCountry: "NL",
          },
        }),
      },
    ],
  }),
  component: LandingPage,
});

const navLinks: Array<{ label: string; href: string; to?: string }> = [
  { label: "About", href: "#about" },
  { label: "Orbit Fiets", href: "#built" },
  { label: "Why It Matters", href: "#why" },
  { label: "Contact", href: "#contact" },
  { label: "Privacy Policy", href: "/privacy-policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions", to: "/terms-and-conditions" },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Built />
        <Why />
        <Partnership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:h-20">
        <a href="#top" className="group flex items-center gap-2.5">
          <Mark />
          <span className="font-display text-[15px] font-bold tracking-tight sm:text-base">
            Zeker <span className="font-medium text-muted-foreground">Innovations</span>
          </span>
        </a>
        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-1.5 rounded-full bg-[color:var(--navy-deep)] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[color:var(--navy)] hover:shadow-glow md:inline-flex"
          >
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          >
            <span className="space-y-[5px]">
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-[color:var(--navy-deep)] px-4 py-2.5 text-sm font-semibold text-white"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Mark() {
  return (
    <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--navy-deep)] text-white shadow-soft">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" opacity=".5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </svg>
    </span>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="top" className="relative isolate overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 bg-blueprint opacity-60" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[color:var(--navy-deep)]" />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32 lg:pt-28"
      >
        <div>
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.22em] text-white/75 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[color:var(--mint)] opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-[color:var(--mint)]" />
            </span>
            Zeker Innovations · Voorburg, NL
          </div>

          <h1 className="reveal mt-7 font-display text-[2.4rem] font-bold leading-[1.04] tracking-[-0.025em] sm:text-5xl lg:text-[3.75rem]">
            Smart Tracking.
            <br />
            <span className="text-light-gradient">Zero Theft.</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-[15px] leading-relaxed text-white/70 sm:text-lg">
            Introducing <span className="font-semibold text-white">Orbit Fiets</span> — a smart, in-house
            ideated cycle parking innovation built for safety, efficiency, and theft control across
            European cities.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)] shadow-elevated transition-transform hover:scale-[1.02]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <dl className="reveal mt-14 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            {[
              { k: "In-House", v: "Developed" },
              { k: "Smart", v: "Cycle Parking" },
              { k: "Theft", v: "Control" },
            ].map((s) => (
              <div key={s.k} className="bg-[color:var(--navy-deep)]/40 px-4 py-4">
                <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">{s.k}</dt>
                <dd className="mt-1 font-display text-base font-semibold text-white">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Hero visual */}
        <div className="reveal relative">
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--steel)_45%,transparent),transparent_70%)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-elevated">
            <img
              src={heroImage}
              alt="Orbit Fiets smart cycle parking dock with IoT signal mesh"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[color:var(--navy-deep)]/40 via-transparent to-transparent" />
            {/* Floating status chips */}
            <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[color:var(--navy-deep)]/70 px-3 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--mint)]" />
              Dock #014 · Secure
            </div>
            <div className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[color:var(--navy-deep)]/70 px-3 py-1.5 text-[11px] font-medium text-white/85 backdrop-blur">
              <Radar className="h-3 w-3" /> Live tracking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section header ---------------- */

function SectionHeader({
  eyebrow,
  title,
  children,
  center,
  invert,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] ${
          invert
            ? "border border-white/15 bg-white/[0.04] text-white/75"
            : "border border-border bg-surface text-muted-foreground"
        }`}
      >
        <span className={`h-1 w-1 rounded-full ${invert ? "bg-[color:var(--mint)]" : "bg-[color:var(--steel)]"}`} />
        {eyebrow}
      </span>
      <h2
        className={`mt-5 font-display text-[1.9rem] font-bold leading-[1.1] tracking-[-0.02em] sm:text-4xl lg:text-[2.6rem] ${
          invert ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {children && (
        <div
          className={`mt-5 space-y-4 text-[15px] leading-relaxed sm:text-base ${
            invert ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ---------------- About ---------------- */

function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="border-b border-border bg-background py-24 sm:py-32">
      <div
        ref={ref}
        className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr] lg:gap-20"
      >
        <div className="reveal">
          <SectionHeader
            eyebrow="About Us"
            title={
              <>
                Ideated, Engineered, and{" "}
                <span className="text-accent-gradient">Owned In-House</span>
              </>
            }
          >
            <p>
              Zeker Innovations is a Netherlands-based technology company headquartered in
              Voorburg, built on a simple principle: original ideas, developed entirely by our own
              team.
            </p>
            <p>
              Our flagship innovation, Orbit Fiets, is a smart cycle parking and monitoring
              solution — conceived, designed, and developed completely in-house, and protected
              under our own intellectual property.
            </p>
            <p>
              As we scale into large, high-volume parking facilities, our roadmap includes
              IoT-enabled infrastructure to further enhance monitoring and efficiency.
            </p>
          </SectionHeader>
        </div>

        <aside className="reveal relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-elevated">
            <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-[color:var(--steel)]/15 blur-2xl" />
            <div className="relative flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--navy-deep)] text-white">
                <Compass className="h-5 w-5" />
              </span>
              <h3 className="font-display text-lg font-bold">Company Focus</h3>
            </div>
            <ul className="relative mt-7 space-y-4">
              {[
                "Original in-house innovation",
                "Smart urban mobility",
                "Cycle parking safety",
                "Scalable IoT roadmap",
                "Theft-control infrastructure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] font-medium">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--steel)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- What We've Built ---------------- */

const features = [
  { icon: Radar, title: "Smart Tracking", desc: "Designed to help monitor cycle parking activity with greater visibility and control." },
  { icon: ShieldCheck, title: "Theft-Control Design", desc: "Built with security-first thinking to reduce theft risk and improve user confidence." },
  { icon: Activity, title: "Efficient Parking Flow", desc: "Helps create a more organized and transparent parking experience for everyday cyclists." },
  { icon: Cpu, title: "IoT-Ready Roadmap", desc: "Built to scale toward connected infrastructure for high-volume parking facilities." },
  { icon: Lock, title: "In-House IP", desc: "Conceived, engineered, and owned by the Zeker Innovations team." },
  { icon: Building2, title: "Built for Cities", desc: "Designed for safer, smarter, and more efficient urban mobility environments." },
];

function Built() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="built" className="relative overflow-hidden bg-[color:var(--navy-deep)] py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-blueprint opacity-50" />
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[color:var(--steel)]/25 blur-3xl" />
      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-3xl text-center">
          <SectionHeader
            invert
            center
            eyebrow="What We've Built"
            title={
              <>
                Orbit Fiets — Smart. Efficient.
                <br className="hidden sm:block" />{" "}
                <span className="text-light-gradient">Theft-Proof by Design.</span>
              </>
            }
          >
            <p>
              Orbit Fiets gives everyday cyclists a safer, more transparent parking experience —
              built to be efficient, intelligent, and effective at preventing theft.
            </p>
            <p>
              Developed entirely in-house, Orbit Fiets is built to scale — from individual parking
              spots today to fully connected, IoT-enabled bulk parking facilities as we grow.
            </p>
          </SectionHeader>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="reveal group relative bg-[color:var(--navy-deep)]/60 p-8 transition-colors hover:bg-[color:var(--navy)]/70"
            >
              <span className="inline-grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06] text-[color:var(--mint)] transition-colors group-hover:bg-white/[0.1]">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why It Matters ---------------- */

const problems = [
  {
    p: "Cycle theft creates low trust for everyday riders.",
    s: "Orbit Fiets is designed around theft-control and transparent monitoring.",
  },
  {
    p: "Parking areas can become disorganized and inefficient.",
    s: "Orbit Fiets supports smarter parking flow and better space utilization.",
  },
  {
    p: "Cities need scalable mobility infrastructure.",
    s: "Orbit Fiets is built with an IoT-enabled roadmap for future high-volume facilities.",
  },
];

function Why() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="why" className="border-b border-border bg-surface py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="reveal">
          <SectionHeader
            center
            eyebrow="Why It Matters"
            title={
              <>
                Smarter Parking for{" "}
                <span className="text-accent-gradient">Safer Streets</span>
              </>
            }
          >
            <p>
              Cycle theft and disorganized parking remain persistent challenges in growing cities.
              Orbit Fiets tackles this head-on — combining smart design with theft-control
              technology to deliver a more secure, more efficient parking experience.
            </p>
          </SectionHeader>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {problems.map((row, i) => (
            <div
              key={i}
              className="reveal group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elevated"
            >
              <span className="absolute right-6 top-6 font-display text-5xl font-bold text-[color:var(--steel)]/15">
                0{i + 1}
              </span>
              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--destructive)]/80">
                  Problem
                </span>
                <p className="mt-2 font-display text-lg font-semibold leading-snug">{row.p}</p>
              </div>
              <div className="my-6 h-px bg-border" />
              <div className="relative">
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[color:var(--steel)]">
                  Solution
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.s}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Safer Parking" },
            { icon: Radar, label: "Better Visibility" },
            { icon: Lock, label: "Theft-Control Focus" },
            { icon: Network, label: "Scalable Infrastructure" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 bg-card px-6 py-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--navy-deep)] text-white">
                <Icon className="h-5 w-5" strokeWidth={1.7} />
              </span>
              <span className="font-display text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Partnership ---------------- */

function Partnership() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative overflow-hidden bg-[color:var(--navy-deep)] py-24 text-white sm:py-32">
      <div className="absolute inset-0 bg-blueprint opacity-40" />
      <div className="absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[color:var(--steel)]/25 blur-3xl" />
      <div ref={ref} className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <div className="reveal">
          <SectionHeader
            invert
            center
            eyebrow="Partnership & Funding"
            title={
              <>
                An Innovation{" "}
                <span className="text-light-gradient">Built to Scale</span>
              </>
            }
          >
            <p>
              We're an in-house innovation team turning original ideas into real-world solutions —
              and we're open to connecting with partners and investors who believe in smarter,
              safer urban mobility.
            </p>
          </SectionHeader>
          <div className="mt-10 flex justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[color:var(--navy-deep)] shadow-elevated transition-transform hover:scale-[1.02]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-5 text-sm text-white/65">
            Interested in partnerships, funding conversations, or smart mobility collaboration?
            Reach out to Zeker Innovations.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

type FormState = { name: string; email: string; company: string; message: string };
type FormErrors = Partial<Record<keyof FormState, string>>;

function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [values, setValues] = useState<FormState>({ name: "", email: "", company: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (v: FormState): FormErrors => {
    const e: FormErrors = {};
    if (!v.name.trim() || v.name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) e.email = "Enter a valid email address.";
    if (!v.message.trim() || v.message.trim().length < 10)
      e.message = "Please share a few details (10+ characters).";
    return e;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setValues({ name: "", email: "", company: "", message: "" });
    }
  };

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [k]: e.target.value };
    setValues(next);
    if (errors[k]) setErrors(validate(next));
  };

  return (
    <section id="contact" className="bg-background py-24 sm:py-32">
      <div ref={ref} className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="reveal">
          <SectionHeader
            eyebrow="Contact"
            title={
              <>
                Let's build it{" "}
                <span className="text-accent-gradient">together</span>
              </>
            }
          >
            <p>
              Reach out for partnerships, investor conversations, or smart mobility
              collaboration. We typically respond within a few business days.
            </p>
          </SectionHeader>

          <ul className="mt-10 space-y-3">
            <ContactRow icon={MapPin} label="Address">
              Balen van Andelplein 109, 2273 LH Voorburg, Netherlands
            </ContactRow>
            <ContactRow icon={Mail} label="Email">
              <a
                href="mailto:zeker.innovations@gmail.com"
                className="hover:text-[color:var(--steel)]"
              >
                zeker.innovations@gmail.com
              </a>
            </ContactRow>
            <ContactRow icon={Phone} label="Phone">
              Available soon
            </ContactRow>
            <ContactRow icon={Smartphone} label="App">
              Available soon on Google Play and the App Store.
            </ContactRow>
          </ul>
        </div>

        <div className="reveal relative">
          <form
            onSubmit={onSubmit}
            noValidate
            className="relative space-y-5 rounded-3xl border border-border bg-card p-7 shadow-elevated sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                name="name"
                value={values.name}
                onChange={update("name")}
                error={errors.name}
                required
              />
              <Field
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={update("email")}
                error={errors.email}
                required
              />
            </div>
            <Field
              label="Company"
              name="company"
              value={values.company}
              onChange={update("company")}
            />
            <div>
              <Label>Message</Label>
              <textarea
                name="message"
                required
                rows={5}
                value={values.message}
                onChange={update("message")}
                aria-invalid={!!errors.message}
                className={`mt-2 w-full resize-none rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-all focus:ring-4 focus:ring-[color:var(--steel)]/15 ${
                  errors.message ? "border-[color:var(--destructive)]" : "border-input focus:border-[color:var(--steel)]"
                }`}
                placeholder="Tell us about your interest in Orbit Fiets…"
              />
              {errors.message && <ErrorText>{errors.message}</ErrorText>}
            </div>
            <button
              type="submit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--navy-deep)] px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all hover:bg-[color:var(--navy)] hover:shadow-glow sm:w-auto"
            >
              Send Message
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            {submitted && (
              <div
                role="status"
                className="flex items-start gap-3 rounded-xl border border-[color:var(--mint)]/40 bg-[color:var(--mint)]/10 p-4 text-sm"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--steel)]" />
                <p className="font-medium">
                  Thank you for contacting Zeker Innovations. We'll get back to you soon.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4 transition-colors hover:border-[color:var(--steel)]/40">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--navy-deep)] text-white">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 break-words text-sm font-medium">{children}</p>
      </div>
    </li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
      {children}
    </label>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs font-medium text-[color:var(--destructive)]">{children}</p>;
}

function Field({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        aria-invalid={!!error}
        className={`mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition-all focus:ring-4 focus:ring-[color:var(--steel)]/15 ${
          error ? "border-[color:var(--destructive)]" : "border-input focus:border-[color:var(--steel)]"
        }`}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (

    <footer className="border-t border-white/10 bg-[color:var(--navy-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Mark />
            <span className="font-display text-base font-bold">
              Zeker <span className="font-medium text-white/70">Innovations</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            Introducing Orbit Fiets — Smart Tracking. Zero Theft. A Netherlands-based innovation
            company building safer, smarter urban mobility.
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">Visit</h4>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            Balen van Andelplein 109
            <br />
            2273 LH Voorburg, Netherlands
          </p>
        </div>
        <div>
          <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">Reach Us</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/80">
            <li>
              <a href="mailto:zeker.innovations@gmail.com" className="hover:text-white">
                zeker.innovations@gmail.com
              </a>
            </li>
            <li>Phone — Available soon</li>
            <li className="text-white/65">Available soon on Google Play and the App Store.</li>
            <li className="pt-2">
              <Link
                to="/privacy-policy"
                className="text-white/80 transition-colors hover:text-white hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="text-white/80 transition-colors hover:text-white hover:underline underline-offset-4"
              >
                Terms & Conditions
              </Link>
            </li>

          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/55 sm:flex-row sm:px-8">
          <p>© {year} Zeker Innovations. All rights reserved.</p>
          <p className="font-medium text-white/70">Voorburg · Netherlands</p>
        </div>
      </div>
    </footer>
  );
}


