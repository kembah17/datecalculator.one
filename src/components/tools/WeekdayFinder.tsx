"use client";

import { useState } from "react";
import { format, parseISO, getDay } from "date-fns";
import CopyButton from "@/components/ui/CopyButton";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const HISTORICAL_EVENTS: Record<string, string[]> = {
  "01-01": ["New Year's Day celebrated worldwide", "Euro currency introduced (1999)"],
  "01-20": ["US Presidential Inauguration Day", "Martin Luther King Jr. Day (observed)"],
  "02-14": ["Valentine's Day", "First telephone patent by Alexander Graham Bell (1876)"],
  "03-14": ["Pi Day (3.14)", "Albert Einstein born (1879)"],
  "04-15": ["Titanic sank (1912)", "Leonardo da Vinci born (1452)"],
  "04-22": ["Earth Day", "First Earth Day celebrated (1970)"],
  "05-01": ["International Workers' Day", "Empire State Building opened (1931)"],
  "06-06": ["D-Day Normandy landings (1944)"],
  "07-04": ["US Independence Day (1776)", "NASA Pathfinder landed on Mars (1997)"],
  "07-20": ["Moon landing - Apollo 11 (1969)"],
  "08-06": ["First atomic bomb dropped on Hiroshima (1945)", "World Wide Web went public (1991)"],
  "09-11": ["September 11 attacks (2001)"],
  "10-31": ["Halloween", "Martin Luther posted 95 Theses (1517)"],
  "11-09": ["Fall of the Berlin Wall (1989)"],
  "11-11": ["Veterans Day / Armistice Day", "World War I ended (1918)"],
  "12-25": ["Christmas Day", "Isaac Newton born (1642)"],
  "12-31": ["New Year's Eve"],
};

function getHistoricalEvents(date: Date): string[] {
  const key = format(date, "MM-dd");
  return HISTORICAL_EVENTS[key] || [];
}

interface BatchResult {
  input: string;
  date: Date;
  dayName: string;
}

export default function WeekdayFinder() {
  const [singleDate, setSingleDate] = useState("");
  const [batchInput, setBatchInput] = useState("");
  const [mode, setMode] = useState<"single" | "batch">("single");
  const [batchResults, setBatchResults] = useState<BatchResult[]>([]);

  const singleResult = singleDate ? (() => {
    const d = parseISO(singleDate);
    if (isNaN(d.getTime())) return null;
    return {
      date: d,
      dayName: DAY_NAMES[getDay(d)],
      formatted: format(d, "EEEE, MMMM d, yyyy"),
      events: getHistoricalEvents(d),
    };
  })() : null;

  const processBatch = () => {
    const lines = batchInput.split("\n").filter((l) => l.trim());
    const results: BatchResult[] = [];
    for (const line of lines) {
      const trimmed = line.trim();
      const d = parseISO(trimmed);
      if (!isNaN(d.getTime())) {
        results.push({ input: trimmed, date: d, dayName: DAY_NAMES[getDay(d)] });
      }
    }
    setBatchResults(results);
  };

  const copyText = mode === "single" && singleResult
    ? `${singleResult.formatted}\nDay: ${singleResult.dayName}${singleResult.events.length > 0 ? "\nHistorical events: " + singleResult.events.join("; ") : ""}`
    : batchResults.map((r) => `${r.input} - ${r.dayName}`).join("\n");

  const handleReset = () => {
    setSingleDate("");
    setBatchInput("");
    setBatchResults([]);
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex gap-2 mb-4">
          <button onClick={() => setMode("single")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${mode === "single" ? "bg-primary text-white" : "bg-surface-alt dark:bg-surface-dark-alt text-muted dark:text-text-dark-muted"}`}>Single Date</button>
          <button onClick={() => setMode("batch")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${mode === "batch" ? "bg-primary text-white" : "bg-surface-alt dark:bg-surface-dark-alt text-muted dark:text-text-dark-muted"}`}>Batch Mode</button>
        </div>

        {mode === "single" ? (
          <div>
            <label htmlFor="wf-date" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Select a Date</label>
            <input type="date" id="wf-date" value={singleDate} onChange={(e) => setSingleDate(e.target.value)} className="input-field" aria-label="Date to find weekday" />
          </div>
        ) : (
          <div>
            <label htmlFor="wf-batch" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Enter Dates (one per line, YYYY-MM-DD)</label>
            <textarea id="wf-batch" value={batchInput} onChange={(e) => setBatchInput(e.target.value)} rows={6} className="input-field font-mono" placeholder="2000-01-01\n1990-06-15\n2025-12-25" aria-label="Batch dates" />
            <button onClick={processBatch} className="btn-primary mt-3 text-sm">Find Weekdays</button>
          </div>
        )}
      </div>

      {mode === "single" && singleResult && (
        <>
          <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20 text-center">
            <div className="text-3xl font-bold text-primary dark:text-primary-light">{singleResult.dayName}</div>
            <div className="text-muted dark:text-text-dark-muted mt-2">{singleResult.formatted}</div>
          </div>

          {singleResult.events.length > 0 && (
            <div className="card">
              <h4 className="font-semibold text-text dark:text-text-dark mb-3">Historical Events on This Date</h4>
              <ul className="space-y-2">
                {singleResult.events.map((event, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted dark:text-text-dark-muted">
                    <span className="text-primary mt-0.5">&#8226;</span>
                    {event}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {mode === "batch" && batchResults.length > 0 && (
        <div className="card">
          <h4 className="font-semibold text-text dark:text-text-dark mb-3">Results ({batchResults.length} dates)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border dark:border-border-dark">
                  <th className="text-left py-2 text-muted dark:text-text-dark-muted font-medium">Date</th>
                  <th className="text-left py-2 text-muted dark:text-text-dark-muted font-medium">Formatted</th>
                  <th className="text-left py-2 text-muted dark:text-text-dark-muted font-medium">Day of Week</th>
                </tr>
              </thead>
              <tbody>
                {batchResults.map((r, i) => (
                  <tr key={i} className="border-b border-border/50 dark:border-border-dark/50">
                    <td className="py-2 font-mono text-text dark:text-text-dark">{r.input}</td>
                    <td className="py-2 text-muted dark:text-text-dark-muted">{format(r.date, "MMM d, yyyy")}</td>
                    <td className="py-2 font-semibold text-primary dark:text-primary-light">{r.dayName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {(singleResult || batchResults.length > 0) && (
        <div className="flex gap-3 flex-wrap">
          <CopyButton text={copyText} label="Copy Results" />
          <button onClick={handleReset} className="btn-secondary text-sm">Clear</button>
        </div>
      )}
      <div className="text-xs text-muted dark:text-text-dark-muted text-center">All calculations happen in your browser. Your data never leaves your device.</div>
    </div>
  );
}
