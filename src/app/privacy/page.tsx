import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - datecalculator.one",
  description: "Privacy policy for datecalculator.one. Learn how we protect your data. All tools run 100% in your browser — we never collect or store your personal information.",
  alternates: { canonical: "https://datecalculator.one/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-6">Privacy Policy</h1>

      <div className="card">
        <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
          <p><strong className="text-text dark:text-text-dark">Last updated:</strong> April 2026</p>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Overview</h2>
          <p>
            datecalculator.one is committed to protecting your privacy. This privacy policy explains
            how we handle information when you use our website and tools.
          </p>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Client-Side Processing</h2>
          <p>
            All date calculations, age computations, time zone conversions, and other tool operations
            are performed entirely in your web browser using JavaScript. Your input data, including
            birth dates, event dates, and any other information you enter into our tools, is never
            transmitted to our servers or any third-party servers. Your data stays on your device at
            all times.
          </p>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Information We Do Not Collect</h2>
          <p>We do not collect, store, or process:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Birth dates or ages you enter into our calculators</li>
            <li>Dates, times, or time zones you convert</li>
            <li>Event names or countdown targets</li>
            <li>Any personal information entered into our tools</li>
            <li>User accounts or login credentials (we have no account system)</li>
          </ul>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Information We May Collect</h2>
          <p>Like most websites, we may collect limited, non-personal information through:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong className="text-text dark:text-text-dark">Analytics:</strong> We may use privacy-respecting analytics to understand general usage patterns such as page views, popular tools, and geographic regions. This data is aggregated and cannot identify individual users.</li>
            <li><strong className="text-text dark:text-text-dark">Cookies:</strong> We use minimal cookies for essential functionality such as remembering your dark/light mode preference. We do not use tracking cookies.</li>
            <li><strong className="text-text dark:text-text-dark">Advertising:</strong> Our site may display advertisements from third-party ad networks. These networks may use their own cookies and tracking technologies. Please refer to their respective privacy policies for details.</li>
          </ul>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Third-Party Services</h2>
          <p>
            Our website may include advertisements served by third-party advertising networks.
            These services may collect information about your visits to this and other websites
            to provide relevant advertisements. We do not control the data collection practices
            of these third-party services.
          </p>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Data Security</h2>
          <p>
            Since we do not collect or store your personal data from tool usage, there is no
            personal data at risk. Our website is served over HTTPS to ensure secure communication
            between your browser and our servers.
          </p>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Children&apos;s Privacy</h2>
          <p>
            Our tools are general-purpose utilities suitable for all ages. We do not knowingly
            collect personal information from children under 13. Since our tools process data
            entirely in the browser, no personal data is collected from any user regardless of age.
          </p>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on
            this page with an updated revision date. We encourage you to review this policy
            periodically.
          </p>

          <h2 className="text-xl font-bold text-text dark:text-text-dark">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please contact us at{" "}
            <a href="mailto:hello@datecalculator.one" className="text-primary dark:text-primary-light hover:underline">
              hello@datecalculator.one
            </a>.
          </p>
        </div>
      </div>
    </div>
  );
}
