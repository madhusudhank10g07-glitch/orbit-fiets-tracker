import { useEffect, useRef } from "react";

/**
 * Reveal-on-scroll: attach to a section element to fade/translate-in
 * its `.reveal` descendants once they enter the viewport.
 */
export function useReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (typeof IntersectionObserver === "undefined") {
      root.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const items = Array.from(root.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return ref;
}
