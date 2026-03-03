import { useNavigate } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import StatusChip from "@/components/common/StatusChip";
import SeverityBadge from "@/components/common/SeverityBadge";
import { scans } from "@/data/mockData";
import Pagination from "@/components/common/Pagination";
import { formatToSlug } from "@/lib/helpers";

const Scans = () => {
  const navigate = useNavigate();

  return (
    <AppLayout>
      <div className="p-4 lg:p-6">
        <div className="border border-border rounded-xl overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Scan Name
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Type
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Progress
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Vulnerability
                  </th>
                  <th className="text-left px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Last Scan
                  </th>
                </tr>
              </thead>
              <tbody>
                {scans.map((scan) => (
                  <tr
                    key={scan.id}
                    onClick={() =>
                      navigate(`/scans/${formatToSlug(scan.name)}`)
                    }
                    className="border-b border-border last:border-0 hover:bg-accent/50 cursor-pointer transition-colors"
                  >
                    <td className="px-4 py-3.5 text-sm font-medium text-foreground">
                      {scan.name}
                    </td>
                    <td className="px-4 py-3.5 text-sm text-muted-foreground">
                      {scan.type}
                    </td>
                    <td className="px-4 py-3.5">
                      <StatusChip status={scan.status} />
                    </td>
                    <td className="px-4 py-3.5">
                      <div className="flex items-center gap-2">
                        <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${scan.status === "Failed" ? "bg-severity-critical" : "bg-primary"}`}
                            style={{ width: `${scan.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-muted-foreground">
                          {scan.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3.5">
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
                    <td className="px-4 py-3.5 text-sm text-muted-foreground">
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
    </AppLayout>
  );
};

export default Scans;
