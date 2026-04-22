import type { Metadata } from "next";
import TimeZoneConverter from "@/components/tools/TimeZoneConverter";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";
import { WebAppSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Time Zone Converter - Convert Time Between Time Zones & Plan Meetings",
  description: "Free time zone converter with world clock and meeting planner. Convert times between 24+ time zones, view current time in major cities, and find overlapping business hours.",
  alternates: { canonical: "https://datecalculator.one/time-zone-converter" },
  openGraph: {
    title: "Time Zone Converter - Convert Time Between Time Zones & Plan Meetings",
    description: "Free time zone converter with world clock and meeting planner. Convert times between 24+ time zones.",
    url: "https://datecalculator.one/time-zone-converter",
  },
};

const faqItems = [
  {
    question: "How do I convert time between time zones?",
    answer: "Select the Convert Time tab, enter the time and date you want to convert, choose the source time zone (From) and the target time zone (To), and the converted time appears instantly. You can also click Swap Zones to quickly reverse the conversion direction.",
  },
  {
    question: "How does the meeting planner work?",
    answer: "The Meeting Planner tab shows a 24-hour grid with local times for each selected time zone. Green-highlighted rows indicate hours where all selected zones are within business hours (9 AM to 5 PM). Add or remove time zones to find the best meeting times for your team across the globe.",
  },
  {
    question: "Does the converter account for daylight saving time?",
    answer: "Yes. The converter uses your browser's built-in Intl.DateTimeFormat API, which automatically handles daylight saving time (DST) transitions for all supported time zones. The displayed times reflect the current DST status of each zone.",
  },
  {
    question: "How many time zones are supported?",
    answer: "The converter supports 24 major time zones covering all inhabited continents, including cities like New York, London, Tokyo, Sydney, Dubai, Mumbai, Singapore, and more. These cover the most commonly needed conversions for business and personal use.",
  },
  {
    question: "Is the world clock updated in real time?",
    answer: "Yes, the World Clock tab shows the current time in 12 major cities around the world, updating every second. The times are based on your device's system clock and the browser's time zone database for accuracy.",
  },
];

export default function TimeZoneConverterPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebAppSchema name="Time Zone Converter" description="Convert time between time zones, view world clock, and plan meetings across time zones." url="/time-zone-converter" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-3">Time Zone Converter</h1>
          <p className="text-muted dark:text-text-dark-muted max-w-2xl mx-auto">Convert time between 24+ time zones, view the world clock, and find overlapping business hours for meetings.</p>
        </div>

        <AdSlot label="Advertisement" />
        <div className="mt-8"><TimeZoneConverter /></div>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>

        <article className="mt-12 card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">How to Use the Time Zone Converter</h2>
          <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
            <p>The Time Zone Converter is a comprehensive tool for anyone who works across time zones, travels internationally, or needs to coordinate with people in different parts of the world. It combines three essential features: direct time conversion, a live world clock, and an intelligent meeting planner that finds overlapping business hours.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Converting Time Between Zones</h3>
            <p>The Convert Time tab is the primary feature. Enter the time you want to convert using the time picker, select the date, and choose your source time zone from the From dropdown. Then select the target time zone in the To dropdown. The converted time appears instantly in a highlighted display showing both the time and the date in the target zone. This is important because time zone conversions can cross date boundaries. Use the Swap Zones button to quickly reverse the conversion direction.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">World Clock</h3>
            <p>The World Clock tab displays the current time in 12 major cities spanning all major time zones around the globe. Each city card shows the current time with seconds updating in real time, plus the current date. This gives you an at-a-glance view of what time it is everywhere in the world. The cities include New York, Los Angeles, London, Paris, Moscow, Dubai, Mumbai, Singapore, Hong Kong, Tokyo, Sydney, and Auckland.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Meeting Planner</h3>
            <p>The Meeting Planner is the most powerful feature for remote teams. Select the time zones of all meeting participants by adding them from the dropdown. The planner displays a 24-hour grid showing the local time in each zone for every hour of the day. Rows highlighted in green indicate hours where all selected zones fall within standard business hours of 9 AM to 5 PM. This makes it easy to find suitable meeting times that work for everyone without anyone having to attend outside normal working hours.</p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Tips for Best Results</h3>
            <p>Remember that daylight saving time can affect conversions. The tool automatically accounts for DST based on the current date, but if you are planning for a future date, the DST status may differ. The meeting planner works best with two to five time zones. Adding more zones makes it increasingly difficult to find overlapping business hours, which is a real-world constraint of global collaboration. All processing happens in your browser using the standard Intl API, ensuring accuracy and privacy.</p>
          </div>
        </article>

        <div className="mt-8"><AdSlot label="Advertisement" /></div>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Related Tools</h2>
          <RelatedTools currentSlug="time-zone-converter" />
        </section>
        <div className="mt-8"><AdSlot label="Advertisement" /></div>
      </div>
    </>
  );
}
