import { cn } from "@/lib/utils";

interface StatusChipProps {
  status: "Completed" | "Scheduled" | "Failed";
  className?: string;
}

const statusStyles = {
  Completed: "bg-status-completed/15 text-status-completed border-status-completed/30",
  Scheduled: "bg-muted text-muted-foreground border-border",
  Failed: "bg-severity-critical/15 text-severity-critical border-severity-critical/30",
};

const StatusChip = ({ status, className }: StatusChipProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded text-xs font-medium border",
        statusStyles[status],
        className
      )}
    >
      {status}
    </span>
  );
};

export default StatusChip;
