"use client";

import { useState, useMemo } from "react";
import { differenceInYears, differenceInMonths, differenceInDays, differenceInWeeks, differenceInHours, addYears, addMonths, isBefore, parseISO } from "date-fns";
import CopyButton from "@/components/ui/CopyButton";

export default function DateDifference() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const results = useMemo(() => {
    if (!startDate || !endDate) return null;
    let start = parseISO(startDate);
    let end = parseISO(endDate);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return null;

    let swapped = false;
    if (isBefore(end, start)) {
      [start, end] = [end, start];
      swapped = true;
    }

    const years = differenceInYears(end, start);
    const afterYears = addYears(start, years);
    const months = differenceInMonths(end, afterYears);
    const afterMonths = addMonths(afterYears, months);
    const days = differenceInDays(end, afterMonths);

    const totalMonths = differenceInMonths(end, start);
    const totalWeeks = differenceInWeeks(end, start);
    const totalDays = differenceInDays(end, start);
    const totalHours = differenceInHours(end, start);

    return { years, months, days, totalMonths, totalWeeks, totalDays, totalHours, swapped };
  }, [startDate, endDate]);

  const copyText = results
    ? `Date Difference: ${results.years} years, ${results.months} months, ${results.days} days\nTotal months: ${results.totalMonths}\nTotal weeks: ${results.totalWeeks}\nTotal days: ${results.totalDays}\nTotal hours: ${results.totalHours}`
    : "";

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="diff-start" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Start Date</label>
            <input type="date" id="diff-start" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input-field" aria-label="Start date" />
          </div>
          <div>
            <label htmlFor="diff-end" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">End Date</label>
            <input type="date" id="diff-end" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input-field" aria-label="End date" />
          </div>
        </div>
      </div>

      {results && (
        <>
          {results.swapped && (
            <div className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">Dates were swapped to show positive difference.</div>
          )}
          <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20">
            <h3 className="text-lg font-bold text-primary dark:text-primary-light mb-4 text-center">Detailed Difference</h3>
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
          </div>

          <div className="card">
            <h4 className="font-semibold text-text dark:text-text-dark mb-3">Total Equivalents</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-surface-alt dark:bg-surface-dark-alt rounded"><span className="text-muted dark:text-text-dark-muted">Total months</span><span className="font-semibold text-text dark:text-text-dark">{results.totalMonths.toLocaleString()}</span></div>
              <div className="flex justify-between p-2 bg-surface-alt dark:bg-surface-dark-alt rounded"><span className="text-muted dark:text-text-dark-muted">Total weeks</span><span className="font-semibold text-text dark:text-text-dark">{results.totalWeeks.toLocaleString()}</span></div>
              <div className="flex justify-between p-2 bg-surface-alt dark:bg-surface-dark-alt rounded"><span className="text-muted dark:text-text-dark-muted">Total days</span><span className="font-semibold text-text dark:text-text-dark">{results.totalDays.toLocaleString()}</span></div>
              <div className="flex justify-between p-2 bg-surface-alt dark:bg-surface-dark-alt rounded"><span className="text-muted dark:text-text-dark-muted">Total hours</span><span className="font-semibold text-text dark:text-text-dark">{results.totalHours.toLocaleString()}</span></div>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <CopyButton text={copyText} label="Copy Results" />
            <button onClick={() => { setStartDate(""); setEndDate(""); }} className="btn-secondary text-sm">Clear</button>
          </div>
        </>
      )}
      <div className="text-xs text-muted dark:text-text-dark-muted text-center">All calculations happen in your browser. Your data never leaves your device.</div>
    </div>
  );
}
