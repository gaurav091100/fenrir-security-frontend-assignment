import { Clock } from "lucide-react";
import { orgStats } from "@/data/mockData";

const OrgStatsBar = () => {
  return (
    <div className="bg-background text-orgbar-fg px-4 lg:px-6 py-3 mt-2">
      <div className="flex items-center gap-4 lg:gap-8 text-xs overflow-x-auto">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-orgbar-fg/60">Org:</span>
          <span className="font-semibold">{orgStats.org}</span>
        </div>
        <span className="text-orgbar-fg/30">|</span>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-orgbar-fg/60">Owner:</span>
          <span className="font-semibold">{orgStats.owner}</span>
        </div>
        <span className="text-orgbar-fg/30">|</span>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-orgbar-fg/60">Total Scans:</span>
          <span className="font-semibold">{orgStats.totalScans}</span>
        </div>
        <span className="text-orgbar-fg/30">|</span>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-orgbar-fg/60">Scheduled:</span>
          <span className="font-semibold">{orgStats.scheduled}</span>
        </div>
        <span className="text-orgbar-fg/30">|</span>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-orgbar-fg/60">Rescans:</span>
          <span className="font-semibold">{orgStats.rescans}</span>
        </div>
        <span className="text-orgbar-fg/30">|</span>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="text-orgbar-fg/60">Failed Scans:</span>
          <span className="font-semibold">{orgStats.failedScans}</span>
        </div>

        <div className="ml-auto flex items-center gap-1.5 whitespace-nowrap text-orgbar-fg/60">
          <Clock className="w-3.5 h-3.5" />
          {orgStats.lastUpdated}
        </div>
      </div>
    </div>
  );
};

export default OrgStatsBar;