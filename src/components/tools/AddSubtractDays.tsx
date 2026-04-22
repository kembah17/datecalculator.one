"use client";

import { useState, useMemo } from "react";
import { addDays, addWeeks, addMonths, addYears, subDays, subWeeks, subMonths, subYears, format, parseISO, getDay } from "date-fns";
import CopyButton from "@/components/ui/CopyButton";

const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

interface Operation {
  id: number;
  type: "add" | "subtract";
  amount: string;
  unit: "days" | "weeks" | "months" | "years";
}

let nextId = 1;

export default function AddSubtractDays() {
  const [startDate, setStartDate] = useState("");
  const [operations, setOperations] = useState<Operation[]>([
    { id: 0, type: "add", amount: "", unit: "days" },
  ]);

  const addOperation = () => {
    setOperations([...operations, { id: nextId++, type: "add", amount: "", unit: "days" }]);
  };

  const removeOperation = (id: number) => {
    if (operations.length > 1) {
      setOperations(operations.filter((op) => op.id !== id));
    }
  };

  const updateOperation = (id: number, field: keyof Operation, value: string) => {
    setOperations(operations.map((op) => (op.id === id ? { ...op, [field]: value } : op)));
  };

  const result = useMemo(() => {
    if (!startDate) return null;
    let date = parseISO(startDate);
    if (isNaN(date.getTime())) return null;

    for (const op of operations) {
      const amount = parseInt(op.amount);
      if (isNaN(amount) || amount === 0) continue;

      const fns = {
        add: { days: addDays, weeks: addWeeks, months: addMonths, years: addYears },
        subtract: { days: subDays, weeks: subWeeks, months: subMonths, years: subYears },
      };

      date = fns[op.type][op.unit](date, amount);
    }

    return {
      date,
      formatted: format(date, "EEEE, MMMM d, yyyy"),
      iso: format(date, "yyyy-MM-dd"),
      dayOfWeek: DAY_NAMES[getDay(date)],
    };
  }, [startDate, operations]);

  const copyText = result ? `Result: ${result.formatted}\nDay: ${result.dayOfWeek}\nISO: ${result.iso}` : "";

  const handleReset = () => {
    setStartDate("");
    setOperations([{ id: 0, type: "add", amount: "", unit: "days" }]);
  };

  return (
    <div className="space-y-6">
      <div className="card">
        <label htmlFor="as-start" className="block text-sm font-semibold text-text dark:text-text-dark mb-2">Start Date</label>
        <input type="date" id="as-start" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="input-field" aria-label="Start date" />
      </div>

      <div className="space-y-3">
        {operations.map((op, index) => (
          <div key={op.id} className="card">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-muted dark:text-text-dark-muted">Operation {index + 1}</span>
              {operations.length > 1 && (
                <button onClick={() => removeOperation(op.id)} className="ml-auto text-red-500 hover:text-red-700 text-xs cursor-pointer" aria-label="Remove operation">
                  Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 gap-3">
              <select
                value={op.type}
                onChange={(e) => updateOperation(op.id, "type", e.target.value)}
                className="input-field"
                aria-label="Operation type"
              >
                <option value="add">Add (+)</option>
                <option value="subtract">Subtract (-)</option>
              </select>
              <input
                type="number"
                value={op.amount}
                onChange={(e) => updateOperation(op.id, "amount", e.target.value)}
                placeholder="Amount"
                min="0"
                className="input-field"
                aria-label="Amount"
              />
              <select
                value={op.unit}
                onChange={(e) => updateOperation(op.id, "unit", e.target.value)}
                className="input-field"
                aria-label="Unit"
              >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
          </div>
        ))}
        <button onClick={addOperation} className="btn-secondary text-sm w-full">
          + Add Another Operation
        </button>
      </div>

      {result && (
        <>
          <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20">
            <h3 className="text-lg font-bold text-primary dark:text-primary-light mb-2 text-center">Result</h3>
            <div className="text-center">
              <div className="text-2xl font-bold text-text dark:text-text-dark">{result.formatted}</div>
              <div className="text-muted dark:text-text-dark-muted mt-1">{result.dayOfWeek}</div>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <CopyButton text={copyText} label="Copy Result" />
            <button onClick={handleReset} className="btn-secondary text-sm">Clear</button>
          </div>
        </>
      )}
      <div className="text-xs text-muted dark:text-text-dark-muted text-center">All calculations happen in your browser. Your data never leaves your device.</div>
    </div>
  );
}
