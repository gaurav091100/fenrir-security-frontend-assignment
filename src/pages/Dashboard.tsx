import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import { scans } from "@/data/mockData";
import OrgStatsBar from "@/components/dashboard/OrgStatsBar";
import SeverityCards from "@/components/dashboard/SeverityCards";
import DashboardToolbar from "@/components/dashboard/DashboardToolbar";
import StatusChip from "@/components/common/StatusChip";
import SeverityBadge from "@/components/common/SeverityBadge";
import Pagination from "@/components/common/Pagination";
import { useNavigate } from "react-router-dom";
import { formatToSlug } from "@/lib/helpers";

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const filteredScans = scans.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.type.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <AppLayout>
      <OrgStatsBar />

      <div className="space-y-6">
        <SeverityCards />

        <div className="m-1 lg:m-2 px-1 py-2 lg:px-2 lg:py-4 rounded-md bg-background">
          <DashboardToolbar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* Scan table */}
          <div className="mt-1 lg:mt-2 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Scan Name
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Type
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Status
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Progress
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Vulnerability Counts
                    </th>
                    <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground">
                      Last Scan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredScans.map((scan) => (
                    <tr
                      key={scan.id}
                      onClick={() =>
                        navigate(`/scans/${formatToSlug(scan.name)}`)
                      }
                      className="hover:bg-accent/50 cursor-pointer transition-colors"
                    >
                      <td className="p-2 text-xs font-medium text-foreground">
                        {scan.name}
                      </td>
                      <td className="p-2 text-xs text-muted-foreground">
                        {scan.type}
                      </td>
                      <td className="p-2">
                        <StatusChip status={scan.status} />
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${
                                scan.status === "Failed"
                                  ? "bg-severity-critical"
                                  : "bg-primary"
                              }`}
                              style={{ width: `${scan.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {scan.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="flex items-center gap-1.5">
                          <SeverityBadge
                            severity="Critical"
                            count={scan.vulnerabilities.critical}
                          />
                          <SeverityBadge
                            severity="High"
                            count={scan.vulnerabilities.high}
                          />
                          {scan.vulnerabilities.medium > 0 && (
                            <SeverityBadge
                              severity="Medium"
                              count={scan.vulnerabilities.medium}
                            />
                          )}
                          {scan.vulnerabilities.low > 0 && (
                            <SeverityBadge
                              severity="Low"
                              count={scan.vulnerabilities.low}
                            />
                          )}
                        </div>
                      </td>
                      <td className="p-2 text-xs text-muted-foreground">
                        {scan.lastScan}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <Pagination />
        </div>
      </div>
    </AppLayout>
  );
};

export default Dashboard;
