import type { ReactNode } from "react";

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-7 font-display text-base font-bold tracking-tight sm:text-lg">
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">{children}</p>;
}

export function UL({ children }: { children: ReactNode }) {
  return (
    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
      {children}
    </ul>
  );
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[color:var(--steel)]" />
      <span>{children}</span>
    </li>
  );
}
