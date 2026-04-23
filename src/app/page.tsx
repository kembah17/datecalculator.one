import Link from "next/link";
import { tools, siteConfig } from "@/lib/tools-data";
import AdSlot from "@/components/ui/AdSlot";
import { WebSiteSchema } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <WebSiteSchema />
      <section className="bg-gradient-to-br from-primary/20 via-surface dark:via-surface-dark to-primary/10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text dark:text-text-dark mb-6">
            Free <span className="text-primary dark:text-primary-light">Date Calculator</span> &amp; Date Tools
          </h1>
          <p className="text-lg sm:text-xl text-muted dark:text-text-dark-muted max-w-3xl mx-auto mb-8">
            Calculate your exact age, find days between dates, convert time zones, and more.
            All tools run 100% in your browser &mdash; your data never leaves your device.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/age-calculator" className="btn-primary text-lg px-8 py-3">
              Calculate Your Age
            </Link>
            <Link href="/days-between-dates" className="btn-secondary text-lg px-8 py-3">
              Days Between Dates
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdSlot label="Advertisement" />

        <section className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-text dark:text-text-dark text-center mb-8">
            Free Date &amp; Time Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="card hover:border-primary dark:hover:border-primary-light transition-all duration-200 group hover:shadow-lg"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-bold text-text dark:text-text-dark group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-muted dark:text-text-dark-muted mt-2">{tool.shortDesc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <AdSlot label="Advertisement" />
        </section>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-text dark:text-text-dark text-center mb-8">
            Why Use {siteConfig.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-text dark:text-text-dark mb-2">100% Private</h3>
              <p className="text-sm text-muted dark:text-text-dark-muted">All calculations happen in your browser. We never collect, store, or transmit your personal data.</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-text dark:text-text-dark mb-2">Instant Results</h3>
              <p className="text-sm text-muted dark:text-text-dark-muted">Get real-time calculations as you type. No waiting, no page reloads, no server requests.</p>
            </div>
            <div className="card text-center">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-bold text-text dark:text-text-dark mb-2">Works Everywhere</h3>
              <p className="text-sm text-muted dark:text-text-dark-muted">Responsive design works on desktop, tablet, and mobile. No app download required.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="card">
            <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">About Date Calculator &amp; Date Tools</h2>
            <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
              <p>
                Welcome to datecalculator.one, your comprehensive suite of free online date and time calculation tools.
                Whether you need to calculate your exact age down to the second, find the number of days between two dates,
                or convert times across different time zones, our tools make it simple and instant.
              </p>
              <p>
                Our date calculator provides detailed breakdowns including your zodiac sign, Chinese zodiac animal,
                the day of the week you were born, and a live countdown to your next birthday. The days between dates
                calculator shows both calendar days and business days, perfect for project planning and deadline tracking.
              </p>
              <p>
                Every tool on datecalculator.one runs entirely in your web browser using JavaScript. This means your
                dates, ages, and personal information are never sent to any server. We believe in privacy-first
                computing, and our client-side architecture ensures your data stays on your device at all times.
              </p>
              <p>
                From the date difference calculator that breaks down time spans into years, months, and days, to the
                countdown timer that tracks seconds until your next big event, each tool is designed to be intuitive,
                accurate, and fast. The weekday finder even includes historical events for any date you look up,
                and our time zone converter helps you schedule meetings across the globe.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <AdSlot label="Advertisement" />
        </section>
      </div>
    </>
  );
}
