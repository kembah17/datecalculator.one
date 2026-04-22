"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="card">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between text-left cursor-pointer"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-text dark:text-text-dark pr-4">{item.question}</span>
            <svg
              className={`w-5 h-5 text-muted dark:text-text-dark-muted transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="mt-3 pt-3 border-t border-border dark:border-border-dark">
              <p className="text-muted dark:text-text-dark-muted leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
