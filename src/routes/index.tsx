import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowRight,
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
  Sparkles,
  Network,
  Wrench,
} from "lucide-react";
import heroImage from "@/assets/hero-orbit.jpg";

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
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Zeker Innovations | Orbit Fiets" },
      {
        name: "twitter:description",
        content: "Smart Tracking. Zero Theft. A Netherlands-based smart cycle parking innovation.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: LandingPage,
});

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Orbit Fiets", href: "#built" },
  { label: "Why It Matters", href: "#why" },
  { label: "Contact", href: "#contact" },
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

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient text-white shadow-glow">
            <Sparkles className="h-4 w-4" />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Zeker <span className="text-accent-gradient">Innovations</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-accent-gradient px-5 py-2 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] md:inline-flex"
          >
            Get in Touch
          </a>
          <button
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-border md:hidden"
          >
            <span className="space-y-1.5">
              <span className="block h-0.5 w-5 bg-foreground" />
              <span className="block h-0.5 w-5 bg-foreground" />
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-accent-gradient px-4 py-2 text-center text-sm font-semibold text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-hero text-white">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:32px_32px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--mint)]" /> Zeker Innovations
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Introducing <span className="text-accent-gradient">Orbit Fiets</span> — Smart Tracking. Zero Theft.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            A smart, in-house ideated and developed cycle parking innovation — built for safety,
            efficiency, and theft control.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Learn More
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: Wrench, label: "In-House Developed" },
              { icon: Radar, label: "Smart Cycle Parking" },
              { icon: ShieldCheck, label: "Built for Theft Control" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-accent-gradient">
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <span className="text-sm font-medium text-white/90">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-fade-up">
          <div className="absolute -inset-6 rounded-[2rem] bg-accent-gradient opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-elevated">
            <img
              src={heroImage}
              alt="Abstract visual of Orbit Fiets smart cycle parking with orbit lines, tracking dots, and a security shield"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  children,
  center,
}: {
  eyebrow: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
        {eyebrow}
      </span>
      <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="border-b border-border bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="About Us"
            title={<>Ideated, Engineered, and <span className="text-accent-gradient">Owned In-House</span></>}
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

        <aside className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-10 blur-2xl" />
          <div className="relative rounded-3xl border border-border bg-card p-8 shadow-elevated">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-gradient text-white">
                <Building2 className="h-5 w-5" />
              </span>
              <h3 className="font-display text-xl font-semibold">Company Focus</h3>
            </div>
            <ul className="mt-6 space-y-3">
              {[
                "Original in-house innovation",
                "Smart urban mobility",
                "Cycle parking safety",
                "Scalable IoT roadmap",
                "Theft-control infrastructure",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--teal)]" />
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

const features = [
  { icon: Radar, title: "Smart Tracking", desc: "Designed to help monitor cycle parking activity with greater visibility and control." },
  { icon: ShieldCheck, title: "Theft-Control Design", desc: "Built with security-first thinking to reduce theft risk and improve user confidence." },
  { icon: Activity, title: "Efficient Parking Flow", desc: "Helps create a more organized and transparent parking experience for everyday cyclists." },
  { icon: Cpu, title: "IoT-Ready Roadmap", desc: "Built to scale toward connected infrastructure for high-volume parking facilities." },
  { icon: Lock, title: "In-House IP", desc: "Conceived, engineered, and owned by the Zeker Innovations team." },
  { icon: Building2, title: "Built for Cities", desc: "Designed for safer, smarter, and more efficient urban mobility environments." },
];

function Built() {
  return (
    <section id="built" className="relative overflow-hidden bg-[var(--navy-deep)] py-20 text-white sm:py-28">
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(var(--color-electric)_1px,transparent_1px),linear-gradient(90deg,var(--color-electric)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
            What We've Built
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
            Orbit Fiets — <span className="text-accent-gradient">Smart. Efficient. Theft-Proof by Design.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            Orbit Fiets gives everyday cyclists a safer, more transparent parking experience —
            built to be efficient, intelligent, and effective at preventing theft.
          </p>
          <p className="mt-3 text-base leading-relaxed text-white/65 sm:text-lg">
            Developed entirely by our in-house team, Orbit Fiets is built to scale — from
            individual parking spots today to fully connected, IoT-enabled bulk parking facilities
            as we grow.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition-all hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-gradient text-white shadow-glow">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
  return (
    <section id="why" className="border-b border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          center
          eyebrow="Why It Matters"
          title={<>Smarter Parking for <span className="text-accent-gradient">Safer Streets</span></>}
        >
          <p>
            Cycle theft and disorganized parking remain persistent challenges in growing cities.
            Orbit Fiets tackles this head-on — combining smart design with theft-control
            technology to deliver a more secure, more efficient parking experience for everyone.
          </p>
        </SectionHeader>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((row, i) => (
            <div
              key={i}
              className="rounded-3xl border border-border bg-card p-7 shadow-elevated transition-transform hover:-translate-y-1"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--destructive)]">
                  Problem
                </span>
                <p className="mt-2 font-display text-lg font-semibold leading-snug">{row.p}</p>
              </div>
              <div className="my-5 h-px bg-border" />
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--teal)]">
                  Solution
                </span>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.s}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-3 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, label: "Safer Parking" },
            { icon: Radar, label: "Better Visibility" },
            { icon: Lock, label: "Theft-Control Focus" },
            { icon: Network, label: "Scalable Infrastructure" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 px-3 py-2">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                <Icon className="h-5 w-5" />
              </span>
              <span className="font-display text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="relative overflow-hidden bg-hero py-20 text-white sm:py-28">
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-gradient opacity-30 blur-3xl" />
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-[var(--electric)] opacity-25 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
          Partnership & Funding
        </span>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          An Innovation <span className="text-accent-gradient">Built to Scale</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          We're an in-house innovation team turning original ideas into real-world solutions —
          and we're open to connecting with partners and investors who believe in smarter, safer
          urban mobility.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-gradient px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <p className="mt-5 text-sm text-white/70">
          Interested in partnerships, funding conversations, or smart mobility collaboration?
          Reach out to Zeker Innovations.
        </p>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title={<>Let's <span className="text-accent-gradient">build it together</span></>}
          >
            <p>
              Reach out for partnerships, investor conversations, or smart mobility
              collaboration. We typically respond within a few business days.
            </p>
          </SectionHeader>

          <ul className="mt-8 space-y-4">
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                <MapPin className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Address</p>
                <p className="mt-1 text-sm font-medium">
                  Balen van Andelplein 109, 2273 LH Voorburg, Netherlands
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Email</p>
                <a
                  href="mailto:zeker.innovations@gmail.com"
                  className="mt-1 block truncate text-sm font-medium hover:text-[color:var(--electric)]"
                >
                  zeker.innovations@gmail.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                <Phone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Phone</p>
                <p className="mt-1 text-sm font-medium">Available soon</p>
              </div>
            </li>
            <li className="flex items-start gap-4 rounded-2xl border border-border bg-card p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-gradient text-white">
                <Smartphone className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">App</p>
                <p className="mt-1 text-sm font-medium">
                  Available soon on Google Play and the App Store.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-accent-gradient opacity-10 blur-2xl" />
          <form
            onSubmit={onSubmit}
            className="relative space-y-4 rounded-3xl border border-border bg-card p-6 shadow-elevated sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Company" name="company" />
            <div>
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-[color:var(--electric)] focus:ring-4 focus:ring-[color:var(--electric)]/15"
                placeholder="Tell us about your interest in Orbit Fiets..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.01] sm:w-auto"
            >
              Send Message <ArrowRight className="h-4 w-4" />
            </button>
            {submitted && (
              <div className="flex items-start gap-3 rounded-xl border border-[color:var(--teal)]/30 bg-[color:var(--teal)]/10 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[color:var(--teal)]" />
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

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-all focus:border-[color:var(--electric)] focus:ring-4 focus:ring-[color:var(--electric)]/15"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--navy-deep)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent-gradient text-white">
              <Sparkles className="h-4 w-4" />
            </span>
            <span className="font-display text-lg font-semibold">Zeker Innovations</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Introducing Orbit Fiets — Smart Tracking. Zero Theft.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Visit</h4>
          <p className="mt-3 text-sm text-white/80">
            Balen van Andelplein 109<br />
            2273 LH Voorburg, Netherlands
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">Reach Us</h4>
          <ul className="mt-3 space-y-2 text-sm text-white/80">
            <li>
              <a href="mailto:zeker.innovations@gmail.com" className="hover:text-white">
                zeker.innovations@gmail.com
              </a>
            </li>
            <li>Phone: Available soon</li>
            <li>Available soon on Google Play and the App Store.</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/60 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Zeker Innovations. All rights reserved.</p>
          <p>Voorburg, Netherlands</p>
        </div>
      </div>
    </footer>
  );
}
