import type { Metadata } from "next";
import AgeCalculator from "@/components/tools/AgeCalculator";
import AdSlot from "@/components/ui/AdSlot";
import FAQ from "@/components/ui/FAQ";
import RelatedTools from "@/components/ui/RelatedTools";
import FaqSchema from "@/components/seo/FaqSchema";
import { WebAppSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Age Calculator - Calculate Your Exact Age in Years, Months, Days & Seconds",
  description: "Free online age calculator. Enter your birthdate to find your exact age in years, months, days, hours, minutes, and seconds. Includes zodiac sign, Chinese zodiac, and next birthday countdown.",
  alternates: { canonical: "https://datecalculator.one/age-calculator" },
  openGraph: {
    title: "Age Calculator - Calculate Your Exact Age in Years, Months, Days & Seconds",
    description: "Free online age calculator. Enter your birthdate to find your exact age in years, months, days, hours, minutes, and seconds.",
    url: "https://datecalculator.one/age-calculator",
  },
};

const faqItems = [
  {
    question: "How does the age calculator work?",
    answer: "Our age calculator takes your birth date and compares it to the current date and time. It calculates the exact difference in years, months, days, hours, minutes, and seconds. The seconds counter updates in real-time, giving you a live view of your age.",
  },
  {
    question: "Is my birth date stored or shared?",
    answer: "No. All calculations happen entirely in your web browser using JavaScript. Your birth date is never sent to any server, stored in any database, or shared with any third party. Your privacy is completely protected.",
  },
  {
    question: "How accurate is the age calculation?",
    answer: "The calculator is accurate to the second. It accounts for leap years, varying month lengths, and uses your device's system clock for real-time precision. The calculation uses the industry-standard date-fns library for reliable date mathematics.",
  },
  {
    question: "What is the Chinese zodiac animal shown?",
    answer: "The Chinese zodiac follows a 12-year cycle, with each year represented by an animal: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, and Pig. Your Chinese zodiac animal is determined by your birth year.",
  },
  {
    question: "Can I calculate someone else's age?",
    answer: "Yes! Simply enter any birth date to calculate the age. This works for calculating the age of family members, friends, historical figures, or anyone else. The tool works for any date from the past.",
  },
];

export default function AgeCalculatorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <WebAppSchema name="Age Calculator" description="Calculate your exact age in years, months, days, hours, minutes, and seconds with live ticking." url="/age-calculator" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text dark:text-text-dark mb-3">
            Age Calculator
          </h1>
          <p className="text-muted dark:text-text-dark-muted max-w-2xl mx-auto">
            Enter your birth date to calculate your exact age in years, months, days, hours, minutes, and live ticking seconds.
          </p>
        </div>

        <AdSlot label="Advertisement" />

        <div className="mt-8">
          <AgeCalculator />
        </div>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        <article className="mt-12 card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">How to Use the Age Calculator</h2>
          <div className="prose prose-sm max-w-none text-muted dark:text-text-dark-muted space-y-4">
            <p>
              Our free online age calculator makes it easy to determine your exact age down to the second. Whether you need to know your precise age for official documents, are curious about how many days you have lived, or want to find out your zodiac sign, this tool provides comprehensive age-related information instantly.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Step-by-Step Instructions</h3>
            <p>
              Using the age calculator is straightforward. Simply click on the date input field and select your birth date from the calendar picker, or type it in directly. The calculator immediately processes your birth date and displays your exact age broken down into years, months, and days. Below the main age display, you will see a live-ticking counter showing hours, minutes, and seconds that updates every second.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Understanding Your Results</h3>
            <p>
              The results section provides two main panels. The Life Statistics panel shows your total days lived, total weeks lived, total hours, total minutes, and a live-updating total seconds counter. These numbers give you a fascinating perspective on the time you have experienced. The Birth Details panel reveals the day of the week you were born, your Western zodiac sign with its symbol, your Chinese zodiac animal, and a countdown showing how many days remain until your next birthday.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Zodiac Signs Explained</h3>
            <p>
              The Western zodiac is based on the position of the sun at the time of your birth and follows a 12-sign cycle through the calendar year. Each sign spans roughly one month. The Chinese zodiac, on the other hand, follows a 12-year cycle with each year represented by a different animal. Both systems have been used for centuries and remain popular worldwide for personality insights and cultural traditions.
            </p>
            <h3 className="text-lg font-semibold text-text dark:text-text-dark">Privacy and Accuracy</h3>
            <p>
              All calculations are performed entirely in your web browser. Your birth date is never transmitted to any server or stored anywhere. The calculator uses the date-fns library, a trusted open-source date utility, to ensure mathematical accuracy. It correctly handles leap years, varying month lengths, and time zone considerations. You can use the Copy Results button to save your age information to your clipboard, and the Clear button to reset the calculator for a new calculation.
            </p>
          </div>
        </article>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <section className="mt-12">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-6">Related Tools</h2>
          <RelatedTools currentSlug="age-calculator" />
        </section>

        <div className="mt-8">
          <AdSlot label="Advertisement" />
        </div>
      </div>
    </>
  );
}
