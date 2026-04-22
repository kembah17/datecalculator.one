"use client";

import { useState, useEffect, useMemo } from "react";
import CopyButton from "@/components/ui/CopyButton";

const TIMEZONES = [
  { label: "New York (EST/EDT)", zone: "America/New_York" },
  { label: "Los Angeles (PST/PDT)", zone: "America/Los_Angeles" },
  { label: "Chicago (CST/CDT)", zone: "America/Chicago" },
  { label: "Denver (MST/MDT)", zone: "America/Denver" },
  { label: "London (GMT/BST)", zone: "Europe/London" },
  { label: "Paris (CET/CEST)", zone: "Europe/Paris" },
  { label: "Berlin (CET/CEST)", zone: "Europe/Berlin" },
  { label: "Moscow (MSK)", zone: "Europe/Moscow" },
  { label: "Dubai (GST)", zone: "Asia/Dubai" },
  { label: "Mumbai (IST)", zone: "Asia/Kolkata" },
  { label: "Singapore (SGT)", zone: "Asia/Singapore" },
  { label: "Hong Kong (HKT)", zone: "Asia/Hong_Kong" },
  { label: "Tokyo (JST)", zone: "Asia/Tokyo" },
  { label: "Sydney (AEST/AEDT)", zone: "Australia/Sydney" },
  { label: "Auckland (NZST/NZDT)", zone: "Pacific/Auckland" },
  { label: "Honolulu (HST)", zone: "Pacific/Honolulu" },
  { label: "Anchorage (AKST/AKDT)", zone: "America/Anchorage" },
  { label: "Sao Paulo (BRT)", zone: "America/Sao_Paulo" },
  { label: "Cairo (EET)", zone: "Africa/Cairo" },
  { label: "Lagos (WAT)", zone: "Africa/Lagos" },
  { label: "Johannesburg (SAST)", zone: "Africa/Johannesburg" },
  { label: "Bangkok (ICT)", zone: "Asia/Bangkok" },
  { label: "Seoul (KST)", zone: "Asia/Seoul" },
  { label: "Jakarta (WIB)", zone: "Asia/Jakarta" },
];

const MAJOR_CITIES = TIMEZONES.slice(0, 12);

function formatTimeInZone(date: Date, zone: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(date);
  } catch {
    return "--:--:--";
  }
}

function formatDateInZone(date: Date, zone: string): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      weekday: "short",
      month: "short",
      day: "numeric",
    }).format(date);
  } catch {
    return "---";
  }
}

function getHourInZone(date: Date, zone: string): number {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: zone,
      hour: "numeric",
      hour12: false,
    }).formatToParts(date);
    const hourPart = parts.find((p) => p.type === "hour");
    return hourPart ? parseInt(hourPart.value) : 0;
  } catch {
    return 0;
  }
}

export default function TimeZoneConverter() {
  const [now, setNow] = useState<Date | null>(null);
  const [tab, setTab] = useState<"convert" | "world" | "meeting">("convert");
  const [fromZone, setFromZone] = useState("America/New_York");
  const [toZone, setToZone] = useState("Europe/London");
  const [inputTime, setInputTime] = useState("12:00");
  const [inputDate, setInputDate] = useState("");
  const [meetingZones, setMeetingZones] = useState<string[]>(["America/New_York", "Europe/London", "Asia/Tokyo"]);

  useEffect(() => {
    const n = new Date();
    setNow(n);
    setInputDate(n.toISOString().split("T")[0]);
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const convertedTime = useMemo(() => {
    if (!inputTime || !inputDate) return null;
    try {
      const [hours, minutes] = inputTime.split(":").map(Number);
      const sourceDate = new Date(inputDate + "T00:00:00");
      const sourceParts = new Intl.DateTimeFormat("en-US", {
        timeZone: fromZone,
        year: "numeric", month: "2-digit", day: "2-digit",
      }).formatToParts(sourceDate);
      const y = sourceParts.find(p => p.type === "year")?.value || "2025";
      const m = sourceParts.find(p => p.type === "month")?.value || "01";
      const d = sourceParts.find(p => p.type === "day")?.value || "01";
      const utcDate = new Date(`${y}-${m}-${d}T${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:00`);
      const fromOffset = getTimezoneOffset(utcDate, fromZone);
      const adjusted = new Date(utcDate.getTime() - fromOffset);
      return {
        time: formatTimeInZone(adjusted, toZone),
        date: formatDateInZone(adjusted, toZone),
        fromTime: formatTimeInZone(adjusted, fromZone),
        fromDate: formatDateInZone(adjusted, fromZone),
      };
    } catch {
      return null;
    }
  }, [inputTime, inputDate, fromZone, toZone]);

  const meetingHours = useMemo(() => {
    if (!now || meetingZones.length < 2) return [];
    const hours: { hour: number; zones: { zone: string; localHour: number; isBusinessHour: boolean }[] }[] = [];
    for (let h = 0; h < 24; h++) {
      const testDate = new Date(now);
      testDate.setHours(h, 0, 0, 0);
      const zones = meetingZones.map((zone) => {
        const localHour = getHourInZone(testDate, zone);
        return { zone, localHour, isBusinessHour: localHour >= 9 && localHour < 17 };
      });
      const allBusiness = zones.every((z) => z.isBusinessHour);
      hours.push({ hour: h, zones });
      if (allBusiness) {
        hours[hours.length - 1] = { ...hours[hours.length - 1] };
      }
    }
    return hours;
  }, [now, meetingZones]);

  const addMeetingZone = (zone: string) => {
    if (!meetingZones.includes(zone)) setMeetingZones([...meetingZones, zone]);
  };

  const removeMeetingZone = (zone: string) => {
    if (meetingZones.length > 2) setMeetingZones(meetingZones.filter((z) => z !== zone));
  };

  const copyText = tab === "world" && now
    ? MAJOR_CITIES.map((c) => `${c.label}: ${formatTimeInZone(now, c.zone)}`).join("\n")
    : tab === "convert" && convertedTime
    ? `${inputTime} ${TIMEZONES.find(t => t.zone === fromZone)?.label} = ${convertedTime.time} ${TIMEZONES.find(t => t.zone === toZone)?.label}`
    : "";

  return (
    <div className="space-y-6">
      <div className="card">
        <div className="flex gap-2 flex-wrap">
          <button onClick={() => setTab("convert")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${tab === "convert" ? "bg-primary text-white" : "bg-surface-alt dark:bg-surface-dark-alt text-muted dark:text-text-dark-muted"}`}>Convert Time</button>
          <button onClick={() => setTab("world")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${tab === "world" ? "bg-primary text-white" : "bg-surface-alt dark:bg-surface-dark-alt text-muted dark:text-text-dark-muted"}`}>World Clock</button>
          <button onClick={() => setTab("meeting")} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${tab === "meeting" ? "bg-primary text-white" : "bg-surface-alt dark:bg-surface-dark-alt text-muted dark:text-text-dark-muted"}`}>Meeting Planner</button>
        </div>
      </div>

      {tab === "convert" && (
        <>
          <div className="card">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="tz-time" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Time</label>
                <input type="time" id="tz-time" value={inputTime} onChange={(e) => setInputTime(e.target.value)} className="input-field" aria-label="Time to convert" />
              </div>
              <div>
                <label htmlFor="tz-date" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Date</label>
                <input type="date" id="tz-date" value={inputDate} onChange={(e) => setInputDate(e.target.value)} className="input-field" aria-label="Date" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="tz-from" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">From</label>
                <select id="tz-from" value={fromZone} onChange={(e) => setFromZone(e.target.value)} className="input-field" aria-label="From timezone">
                  {TIMEZONES.map((tz) => (<option key={tz.zone} value={tz.zone}>{tz.label}</option>))}
                </select>
              </div>
              <div>
                <label htmlFor="tz-to" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">To</label>
                <select id="tz-to" value={toZone} onChange={(e) => setToZone(e.target.value)} className="input-field" aria-label="To timezone">
                  {TIMEZONES.map((tz) => (<option key={tz.zone} value={tz.zone}>{tz.label}</option>))}
                </select>
              </div>
            </div>
            <button onClick={() => { const tmp = fromZone; setFromZone(toZone); setToZone(tmp); }} className="btn-secondary text-sm mt-4 w-full">Swap Zones</button>
          </div>
          {convertedTime && (
            <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20 text-center">
              <div className="text-3xl font-bold text-primary dark:text-primary-light">{convertedTime.time}</div>
              <div className="text-muted dark:text-text-dark-muted mt-1">{convertedTime.date}</div>
              <div className="text-sm text-muted dark:text-text-dark-muted mt-2">{TIMEZONES.find(t => t.zone === toZone)?.label}</div>
            </div>
          )}
        </>
      )}

      {tab === "world" && now && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {MAJOR_CITIES.map((city) => (
            <div key={city.zone} className="card text-center">
              <div className="text-xs text-muted dark:text-text-dark-muted mb-1">{city.label}</div>
              <div className="text-xl font-bold text-text dark:text-text-dark">{formatTimeInZone(now, city.zone)}</div>
              <div className="text-xs text-muted dark:text-text-dark-muted">{formatDateInZone(now, city.zone)}</div>
            </div>
          ))}
        </div>
      )}

      {tab === "meeting" && now && (
        <>
          <div className="card">
            <h4 className="font-semibold text-text dark:text-text-dark mb-3">Selected Time Zones</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {meetingZones.map((zone) => (
                <span key={zone} className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary dark:text-primary-light rounded-full text-sm">
                  {TIMEZONES.find(t => t.zone === zone)?.label || zone}
                  {meetingZones.length > 2 && (
                    <button onClick={() => removeMeetingZone(zone)} className="ml-1 hover:text-red-500 cursor-pointer" aria-label={`Remove ${zone}`}>&times;</button>
                  )}
                </span>
              ))}
            </div>
            <select onChange={(e) => { if (e.target.value) addMeetingZone(e.target.value); e.target.value = ""; }} className="input-field" aria-label="Add timezone">
              <option value="">Add a timezone...</option>
              {TIMEZONES.filter(tz => !meetingZones.includes(tz.zone)).map((tz) => (
                <option key={tz.zone} value={tz.zone}>{tz.label}</option>
              ))}
            </select>
          </div>

          <div className="card overflow-x-auto">
            <h4 className="font-semibold text-text dark:text-text-dark mb-3">Overlapping Business Hours (9 AM - 5 PM)</h4>
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-border dark:border-border-dark">
                  <th className="py-2 text-left text-muted dark:text-text-dark-muted">UTC</th>
                  {meetingZones.map((zone) => (
                    <th key={zone} className="py-2 text-center text-muted dark:text-text-dark-muted">{TIMEZONES.find(t => t.zone === zone)?.label.split(" (")[0] || zone}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {meetingHours.map((row) => {
                  const allBusiness = row.zones.every((z) => z.isBusinessHour);
                  return (
                    <tr key={row.hour} className={`border-b border-border/30 dark:border-border-dark/30 ${allBusiness ? "bg-green-50 dark:bg-green-900/20" : ""}`}>
                      <td className="py-1 font-mono text-muted dark:text-text-dark-muted">{String(row.hour).padStart(2, "0")}:00</td>
                      {row.zones.map((z, i) => (
                        <td key={i} className={`py-1 text-center font-mono ${z.isBusinessHour ? "text-green-600 dark:text-green-400 font-semibold" : "text-muted/50 dark:text-text-dark-muted/50"}`}>
                          {String(z.localHour).padStart(2, "0")}:00
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted dark:text-text-dark-muted">
              <span className="w-3 h-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded"></span>
              Green rows = all zones within business hours
            </div>
          </div>
        </>
      )}

      {copyText && (
        <div className="flex gap-3 flex-wrap">
          <CopyButton text={copyText} label="Copy Results" />
        </div>
      )}
      <div className="text-xs text-muted dark:text-text-dark-muted text-center">All calculations happen in your browser. Your data never leaves your device.</div>
    </div>
  );
}

function getTimezoneOffset(date: Date, timeZone: string): number {
  const utcStr = date.toLocaleString("en-US", { timeZone: "UTC" });
  const tzStr = date.toLocaleString("en-US", { timeZone });
  const utcDate = new Date(utcStr);
  const tzDate = new Date(tzStr);
  return tzDate.getTime() - utcDate.getTime();
}
