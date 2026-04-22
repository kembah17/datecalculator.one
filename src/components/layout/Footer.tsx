import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools-data";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-surface-dark border-t border-border dark:border-border-dark mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🎂</span>
              <span className="text-lg font-bold text-primary">datecalculator<span className="text-text dark:text-text-dark">.one</span></span>
            </Link>
            <p className="text-sm text-muted dark:text-text-dark-muted leading-relaxed">
              Free online date calculator and date tools. All calculations happen in your browser — your data never leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-text dark:text-text-dark mb-4">Tools</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-sm text-muted dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-text dark:text-text-dark mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border dark:border-border-dark mt-8 pt-8 text-center">
          <p className="text-sm text-muted dark:text-text-dark-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved. 100% client-side processing.
          </p>
        </div>
      </div>
    </footer>
  );
}
