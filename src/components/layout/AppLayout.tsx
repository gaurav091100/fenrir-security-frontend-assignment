import { type ReactNode, useState } from "react";
import {
  LayoutDashboard, FolderOpen, Scan, Calendar, Bell, Settings, HelpCircle,
} from "lucide-react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";
import { useLocation } from "react-router-dom";
import { formatBreadcrumbLabel } from "@/lib/helpers";

interface AppLayoutProps {
  children: ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: FolderOpen, label: "Projects", path: "/projects" },
  { icon: Scan, label: "Scans", path: "/scans" },
  { icon: Calendar, label: "Schedule", path: "/schedule" },
];

const bottomItems = [
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Settings, label: "Settings", path: "/settings" },
  { icon: HelpCircle, label: "Support", path: "/support" },
];

const AppLayout = ({ children }: AppLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);
  
  const breadcrumbs = pathSegments.map((segment, index) => ({
    label: formatBreadcrumbLabel(segment),
    active: index === pathSegments.length - 1,
  }));
  return (
    <div className="flex h-screen bg-muted overflow-hidden">
      {/* Desktop */}
      <aside className="hidden lg:flex w-56 border-r bg-sidebar">
        <Sidebar navItems={navItems} bottomItems={bottomItems} />
      </aside>

      {/* Mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="relative w-64 h-full bg-sidebar shadow-xl">
            <Sidebar
              navItems={navItems}
              bottomItems={bottomItems}
              onItemClick={() => setSidebarOpen(false)}
            />
          </aside>
        </div>
      )}

      <div className="flex-1 flex flex-col">
        <TopBar
          breadcrumbs={breadcrumbs}
          onMenuClick={() => setSidebarOpen(true)}
        />

        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default AppLayout;