import type { Metadata } from "next";
import AddSubtractDays from "@/components/tools/AddSubtractDays";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";
import { WebAppSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Add or Subtract Days from a Date - Date Calculator",
  description: "Free date calculator to add or subtract days, weeks, months, or years from any date. Chain multiple operations and see the resulting date with day of week.",
  alternates: { canonical: "https://datecalculator.one/add-subtract-days" },
  openGraph: {
    title: "Add or Subtract Days from a Date - Date Calculator",
    description: "Free date calculator to add or subtract days, weeks, months, or years from any date.",
    url: "https://datecalculator.one/add-subtract-days",
  },
};

const faqItems = [
  {
    question: "How do I add days to a date?",
    answer: "Select your starting date, choose 'Add' mode, enter the number of days you want to add, and select 'Days' as the unit. The calculator instantly shows the resulting date. You can also add weeks, months, or years.",
  },
  {
    question: "Can I chain multiple date operations?",
    answer: "Yes! Use the 'Add Operation' button to chain multiple calculations. For example, you can add 3 months, then subtract 5 days, then add 2 weeks. Each operation builds on the result of the previous one, and you can see the running result after each step.",
  },
  {
    question: "How does adding months work when the day doesn't exist?",
    answer: "When adding months results in a day that doesn't exist (like adding 1 month to January 31), the calculator adjusts to the last valid day of the target month (February 28 or 29). This follows standard date arithmetic conventions.",
  },
  {
    question: "What is the maximum number I can add or subtract?",
    answer: "You can add or subtract up to 9999 of any unit (days, weeks, months, or years). This allows calculations spanning decades or even centuries into the past or future.",
  },
];

export default function AddSubtractDaysPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebAppSchema name="Add/Subtract Days Calculator" description="Add or subtract days, weeks, months, or years from any date with chained operations." url="/add-subtract-days" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-3">Add or Subtract Days from a Date</h1>
          <p className="text-muted dark:text-text-dark-muted max-w-2xl mx-auto">Add or subtract days, weeks, months, or years from any date. Chain multiple operations together.</p>
        </div>

        <AdSlot label="Advertisement" />
        <div className="mt-8"><AddSubtractDays /></div>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>

        <article className="mt-12 card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">How to Use the Add/Subtract Days Calculator</h2>
          <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
            <p>The Add/Subtract Days calculator is a versatile date arithmetic tool that lets you move forward or backward in time from any starting date. Whether you need to find a deadline 90 days from now, determine what date was 6 months ago, or calculate a series of milestone dates, this tool handles it all with ease.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Basic Usage</h3>
            <p>Start by selecting your base date using the date picker. By default, it is set to today. Then choose whether you want to add or subtract time by clicking the appropriate toggle. Enter the number of units you want to add or subtract, and select the unit type: days, weeks, months, or years. The result appears instantly, showing the calculated date along with the day of the week.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Chaining Operations</h3>
            <p>One of the most powerful features of this calculator is the ability to chain multiple operations. Click the Add Operation button to add another calculation step. Each new operation starts from the result of the previous one. For example, you might start with today, add 3 months for a project phase, then add 2 weeks for a buffer period, then subtract 5 days for early delivery. The calculator shows the running result after each step.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Common Scenarios</h3>
            <p>This calculator is ideal for determining payment due dates by adding 30, 60, or 90 days to an invoice date. Project managers use it to calculate sprint end dates and release schedules. Legal professionals find it useful for computing filing deadlines and statute of limitations dates. Medical professionals can calculate follow-up appointment dates, and event planners use it to work backward from an event date to set preparation milestones.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Tips and Notes</h3>
            <p>When adding months, the calculator handles edge cases intelligently. Adding one month to January 31 gives February 28 (or 29 in a leap year), since February 31 does not exist. The calculator correctly handles leap years throughout all calculations. You can remove individual operations from a chain using the remove button, and the Clear All button resets everything to start fresh. Use the Copy Results button to save your calculation to the clipboard.</p>
          </div>
        </article>

        <div className="mt-8"><AdSlot label="Advertisement" /></div>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Related Tools</h2>
          <RelatedTools currentSlug="add-subtract-days" />
        </section>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>
      </div>
    </>
  );
}
