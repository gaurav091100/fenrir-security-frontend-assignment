import { Home, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/common/ThemeToggle";
import { toast } from "sonner";
import { formatToSlug } from "@/lib/helpers";

interface Breadcrumb {
  label: string;
  href?: string;
  active?: boolean;
}

interface TopBarProps {
  breadcrumbs?: Breadcrumb[];
  onMenuClick: () => void;
}

const TopBar = ({ breadcrumbs, onMenuClick }: TopBarProps) => {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between px-4 lg:px-6 py-3 border-b bg-background">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-muted-foreground hover:text-foreground"
        >
          <Menu className="w-5 h-5" />
        </button>

        {breadcrumbs && (
          <div className="flex items-center gap-2 text-sm">
            <Home
              className="w-4 h-4 cursor-pointer"
              onClick={() => navigate("/dashboard")}
            />
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span>/</span>
                <span
                  onClick={() => crumb.label && navigate(`/${formatToSlug(crumb.label)}`)}
                  className={cn(
                    crumb.active
                      ? "text-primary font-medium cursor-pointer"
                      : "text-muted-foreground cursor-pointer",
                    crumb.label && "cursor-pointer hover:text-foreground"
                  )}
                >
                  {crumb.label}
                </span>
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />

        <button
          onClick={() =>
            toast.success("Report export started", {
              description: "Your report will be ready shortly.",
            })
          }
          className="px-4 py-2 text-sm border rounded-sm text-foreground border-foreground"
        >
          Export Report
        </button>

        <button
          onClick={() =>
            toast.error("Scan stopped", {
              description: "The active scan has been terminated.",
            })
          }
          className="px-4 py-2 text-sm border rounded-sm text-severity-critical border-severity-critical/20 bg-severity-critical/20"
        >
          Stop Scan
        </button>
      </div>
    </header>
  );
};

export default TopBar;