import Link from "next/link";
import { tools } from "@/lib/tools-data";

interface RelatedToolsProps {
  currentSlug: string;
}

export default function RelatedTools({ currentSlug }: RelatedToolsProps) {
  const related = tools.filter((t) => t.slug !== currentSlug).slice(0, 4);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {related.map((tool) => (
        <Link
          key={tool.slug}
          href={`/${tool.slug}`}
          className="card hover:border-primary dark:hover:border-primary-light transition-colors group"
        >
          <div className="flex items-start gap-3">
            <span className="text-2xl">{tool.icon}</span>
            <div>
              <h3 className="font-semibold text-text dark:text-text-dark group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-muted dark:text-text-dark-muted mt-1">{tool.shortDesc}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
