"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const headerNameRef = useRef<HTMLHeadingElement>(null);
  const text = "Aaron Seymour";

  function attachObserver(
    hero: Element,
    headerName: HTMLElement
  ): IntersectionObserver {
    // Start hidden
    headerName.style.opacity = "0";
    headerName.textContent = "";

    let hasTyped = false;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          headerName.style.opacity = "0";
          headerName.textContent = "";
          hasTyped = false;
          return;
        }

        if (!entry.isIntersecting && !hasTyped) {
          hasTyped = true;
          headerName.style.opacity = "1";
          headerName.textContent = "";

          let i = 0;
          function type() {
            if (i < text.length) {
              headerName.textContent += text[i];
              i++;
              setTimeout(type, 70);
            }
          }
          type();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return observer;
  }

  useEffect(() => {
    const headerName = headerNameRef.current;
    if (!headerName) return;

    let observerInstance: IntersectionObserver | null = null;

    function tryAttach() {
      const hero = document.getElementById("hero-name");
      if (!hero) {
        requestAnimationFrame(tryAttach);
        return;
      }

      observerInstance = attachObserver(hero, headerName!);
    }

    tryAttach();

    return () => {
      observerInstance?.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 w-full max-w-7xl z-50 backdrop-blur bg-white/10 border border-white/10 rounded-3xl">
      <div className="flex items-center justify-between px-7 py-4">
        <h1
          ref={headerNameRef}
          className="text-xl transition-opacity duration-300"
        ></h1>

        <ul className="flex space-x-4">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </ul>
      </div>
    </header>
  );
}

