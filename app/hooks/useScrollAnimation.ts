'use client';

import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Enhanced observer options for smoother triggering
    const observerOptions = {
      threshold: [0, 0.1, 0.2, 0.3, 0.5],
      rootMargin: '0px 0px -80px 0px',
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Use requestAnimationFrame for smoother state updates
            requestAnimationFrame(() => {
              setVisibleSections((prev) => {
                const newSet = new Set(prev);
                newSet.add(entry.target.id);
                return newSet;
              });
            });
          }
        });
      },
      observerOptions
    );

    // Observe all sections with a slight delay for better performance
    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        observer.observe(section);
      });
    };

    // Delay observation slightly to ensure DOM is ready
    const timeoutId = setTimeout(observeSections, 100);

    return () => {
      clearTimeout(timeoutId);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return visibleSections;
}
