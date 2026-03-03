import { scanDetailMeta } from "@/data/mockData";

const MetadataRow = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-6 pt-6 border-t border-border">
      {Object.entries(scanDetailMeta).map(([key, value]) => {
        const labels: Record<string, string> = {
          scanType: "Scan Type",
          targets: "Targets",
          startedAt: "Started At",
          credentials: "Credentials",
          files: "Files",
          checklists: "Checklists",
        };
        return (
          <div key={key}>
            <p className="text-xs text-muted-foreground mb-1">{labels[key]}</p>
            <p
              className={`text-sm font-semibold ${key === "checklists" ? "text-primary" : "text-foreground"}`}
            >
              {value}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default MetadataRow;
