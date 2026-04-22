"use client";

import { useState, useEffect, useCallback } from "react";
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, differenceInWeeks, format, addYears, isAfter, isBefore, getDay } from "date-fns";
import CopyButton from "@/components/ui/CopyButton";

const ZODIAC_SIGNS = [
  { sign: "Capricorn", symbol: "\u2651", start: [12, 22], end: [1, 19] },
  { sign: "Aquarius", symbol: "\u2652", start: [1, 20], end: [2, 18] },
  { sign: "Pisces", symbol: "\u2653", start: [2, 19], end: [3, 20] },
  { sign: "Aries", symbol: "\u2648", start: [3, 21], end: [4, 19] },
  { sign: "Taurus", symbol: "\u2649", start: [4, 20], end: [5, 20] },
  { sign: "Gemini", symbol: "\u264A", start: [5, 21], end: [6, 20] },
  { sign: "Cancer", symbol: "\u264B", start: [6, 21], end: [7, 22] },
  { sign: "Leo", symbol: "\u264C", start: [7, 23], end: [8, 22] },
  { sign: "Virgo", symbol: "\u264D", start: [8, 23], end: [9, 22] },
  { sign: "Libra", symbol: "\u264E", start: [9, 23], end: [10, 22] },
  { sign: "Scorpio", symbol: "\u264F", start: [10, 23], end: [11, 21] },
  { sign: "Sagittarius", symbol: "\u2650", start: [11, 22], end: [12, 21] },
];

const CHINESE_ZODIAC = [
  "Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox",
  "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat",
];

const CHINESE_ZODIAC_EMOJI: Record<string, string> = {
  Monkey: "\uD83D\uDC12", Rooster: "\uD83D\uDC13", Dog: "\uD83D\uDC15", Pig: "\uD83D\uDC16",
  Rat: "\uD83D\uDC00", Ox: "\uD83D\uDC02", Tiger: "\uD83D\uDC05", Rabbit: "\uD83D\uDC07",
  Dragon: "\uD83D\uDC09", Snake: "\uD83D\uDC0D", Horse: "\uD83D\uDC0E", Goat: "\uD83D\uDC10",
};

function getZodiacSign(month: number, day: number) {
  for (const z of ZODIAC_SIGNS) {
    if (z.sign === "Capricorn") {
      if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return z;
    } else {
      if ((month === z.start[0] && day >= z.start[1]) || (month === z.end[0] && day <= z.end[1])) return z;
    }
  }
  return ZODIAC_SIGNS[0];
}

function getChineseZodiac(year: number) {
  return CHINESE_ZODIAC[year % 12];
}

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function DateCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getResults = useCallback(() => {
    if (!birthDate || !now) return null;
    const birth = new Date(birthDate + "T00:00:00");
    if (isNaN(birth.getTime()) || isAfter(birth, now)) return null;

    const years = differenceInYears(now, birth);
    const afterYears = addYears(birth, years);
    const months = differenceInMonths(now, afterYears);
    const afterMonths = new Date(afterYears);
    afterMonths.setMonth(afterMonths.getMonth() + months);
    const days = differenceInDays(now, afterMonths);

    const totalDays = differenceInDays(now, birth);
    const totalWeeks = differenceInWeeks(now, birth);
    const totalHours = differenceInHours(now, birth);
    const totalMinutes = differenceInMinutes(now, birth);
    const totalSeconds = differenceInSeconds(now, birth);

    const birthMonth = birth.getMonth() + 1;
    const birthDay = birth.getDate();
    const zodiac = getZodiacSign(birthMonth, birthDay);
    const chineseZodiac = getChineseZodiac(birth.getFullYear());
    const dayOfWeek = DAY_NAMES[getDay(birth)];

    let nextBirthday = new Date(now.getFullYear(), birth.getMonth(), birth.getDate());
    if (isBefore(nextBirthday, now) || nextBirthday.getTime() === now.getTime()) {
      nextBirthday = new Date(now.getFullYear() + 1, birth.getMonth(), birth.getDate());
    }
    const daysUntilBirthday = differenceInDays(nextBirthday, now);

    return {
      years, months, days, totalDays, totalWeeks, totalHours, totalMinutes, totalSeconds,
      zodiac, chineseZodiac, dayOfWeek, daysUntilBirthday, nextBirthday, birth,
    };
  }, [birthDate, now]);

  const results = getResults();

  const copyText = results
    ? `Age: ${results.years} years, ${results.months} months, ${results.days} days\nTotal days lived: ${results.totalDays.toLocaleString()}\nTotal weeks lived: ${results.totalWeeks.toLocaleString()}\nBorn on: ${results.dayOfWeek}\nZodiac: ${results.zodiac.sign} ${results.zodiac.symbol}\nChinese Zodiac: ${results.chineseZodiac}\nNext birthday in: ${results.daysUntilBirthday} days`
    : "";

  const handleReset = () => setBirthDate("");

  return (
    <div className="space-y-6">
      <div className="card">
        <label htmlFor="birthdate" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">
          Enter Your Birth Date
        </label>
        <input
          type="date"
          id="birthdate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          max={now ? format(now, "yyyy-MM-dd") : undefined}
          className="input-field"
          aria-label="Birth date"
        />
      </div>

      {results && (
        <>
          <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20">
            <h3 className="text-lg font-bold text-primary dark:text-primary-light mb-4 text-center">Your Exact Age</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-text dark:text-text-dark">{results.years}</div>
                <div className="text-sm text-muted dark:text-text-dark-muted">Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text dark:text-text-dark">{results.months}</div>
                <div className="text-sm text-muted dark:text-text-dark-muted">Months</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-text dark:text-text-dark">{results.days}</div>
                <div className="text-sm text-muted dark:text-text-dark-muted">Days</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-primary/20 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-semibold text-text dark:text-text-dark">{now ? now.getHours().toString().padStart(2, "0") : "--"}</div>
                <div className="text-xs text-muted dark:text-text-dark-muted">Hours</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-text dark:text-text-dark">{now ? now.getMinutes().toString().padStart(2, "0") : "--"}</div>
                <div className="text-xs text-muted dark:text-text-dark-muted">Minutes</div>
              </div>
              <div>
                <div className="text-xl font-semibold text-primary dark:text-primary-light animate-pulse">{now ? now.getSeconds().toString().padStart(2, "0") : "--"}</div>
                <div className="text-xs text-muted dark:text-text-dark-muted">Seconds</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="card">
              <h4 className="font-semibold text-text dark:text-text-dark mb-3">Life Statistics</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total days lived</span><span className="font-semibold text-text dark:text-text-dark">{results.totalDays.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total weeks lived</span><span className="font-semibold text-text dark:text-text-dark">{results.totalWeeks.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total hours lived</span><span className="font-semibold text-text dark:text-text-dark">{results.totalHours.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total minutes lived</span><span className="font-semibold text-text dark:text-text-dark">{results.totalMinutes.toLocaleString()}</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total seconds lived</span><span className="font-semibold text-primary dark:text-primary-light animate-pulse">{results.totalSeconds.toLocaleString()}</span></div>
              </div>
            </div>

            <div className="card">
              <h4 className="font-semibold text-text dark:text-text-dark mb-3">Birth Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Born on</span><span className="font-semibold text-text dark:text-text-dark">{results.dayOfWeek}</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Zodiac sign</span><span className="font-semibold text-text dark:text-text-dark">{results.zodiac.symbol} {results.zodiac.sign}</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Chinese zodiac</span><span className="font-semibold text-text dark:text-text-dark">{CHINESE_ZODIAC_EMOJI[results.chineseZodiac] || ""} {results.chineseZodiac}</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Next birthday in</span><span className="font-semibold text-primary dark:text-primary-light">{results.daysUntilBirthday} days</span></div>
                <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Next birthday</span><span className="font-semibold text-text dark:text-text-dark">{format(results.nextBirthday, "MMM d, yyyy")}</span></div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <CopyButton text={copyText} label="Copy Results" />
            <button onClick={handleReset} className="btn-secondary text-sm">Clear</button>
          </div>
        </>
      )}

      <div className="text-xs text-muted dark:text-text-dark-muted text-center">
        All calculations happen in your browser. Your data never leaves your device.
      </div>
    </div>
  );
}
