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
          <Link href="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="var(--color-brand)"/>
              <rect x="8" y="10" width="20" height="18" rx="3" stroke="white" strokeWidth="2" fill="none"/>
              <line x1="8" y1="16" x2="28" y2="16" stroke="white" strokeWidth="2"/>
              <line x1="14" y1="10" x2="14" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <line x1="22" y1="10" x2="22" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="14" cy="22" r="1.5" fill="white"/>
              <circle cx="18" cy="22" r="1.5" fill="white"/>
              <circle cx="22" cy="22" r="1.5" fill="white"/>
            </svg>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text-heading)' }}>datecalculator<span style={{ color: 'var(--color-brand)' }}>.one</span></span>
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
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.25rem",
                borderRadius: "9999px",
                border: "2px solid var(--color-border, #CBD5E1)",
                backgroundColor: isDark ? "var(--color-primary, #10B981)" : "var(--color-border, #CBD5E1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: "4rem",
                height: "2rem",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <span style={{ position: "absolute", left: "0.375rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", opacity: isDark ? 0.4 : 1, transition: "opacity 0.3s ease", lineHeight: 1 }}>☀️</span>
              <span style={{ position: "absolute", right: "0.375rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", opacity: isDark ? 1 : 0.4, transition: "opacity 0.3s ease", lineHeight: 1 }}>🌙</span>
              <span style={{ position: "absolute", top: "2px", left: isDark ? "calc(100% - 1.625rem)" : "2px", width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.3)", transition: "left 0.3s ease" }} />
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
