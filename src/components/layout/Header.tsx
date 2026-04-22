"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { tools } from "@/lib/tools-data";

export default function Header() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = stored === "dark" || (!stored && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleDark = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header className="bg-surface dark:bg-surface-dark border-b border-border dark:border-border-dark sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎂</span>
            <span className="text-xl font-bold text-primary">datecalculator<span className="text-text dark:text-text-dark">.one</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {tools.slice(0, 4).map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="px-3 py-2 text-sm font-medium text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light rounded-lg hover:bg-surface-alt dark:hover:bg-surface-dark-alt transition-colors"
              >
                {tool.name.replace(" Calculator", "").replace(" Finder", "").replace(" Converter", "")}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light rounded-lg hover:bg-surface-alt dark:hover:bg-surface-dark-alt transition-colors">
                More ▾
              </button>
              <div className="absolute right-0 top-full mt-1 w-56 bg-surface dark:bg-surface-dark-alt border border-border dark:border-border-dark rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {tools.slice(4).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className="block px-4 py-2 text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light hover:bg-surface-alt dark:hover:bg-surface-dark-alt transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              className="relative w-14 h-7 rounded-full bg-surface-alt dark:bg-surface-dark-alt border border-border dark:border-border-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              aria-label="Toggle dark mode"
            >
              <span
                className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs transition-transform duration-300 ${
                  isDark ? "translate-x-7" : "translate-x-0"
                }`}
              >
                {isDark ? "🌙" : "☀️"}
              </span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-text dark:text-text-dark cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border dark:border-border-dark mt-2 pt-2">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light rounded-lg hover:bg-surface-alt dark:hover:bg-surface-dark-alt transition-colors"
              >
                <span className="mr-2">{tool.icon}</span>
                {tool.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
