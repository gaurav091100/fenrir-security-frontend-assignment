import {
  ShieldAlert,
  AlertTriangle,
  Info,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import { severityStats } from "@/data/mockData";

const severityIcons = [
  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-severity-critical/10">
    <ShieldAlert className="w-4 h-4 text-severity-critical" />
  </div>,
  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-severity-high/10">
    <AlertTriangle className="w-4 h-4 text-severity-high" />
  </div>,
  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-severity-medium/10">
    <AlertTriangle className="w-4 h-4 text-severity-medium" />
  </div>,
  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-severity-low/10">
    <Info className="w-4 h-4 text-severity-low" />
  </div>,
];

const SeverityCards = () => {
  return (
    <div className="bg-background mb-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {severityStats.map((stat, i) => (
        <div key={stat.label} className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground font-medium">
              {stat.label}
            </span>
            {severityIcons[i]}
          </div>

          <div className="flex justify-between">
            <p className="text-3xl font-bold text-foreground mb-1">
              {stat.count}
            </p>

            <div className="flex items-center gap-1 text-xs">
              {stat.direction === "up" ? (
                <ArrowUp className="w-3 h-3 text-severity-critical" />
              ) : (
                <ArrowDown className="w-3 h-3 text-severity-medium" />
              )}

              <span
                className={
                  stat.direction === "up"
                    ? "text-severity-critical"
                    : "text-severity-medium"
                }
              >
                {stat.change} {stat.period}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeverityCards;