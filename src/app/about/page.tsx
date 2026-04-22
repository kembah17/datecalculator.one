import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools-data";

export const metadata: Metadata = {
  title: "About - Age Calculator & Date Tools | datecalculator.one",
  description: "Learn about datecalculator.one, a free suite of online age and date calculation tools. All tools run 100% in your browser for complete privacy.",
  alternates: { canonical: "https://datecalculator.one/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-6">About datecalculator.one</h1>

      <div className="card mb-8">
        <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
          <p>
            datecalculator.one is a free, privacy-first suite of online date and time calculation tools.
            We built this site to provide fast, accurate, and easy-to-use tools for anyone who needs to
            work with dates, ages, time zones, and countdowns.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">Our Mission</h2>
          <p>
            Our mission is simple: provide the best free date calculation tools on the web, with zero
            compromises on privacy. Every tool on datecalculator.one runs entirely in your web browser.
            Your dates, birth information, and personal data are never sent to any server, never stored
            in any database, and never shared with any third party.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">How It Works</h2>
          <p>
            All calculations are performed using JavaScript directly in your browser. We use the
            industry-standard date-fns library for reliable date mathematics, ensuring accuracy across
            leap years, varying month lengths, and time zone conversions. The site loads once, and
            everything after that happens locally on your device.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">Our Tools</h2>
          <p>We currently offer {tools.length} free tools:</p>
          <ul className="list-disc pl-6 space-y-1">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <Link href={`/${tool.slug}`} className="text-primary dark:text-primary-light hover:underline">
                  {tool.name}
                </Link>
                {" "}&mdash; {tool.shortDesc}
              </li>
            ))}
          </ul>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">Technology</h2>
          <p>
            datecalculator.one is built with modern web technologies including Next.js, TypeScript, and
            Tailwind CSS. The site is statically generated for maximum performance and deployed on a
            global CDN, ensuring fast load times regardless of your location. We support both light and
            dark modes for comfortable viewing in any environment.
          </p>
          <h2 className="text-xl font-bold text-text dark:text-text-dark">Contact</h2>
          <p>
            Have feedback, suggestions, or found a bug? We would love to hear from you.
            Reach out to us at{" "}
            <a href="mailto:hello@datecalculator.one" className="text-primary dark:text-primary-light hover:underline">
              hello@datecalculator.one
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
