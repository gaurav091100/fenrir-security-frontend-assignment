import SeverityBadge from "../common/SeverityBadge";
import { findings } from "@/data/mockData";

const FindingLog = () => {
  return (
    <div className="bg-background border border-border overflow-hidden flex flex-col">
      <div className="px-4 py-4 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">Finding Log</h3>
      </div>
      <div className="flex-1 overflow-auto p-3 space-y-3 max-h-[500px]">
        {findings.map((finding) => (
          <div
            key={finding.id}
            className="bg-surface border border-border rounded-lg p-4 space-y-2 hover:border-primary/40 transition"
          >
            <div className="flex items-center justify-between">
              <SeverityBadge severity={finding.severity} />
              <span className="text-xs text-muted-foreground">
                {finding.timestamp}
              </span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">
              {finding.title}
            </h4>
            <p className="text-xs text-primary font-medium">
              {finding.endpoint}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {finding.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindingLog;
