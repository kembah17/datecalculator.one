export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  shortDesc: string;
}

export const tools: Tool[] = [
  {
    name: "Age Calculator",
    slug: "age-calculator",
    description: "Calculate your exact age in years, months, days, hours, minutes, and seconds with live ticking. Discover your zodiac sign, Chinese zodiac, next birthday countdown, and more.",
    icon: "🎂",
    shortDesc: "Find your exact age with live ticking seconds",
  },
  {
    name: "Days Between Dates",
    slug: "days-between-dates",
    description: "Calculate the exact number of days, weeks, months, and years between any two dates. Includes business days calculation excluding weekends.",
    icon: "📅",
    shortDesc: "Count days, weeks, and business days between dates",
  },
  {
    name: "Date Difference Calculator",
    slug: "date-difference",
    description: "Get a detailed breakdown of the time between two dates in years, months, days, weeks, hours, and minutes.",
    icon: "↔️",
    shortDesc: "Detailed time breakdown between any two dates",
  },
  {
    name: "Add/Subtract Days",
    slug: "add-subtract-days",
    description: "Add or subtract days, weeks, months, or years from any date. Chain multiple operations and see the resulting date with day of week.",
    icon: "➕",
    shortDesc: "Add or subtract time from any date",
  },
  {
    name: "Countdown to Date",
    slug: "countdown",
    description: "Live countdown timer to any future date. Includes popular presets for Christmas, New Year, Valentine's Day, and custom events.",
    icon: "⏳",
    shortDesc: "Live countdown to any future date or event",
  },
  {
    name: "Weekday Finder",
    slug: "weekday-finder",
    description: "Find what day of the week any date falls on. Discover historical events and use batch mode for multiple dates.",
    icon: "🗓️",
    shortDesc: "Find the day of the week for any date",
  },
  {
    name: "Time Zone Converter",
    slug: "time-zone-converter",
    description: "Convert time between time zones worldwide. View current time in major cities and plan meetings across multiple time zones.",
    icon: "🌍",
    shortDesc: "Convert time across world time zones",
  },
];

export const siteConfig = {
  name: "agecalculator.one",
  title: "Age Calculator & Date Tools",
  description: "Free online age calculator and date tools. Calculate your exact age, days between dates, date differences, countdowns, and more. 100% client-side, private, and fast.",
  url: "https://agecalculator.one",
  email: "hello@agecalculator.one",
};
