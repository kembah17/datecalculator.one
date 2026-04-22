"use client";

import { useState, useEffect, useMemo } from "react";
import { differenceInSeconds, format, parseISO } from "date-fns";
import CopyButton from "@/components/ui/CopyButton";

interface Preset {
  name: string;
  getDate: () => string;
}

function getNextOccurrence(month: number, day: number): string {
  const now = new Date();
  let year = now.getFullYear();
  const target = new Date(year, month - 1, day);
  if (target <= now) year++;
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

const PRESETS: Preset[] = [
  { name: "New Year", getDate: () => `${new Date().getFullYear() + (new Date().getMonth() === 11 && new Date().getDate() === 31 ? 1 : new Date().getMonth() >= 0 ? 1 : 0) + new Date().getFullYear()}-01-01`.replace(/.*/, () => { const y = new Date().getFullYear(); const d = new Date(y + 1, 0, 1); return format(d, "yyyy-MM-dd"); }) },
  { name: "Valentine's Day", getDate: () => getNextOccurrence(2, 14) },
  { name: "Christmas", getDate: () => getNextOccurrence(12, 25) },
  { name: "Halloween", getDate: () => getNextOccurrence(10, 31) },
  { name: "Independence Day (US)", getDate: () => getNextOccurrence(7, 4) },
];

export default function Countdown() {
  const [targetDate, setTargetDate] = useState("");
  const [eventName, setEventName] = useState("");
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const countdown = useMemo(() => {
    if (!targetDate || !now) return null;
    const target = parseISO(targetDate + "T23:59:59");
    if (isNaN(target.getTime())) return null;

    const totalSeconds = differenceInSeconds(target, now);
    if (totalSeconds <= 0) return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };

    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return { expired: false, days, hours, minutes, seconds, totalSeconds };
  }, [targetDate, now]);

  const applyPreset = (preset: Preset) => {
    setTargetDate(preset.getDate());
    setEventName(preset.name);
  };

  const copyText = countdown && !countdown.expired
    ? `Countdown to ${eventName || targetDate}: ${countdown.days} days, ${countdown.hours} hours, ${countdown.minutes} minutes, ${countdown.seconds} seconds`
    : "";

  const handleReset = () => {
    setTargetDate("");
    setEventName("");
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="cd-event" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Event Name (optional)</label>
            <input type="text" id="cd-event" value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="My Event" className="input-field" aria-label="Event name" />
          </div>
          <div>
            <label htmlFor="cd-date" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Target Date</label>
            <input type="date" id="cd-date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="input-field" aria-label="Target date" />
          </div>
        </div>
      </div>

      <div className="card">
        <h4 className="text-sm font-semibold text-text dark:text-text-dark mb-3">Quick Presets</h4>
        <div className="flex flex-wrap gap-2">
          {PRESETS.map((preset) => (
            <button key={preset.name} onClick={() => applyPreset(preset)} className="btn-secondary text-xs">
              {preset.name}
            </button>
          ))}
        </div>
      </div>

      {countdown && (
        <>
          {countdown.expired ? (
            <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20 text-center">
              <div className="text-2xl font-bold text-primary dark:text-primary-light">Event has passed!</div>
              <p className="text-muted dark:text-text-dark-muted mt-2">The target date is in the past.</p>
            </div>
          ) : (
            <>
              {eventName && (
                <div className="text-center">
                  <h3 className="text-lg font-bold text-text dark:text-text-dark">Countdown to {eventName}</h3>
                </div>
              )}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="card text-center bg-primary/5 dark:bg-primary/10 border-primary/20">
                  <div className="text-4xl font-bold text-primary dark:text-primary-light">{countdown.days}</div>
                  <div className="text-sm text-muted dark:text-text-dark-muted">Days</div>
                </div>
                <div className="card text-center bg-primary/5 dark:bg-primary/10 border-primary/20">
                  <div className="text-4xl font-bold text-primary dark:text-primary-light">{String(countdown.hours).padStart(2, "0")}</div>
                  <div className="text-sm text-muted dark:text-text-dark-muted">Hours</div>
                </div>
                <div className="card text-center bg-primary/5 dark:bg-primary/10 border-primary/20">
                  <div className="text-4xl font-bold text-primary dark:text-primary-light">{String(countdown.minutes).padStart(2, "0")}</div>
                  <div className="text-sm text-muted dark:text-text-dark-muted">Minutes</div>
                </div>
                <div className="card text-center bg-primary/5 dark:bg-primary/10 border-primary/20">
                  <div className="text-4xl font-bold text-primary dark:text-primary-light animate-pulse">{String(countdown.seconds).padStart(2, "0")}</div>
                  <div className="text-sm text-muted dark:text-text-dark-muted">Seconds</div>
                </div>
              </div>

              <div className="card">
                <h4 className="font-semibold text-text dark:text-text-dark mb-3">Total Remaining</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total hours</span><span className="font-semibold text-text dark:text-text-dark">{(countdown.days * 24 + countdown.hours).toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total minutes</span><span className="font-semibold text-text dark:text-text-dark">{(countdown.days * 1440 + countdown.hours * 60 + countdown.minutes).toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-muted dark:text-text-dark-muted">Total seconds</span><span className="font-semibold text-primary dark:text-primary-light animate-pulse">{countdown.totalSeconds.toLocaleString()}</span></div>
                </div>
              </div>
            </>
          )}
          <div className="flex gap-3 flex-wrap">
            <CopyButton text={copyText} label="Copy Countdown" />
            <button onClick={handleReset} className="btn-secondary text-sm">Clear</button>
          </div>
        </>
      )}
      <div className="text-xs text-muted dark:text-text-dark-muted text-center">All calculations happen in your browser. Your data never leaves your device.</div>
    </div>
  );
}
