import { cn } from "@/lib/utils";

interface SeverityBadgeProps {
  severity: "Critical" | "High" | "Medium" | "Low";
  count?: number;
  className?: string;
}

const severityStyles = {
  Critical: "bg-severity-critical text-primary-foreground",
  High: "bg-severity-high text-primary-foreground",
  Medium: "bg-severity-medium text-primary-foreground",
  Low: "bg-severity-low text-primary-foreground",
};

const SeverityBadge = ({ severity, count, className }: SeverityBadgeProps) => {
  if (count !== undefined) {
    return (
      <span
        className={cn(
          "inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-sm text-xs font-semibold",
          severityStyles[severity],
          className
        )}
      >
        {count}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold",
        severityStyles[severity],
        className
      )}
    >
      {severity}
    </span>
  );
};

export default SeverityBadge;
