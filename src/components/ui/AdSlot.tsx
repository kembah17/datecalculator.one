interface AdSlotProps {
  label?: string;
}

export default function AdSlot({ label = "Advertisement" }: AdSlotProps) {
  return (
    <div className="w-full bg-surface-alt dark:bg-surface-dark-alt border border-dashed border-border/50 dark:border-border-dark/50 rounded-lg flex items-center justify-center py-8 px-4">
      <p className="text-xs text-muted/50 dark:text-text-dark-muted/50 uppercase tracking-wider">{label}</p>
    </div>
  );
}
