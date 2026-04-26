import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools-data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }} className="mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" style={{ textDecoration: 'none' }}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="var(--color-brand)"/>
                <rect x="8" y="10" width="20" height="18" rx="3" stroke="white" strokeWidth="2" fill="none"/>
                <line x1="8" y1="16" x2="28" y2="16" stroke="white" strokeWidth="2"/>
                <line x1="14" y1="10" x2="14" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <line x1="22" y1="10" x2="22" y2="7" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="14" cy="22" r="1.5" fill="white"/>
                <circle cx="18" cy="22" r="1.5" fill="white"/>
                <circle cx="22" cy="22" r="1.5" fill="white"/>
              </svg>
              <span className="text-lg font-bold" style={{ color: 'var(--color-footer-link)' }}>datecalculator<span style={{ color: 'var(--color-footer-text)' }}>.one</span></span>
            </Link>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footer-muted)' }}>
              Free online date calculator and date tools. All calculations happen in your browser — your data never leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-footer-text)' }}>Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-sm transition-colors"
                    style={{ color: 'var(--color-footer-muted)' }}
                  >
                    {tool.icon} {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4" style={{ color: 'var(--color-footer-text)' }}>Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid var(--color-footer-border)' }}>
          <p className="text-sm" style={{ color: 'var(--color-footer-muted)' }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. 100% client-side processing.
          </p>
        </div>
      </div>
    </footer>
  );
}
