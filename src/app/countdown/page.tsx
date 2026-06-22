import type { Metadata } from "next";
import Countdown from "@/components/tools/Countdown";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";
import { WebAppSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Countdown Timer to Any Date - Days, Hours, Minutes & Seconds",
  description: "Free live countdown timer to any future date. Count down to Christmas, New Year, Valentine's Day, or any custom event. Shows days, hours, minutes, and seconds in real time.",
  alternates: { canonical: "https://datecalculator.one/countdown" },
  openGraph: {
    title: "Countdown Timer to Any Date - Days, Hours, Minutes & Seconds",
    description: "Free live countdown timer to any future date. Count down to Christmas, New Year, or any custom event.",
    url: "https://datecalculator.one/countdown",
  },
};

const faqItems = [
  {
    question: "How does the countdown timer work?",
    answer: "Enter a future date and optionally a time, and the countdown begins immediately. It calculates the exact difference between now and your target date, updating every second to show the remaining days, hours, minutes, and seconds in real time.",
  },
  {
    question: "What happens when the countdown reaches zero?",
    answer: "When the countdown reaches zero, the timer stops and displays a celebration message indicating that the event has arrived. The display will show 0 days, 0 hours, 0 minutes, and 0 seconds.",
  },
  {
    question: "Can I count down to a specific time, not just a date?",
    answer: "Yes! The countdown tool includes an optional time field. You can set both a date and a specific time (hour and minute) for precise countdowns. If you leave the time blank, it defaults to midnight (00:00) of the selected date.",
  },
  {
    question: "Are the preset countdowns automatically updated each year?",
    answer: "Yes, the preset countdowns (Christmas, New Year, Valentine's Day, etc.) automatically calculate the next upcoming occurrence. If Christmas has already passed this year, the countdown will target next year's Christmas.",
  },
  {
    question: "Does the countdown work if I close my browser?",
    answer: "The countdown calculates the remaining time based on the current date and time each time you visit the page. So even if you close your browser and return later, the countdown will show the correct remaining time. However, it does not send notifications.",
  },
];

export default function CountdownPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebAppSchema name="Countdown Timer" description="Live countdown timer to any future date showing days, hours, minutes, and seconds." url="/countdown" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-3">Countdown to Any Date</h1>
          <p className="text-muted dark:text-text-dark-muted max-w-2xl mx-auto">Set a future date and watch the live countdown in days, hours, minutes, and seconds. Use presets for popular holidays.</p>
        </div>

        <AdSlot label="Advertisement" />
        <div className="mt-8"><Countdown /></div>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>

        <article className="mt-12 card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">How to Use the Countdown Timer</h2>
          <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
            <p>Our countdown timer is a real-time tool that shows you exactly how much time remains until any future date or event. Whether you are counting down to a holiday, a birthday, a wedding, a product launch, or any other important date, this tool provides a precise, live-updating display of the remaining time.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Getting Started</h3>
            <p>You can start a countdown in two ways. The quickest method is to use one of the preset buttons for popular events like Christmas, New Year, or Valentine's Day. These presets automatically set the target date to the next upcoming occurrence of that holiday. Alternatively, you can enter any custom date using the date picker, and optionally set a specific time for more precise countdowns.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Reading the Display</h3>
            <p>Once a target date is set, the countdown display shows four units: days, hours, minutes, and seconds. Each unit updates in real time, with the seconds counter ticking down every second. The display also shows the target date and event name (if you entered one) for easy reference. The large, bold numbers make it easy to read the countdown at a glance.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Custom Events</h3>
            <p>For custom countdowns, enter a descriptive event name in the text field. This helps you remember what you are counting down to, especially if you share the results. You can count down to birthdays, anniversaries, vacations, exams, retirement dates, project deadlines, or any other significant date in your future.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Practical Applications</h3>
            <p>Countdown timers are widely used for event planning to track preparation timelines, for personal motivation to visualize progress toward goals, for educational purposes to count down to exams or graduation, and for business use to track product launches or marketing campaigns. The copy button lets you share the current countdown status, and the clear button resets the timer for a new countdown. All processing happens in your browser for complete privacy.</p>
          </div>
        </article>

        <div className="mt-8"><AdSlot label="Advertisement" /></div>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Related Tools</h2>
          <RelatedTools currentSlug="countdown" />
        </section>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>
      </div>
    </>
  );
}
