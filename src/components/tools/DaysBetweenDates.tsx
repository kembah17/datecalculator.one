"use client";

import { useState, useMemo } from "react";
import { differenceInDays, differenceInWeeks, differenceInMonths, differenceInYears, eachDayOfInterval, isWeekend, isBefore, parseISO } from "date-fns";
import CopyButton from "@/components/ui/CopyButton";

export default function DaysBetweenDates() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [includeEndDate, setIncludeEndDate] = useState(false);

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

    const totalDays = differenceInDays(end, start) + (includeEndDate ? 1 : 0);
    const totalWeeks = differenceInWeeks(end, start);
    const totalMonths = differenceInMonths(end, start);
    const totalYears = differenceInYears(end, start);

    let businessDays = 0;
    let weekendDays = 0;
    try {
      const allDays = eachDayOfInterval({ start, end });
      const daysToCount = includeEndDate ? allDays : allDays.slice(0, -1);
      daysToCount.forEach((d) => {
        if (isWeekend(d)) weekendDays++;
        else businessDays++;
      });
    } catch {
      businessDays = Math.round(totalDays * 5 / 7);
      weekendDays = totalDays - businessDays;
    }

    return { totalDays, totalWeeks, totalMonths, totalYears, businessDays, weekendDays, swapped };
  }, [startDate, endDate, includeEndDate]);

  const copyText = results
    ? `Days between dates: ${results.totalDays} days\nWeeks: ${results.totalWeeks}\nMonths: ${results.totalMonths}\nYears: ${results.totalYears}\nBusiness days: ${results.businessDays}\nWeekend days: ${results.weekendDays}`
    : "";

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="start-date" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Start Date</label>
            <input type="date" id="start-date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input-field" aria-label="Start date" />
          </div>
          <div>
            <label htmlFor="end-date" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">End Date</label>
            <input type="date" id="end-date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="input-field" aria-label="End date" />
          </div>
        </div>
        <div className="mt-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" checked={includeEndDate} onChange={(e) => setIncludeEndDate(e.target.checked)} className="w-4 h-4 accent-primary" />
            <span className="text-sm text-muted dark:text-text-dark-muted">Include end date in count</span>
          </label>
        </div>
      </div>

      {results && (
        <>
          {results.swapped && (
            <div className="text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg">Dates were swapped to show positive difference.</div>
          )}
          <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary dark:text-primary-light">{results.totalDays.toLocaleString()}</div>
              <div className="text-muted dark:text-text-dark-muted mt-1">Total Days</div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="card text-center">
              <div className="text-2xl font-bold text-text dark:text-text-dark">{results.totalYears}</div>
              <div className="text-xs text-muted dark:text-text-dark-muted">Years</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-text dark:text-text-dark">{results.totalMonths}</div>
              <div className="text-xs text-muted dark:text-text-dark-muted">Months</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-text dark:text-text-dark">{results.totalWeeks}</div>
              <div className="text-xs text-muted dark:text-text-dark-muted">Weeks</div>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-text dark:text-text-dark">{results.totalDays.toLocaleString()}</div>
              <div className="text-xs text-muted dark:text-text-dark-muted">Days</div>
            </div>
          </div>

          <div className="card">
            <h4 className="font-semibold text-text dark:text-text-dark mb-3">Business Days Breakdown</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-surface-alt dark:bg-surface-dark-alt rounded-lg">
                <div className="text-2xl font-bold text-text dark:text-text-dark">{results.businessDays.toLocaleString()}</div>
                <div className="text-xs text-muted dark:text-text-dark-muted">Business Days (Mon-Fri)</div>
              </div>
              <div className="text-center p-3 bg-surface-alt dark:bg-surface-dark-alt rounded-lg">
                <div className="text-2xl font-bold text-text dark:text-text-dark">{results.weekendDays.toLocaleString()}</div>
                <div className="text-xs text-muted dark:text-text-dark-muted">Weekend Days (Sat-Sun)</div>
              </div>
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
