import Link from "next/link";
import { siteConfig } from "@/lib/tools-data";
import AdSlot from "@/components/ui/AdSlot";
import { WebSiteSchema } from "@/components/seo/JsonLd";
import HomeToolGrid from "@/components/ui/HomeToolGrid";

export default function Home() {
  return (
    <>
      <WebSiteSchema />
      <section style={{ background: 'linear-gradient(135deg, color-mix(in srgb, var(--color-brand) 20%, var(--color-page-bg)), var(--color-page-bg), color-mix(in srgb, var(--color-brand) 10%, var(--color-page-bg)))' }} className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: 'var(--color-text-heading)' }}>
            Free <span style={{ color: 'var(--color-brand)' }}>Date Calculator</span> &amp; Date Tools
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8" style={{ color: 'var(--color-text-secondary)' }}>
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
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8" style={{ color: 'var(--color-text-heading)' }}>
            Free Date &amp; Time Tools
          </h2>
          <HomeToolGrid />
        </section>

        <section className="mt-16">
          <AdSlot label="Advertisement" />
        </section>

        <section className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8" style={{ color: 'var(--color-text-heading)' }}>
            Why Use {siteConfig.name}?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: 'var(--color-bg-card)', border: '2px solid var(--color-border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🔒</div>
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-text-heading)' }}>100% Private</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>All calculations happen in your browser. We never collect, store, or transmit your personal data.</p>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-card)', border: '2px solid var(--color-border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>⚡</div>
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-text-heading)' }}>Instant Results</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Get real-time calculations as you type. No waiting, no page reloads, no server requests.</p>
            </div>
            <div style={{ backgroundColor: 'var(--color-bg-card)', border: '2px solid var(--color-border)', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🌍</div>
              <h3 className="font-bold mb-2" style={{ color: 'var(--color-text-heading)' }}>Works Everywhere</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Responsive design works on desktop, tablet, and mobile. No app download required.</p>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div style={{ backgroundColor: 'var(--color-bg-card)', border: '2px solid var(--color-border)', borderRadius: '0.75rem', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>About Date Calculator &amp; Date Tools</h2>
            <div className="prose prose-sm max-w-none space-y-4" style={{ color: 'var(--color-text-secondary)' }}>
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
