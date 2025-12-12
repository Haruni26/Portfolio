"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Header() {
  const headerNameRef = useRef<HTMLHeadingElement>(null);
  const text = "Aaron Seymour";

  useEffect(() => {
    const hero = document.getElementById("hero-name");
    const headerName = headerNameRef.current;

    if (!hero || !headerName) return;

    // Start hidden
    headerName.style.opacity = "0";
    headerName.textContent = "";

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.isIntersecting) {
          headerName.style.opacity = "0";
          headerName.textContent = "";
          return;
        }

        if (!entry.isIntersecting) {
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
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-2 left-4 w-full z-50 backdrop-blur bg-white/10 border-b border-white/10 rounded-3xl max-w-340">
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
