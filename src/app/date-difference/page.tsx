import type { Metadata } from "next";
import DateDifference from "@/components/tools/DateDifference";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";
import { WebAppSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Date Difference Calculator - Years, Months & Days Between Dates",
  description: "Free date difference calculator showing the exact breakdown in years, months, and days between two dates. Also displays total months, weeks, days, and hours.",
  alternates: { canonical: "https://datecalculator.one/date-difference" },
  openGraph: {
    title: "Date Difference Calculator - Years, Months & Days Between Dates",
    description: "Free date difference calculator showing the exact breakdown in years, months, and days between two dates.",
    url: "https://datecalculator.one/date-difference",
  },
};

const faqItems = [
  {
    question: "What is the difference between this and the Days Between Dates calculator?",
    answer: "The Days Between Dates calculator focuses on total day counts and business days. This Date Difference calculator provides a detailed breakdown showing exactly how many years, months, and days separate two dates, plus total equivalents in months, weeks, days, and hours.",
  },
  {
    question: "How does the calculator handle months with different lengths?",
    answer: "The calculator uses calendar-accurate month calculations. It properly accounts for months having 28, 29, 30, or 31 days. For example, the difference from January 31 to February 28 is calculated as exactly 0 years, 0 months, and 28 days.",
  },
  {
    question: "Can I use this to calculate age?",
    answer: "Yes, you can use this calculator to determine age by entering a birth date as the start date and today's date as the end date. However, our dedicated Date Calculator provides additional features like zodiac signs, live ticking seconds, and birthday countdowns.",
  },
  {
    question: "What is the maximum date range supported?",
    answer: "The calculator supports any valid date range that your browser can handle, typically spanning from year 0001 to year 9999. This means you can calculate differences spanning thousands of years if needed.",
  },
];

export default function DateDifferencePage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebAppSchema name="Date Difference Calculator" description="Calculate the detailed difference between two dates in years, months, days, and more." url="/date-difference" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-3">Date Difference Calculator</h1>
          <p className="text-muted dark:text-text-dark-muted max-w-2xl mx-auto">Get a detailed breakdown of the time between two dates in years, months, days, weeks, and hours.</p>
        </div>

        <AdSlot label="Advertisement" />
        <div className="mt-8"><DateDifference /></div>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>

        <article className="mt-12 card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">How to Use the Date Difference Calculator</h2>
          <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
            <p>The date difference calculator provides a comprehensive breakdown of the time span between any two dates. Unlike a simple day counter, this tool shows you the exact difference expressed in years, months, and days, giving you a human-readable understanding of the time elapsed or remaining between two points in time.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">How to Calculate</h3>
            <p>Enter your start date and end date using the date picker fields. The calculator instantly computes the difference and displays it in two sections. The main display shows the breakdown in years, months, and remaining days. For example, a span from March 15, 2020 to July 22, 2025 would show as 5 years, 4 months, and 7 days.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Total Equivalents</h3>
            <p>Below the main breakdown, the Total Equivalents section converts the entire date range into single units. You can see the total number of months, total weeks, total days, and total hours between your two dates. This is particularly useful when you need a single number for calculations, such as determining how many total months of experience you have or how many weeks a project lasted.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Common Use Cases</h3>
            <p>People commonly use the date difference calculator for employment duration calculations when updating resumes, determining the length of relationships or milestones, calculating loan or lease terms, measuring project timelines for reports, and understanding historical time spans. The tool handles date swapping automatically, so it does not matter which date you enter first.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Tips for Best Results</h3>
            <p>For the most accurate results, use specific dates rather than approximations. The calculator accounts for all calendar irregularities including leap years and varying month lengths. Use the Copy Results button to save your calculations, and the Clear button to start fresh with new dates. All processing happens locally in your browser for complete privacy.</p>
          </div>
        </article>

        <div className="mt-8"><AdSlot label="Advertisement" /></div>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Related Tools</h2>
          <RelatedTools currentSlug="date-difference" />
        </section>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>
      </div>
    </>
  );
}
