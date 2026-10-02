export function Mark() {
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
