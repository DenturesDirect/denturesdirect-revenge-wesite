"use client";
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Once revealed, stop watching it
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -30px 0px' }
    );

    const observe = () => {
      document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => observer.observe(el));
    };

    // Observe immediately
    observe();

    // Re-observe after next paint (catches page content rendered after layout)
    requestAnimationFrame(() => requestAnimationFrame(observe));

    // Watch for any new .reveal elements added to the DOM (Next.js route changes, etc.)
    const mutationObserver = new MutationObserver(observe);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Absolute safety net: reveal everything after 1.5s regardless
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.revealed)').forEach((el) => {
        el.classList.add('revealed');
      });
    }, 1500);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return null;
}
