import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, path, onClick }: SidebarItemProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive =
    path === "/dashboard"
      ? location.pathname === "/dashboard"
      : path === "/scans"
      ? location.pathname === "/scans" || location.pathname.startsWith("/scan/")
      : location.pathname === path;

  return (
    <button
      onClick={() => {
        navigate(path);
        onClick?.();
      }}
      className={cn(
        "flex items-center gap-3 w-full px-3 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer",
        isActive
          ? "bg-primary/60 text-primary-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
      )}
    >
      <Icon className="w-4.5 h-4.5" />
      {label}
    </button>
  );
};

export default SidebarItem;