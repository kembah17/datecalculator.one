import type { Metadata } from "next";
import WeekdayFinder from "@/components/tools/WeekdayFinder";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";
import { WebAppSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Weekday Finder - What Day of the Week Was Any Date?",
  description: "Find what day of the week any date falls on. Enter a date to discover the weekday, historical events, and batch-check multiple dates at once. Free and instant.",
  alternates: { canonical: "https://datecalculator.one/weekday-finder" },
  openGraph: {
    title: "Weekday Finder - What Day of the Week Was Any Date?",
    description: "Find what day of the week any date falls on. Discover historical events and batch-check multiple dates.",
    url: "https://datecalculator.one/weekday-finder",
  },
};

const faqItems = [
  {
    question: "How does the weekday finder determine the day of the week?",
    answer: "The tool uses JavaScript's built-in Date object and the date-fns library to calculate the exact day of the week for any given date. These calculations account for the Gregorian calendar system, including leap years and calendar reforms, to provide accurate results for dates spanning centuries.",
  },
  {
    question: "How far back in history can I check dates?",
    answer: "The weekday finder works with any date supported by your browser's date system, typically from January 1, year 0001 to December 31, year 9999. However, historical accuracy is best for dates after the Gregorian calendar adoption in 1582, as earlier dates used different calendar systems.",
  },
  {
    question: "What is batch mode and how do I use it?",
    answer: "Batch mode lets you find the day of the week for multiple dates at once. Switch to the Batch Mode tab, enter each date on a separate line in the text area (using YYYY-MM-DD format), and click Calculate All. The tool processes all dates simultaneously and displays the weekday for each one.",
  },
  {
    question: "Are the historical events shown accurate?",
    answer: "The historical events displayed are curated facts associated with notable dates throughout history. While we strive for accuracy, the events shown are a representative sample and not an exhaustive list. They are meant to add interesting context to your date lookup.",
  },
];

export default function WeekdayFinderPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebAppSchema name="Weekday Finder" description="Find what day of the week any date falls on with historical events and batch mode." url="/weekday-finder" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-3">Weekday Finder</h1>
          <p className="text-muted dark:text-text-dark-muted max-w-2xl mx-auto">Enter any date to find what day of the week it falls on. Includes historical events and batch mode for multiple dates.</p>
        </div>

        <AdSlot label="Advertisement" />
        <div className="mt-8"><WeekdayFinder /></div>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>

        <article className="mt-12 card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">How to Use the Weekday Finder</h2>
          <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
            <p>The Weekday Finder is a simple yet powerful tool that tells you what day of the week any date falls on. Whether you want to know what day you were born, what day a historical event occurred, or what day a future date will be, this tool provides instant answers along with interesting historical context.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Single Date Lookup</h3>
            <p>The default mode lets you look up one date at a time. Simply select or type a date in the input field, and the tool instantly displays the day of the week. The result is shown prominently with the full date formatted for easy reading. Below the weekday result, you may see notable historical events that occurred on that same date throughout history, adding an educational dimension to your lookup.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Batch Mode for Multiple Dates</h3>
            <p>When you need to find the weekday for several dates at once, switch to Batch Mode using the tab at the top. In batch mode, you can enter multiple dates in a text area, one per line, using the YYYY-MM-DD format (for example, 2000-01-01). Click the Calculate All button, and the tool processes every date simultaneously, displaying a table with each date and its corresponding day of the week. This is perfect for genealogy research, historical analysis, or planning purposes.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Historical Events Feature</h3>
            <p>For many dates, the tool displays notable events that happened on that day in history. These events span various categories including science, politics, culture, and technology. This feature makes the Weekday Finder not just a calculation tool but also an educational resource. You might discover that your birthday shares a date with a significant historical milestone.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Practical Applications</h3>
            <p>People use the Weekday Finder for a variety of purposes. Parents look up the day their children were born. Event planners check what day of the week future dates fall on to schedule events optimally. Historians verify the day of the week for significant dates. Students use it for research projects. The batch mode is particularly useful for analyzing patterns, such as checking which day of the week holidays fall on across multiple years. All calculations are performed in your browser, ensuring your data remains private.</p>
          </div>
        </article>

        <div className="mt-8"><AdSlot label="Advertisement" /></div>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Related Tools</h2>
          <RelatedTools currentSlug="weekday-finder" />
        </section>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>
      </div>
    </>
  );
}
