import type { Metadata } from "next";
import DaysBetweenDates from "@/components/tools/DaysBetweenDates";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";
import { WebAppSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Days Between Dates Calculator - Count Days, Weeks & Business Days",
  description: "Free online calculator to find the exact number of days between two dates. Shows calendar days, business days, weeks, months, and years. Includes weekend day count.",
  alternates: { canonical: "https://datecalculator.one/days-between-dates" },
  openGraph: {
    title: "Days Between Dates Calculator - Count Days, Weeks & Business Days",
    description: "Free online calculator to find the exact number of days between two dates. Shows calendar days, business days, weeks, months, and years.",
    url: "https://datecalculator.one/days-between-dates",
  },
};

const faqItems = [
  {
    question: "How do I calculate the number of days between two dates?",
    answer: "Simply enter your start date and end date in the calculator above. The tool instantly calculates the exact number of calendar days, business days, weeks, months, and years between the two dates. You can also toggle the 'Include end date' option to add one extra day to the count.",
  },
  {
    question: "What are business days vs calendar days?",
    answer: "Calendar days include every day between two dates, including weekends and holidays. Business days (also called working days) only count Monday through Friday, excluding Saturday and Sunday. Our calculator shows both counts so you can plan accordingly.",
  },
  {
    question: "Does the calculator account for leap years?",
    answer: "Yes, the calculator correctly handles leap years. February 29th is properly counted in leap years, ensuring accurate day counts across any date range, whether spanning months, years, or decades.",
  },
  {
    question: "Can I calculate days between dates in different years?",
    answer: "Absolutely. The calculator works with any two dates regardless of how far apart they are. You can calculate the days between dates spanning different years, decades, or even centuries.",
  },
];

export default function DaysBetweenDatesPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebAppSchema name="Days Between Dates Calculator" description="Calculate the exact number of days, weeks, months, and years between any two dates." url="/days-between-dates" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-3">Days Between Dates Calculator</h1>
          <p className="text-muted dark:text-text-dark-muted max-w-2xl mx-auto">Calculate the exact number of days, business days, weeks, months, and years between any two dates.</p>
        </div>

        <AdSlot label="Advertisement" />
        <div className="mt-8"><DaysBetweenDates /></div>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>

        <article className="mt-12 card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">How to Use the Days Between Dates Calculator</h2>
          <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
            <p>Our days between dates calculator is a powerful tool for anyone who needs to know the exact time span between two dates. Whether you are planning a project timeline, counting down to a vacation, calculating the duration of a contract, or tracking how long ago an event occurred, this tool provides instant and accurate results.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Getting Started</h3>
            <p>To use the calculator, simply select or type your start date and end date in the two input fields. The calculator processes your dates immediately and displays the results in real time. If you enter the end date before the start date, the calculator automatically swaps them and shows a notification so you know the dates were reversed.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Understanding the Results</h3>
            <p>The primary result shows the total number of calendar days between your two dates in a large, prominent display. Below that, you will find the equivalent in years, months, weeks, and days for easy reference. The business days breakdown separates your date range into working days (Monday through Friday) and weekend days (Saturday and Sunday), which is invaluable for project planning and deadline calculations.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Include End Date Option</h3>
            <p>By default, the calculator counts the days between the start and end dates, not including the end date itself. For example, January 1 to January 3 would show 2 days. If you check the "Include end date" option, it adds one day to the count, making it 3 days. This is useful when you need to count both the first and last day, such as when calculating the total days of a hotel stay or event duration.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Practical Applications</h3>
            <p>This calculator is commonly used for project management to determine sprint durations and milestone timelines, for HR departments calculating employee tenure or leave periods, for legal professionals determining statute of limitations or contract durations, for students counting days until exams or graduation, and for personal use like tracking pregnancy weeks or planning events. The copy button lets you save your results to the clipboard for easy sharing.</p>
          </div>
        </article>

        <div className="mt-8"><AdSlot label="Advertisement" /></div>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Related Tools</h2>
          <RelatedTools currentSlug="days-between-dates" />
        </section>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>
      </div>
    </>
  );
}
