/* eslint-disable @typescript-eslint/no-explicit-any */
import SidebarSection from "./SidebarSection";
import UserProfile from "./UserProfile";

interface SidebarProps {
  navItems: any[];
  bottomItems: any[];
  onItemClick?: () => void;
}

const Sidebar = ({ navItems, bottomItems, onItemClick }: SidebarProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-5">
        <div className="w-7 h-7 rounded-full bg-primary" />
        <span className="text-lg font-bold tracking-tight">aps</span>
      </div>

      <nav className="flex-1 px-3 mt-2 space-y-4">
        <SidebarSection items={navItems} onItemClick={onItemClick} />

        <div className="border-b border-sidebar-border my-3" />

        <SidebarSection items={bottomItems} onItemClick={onItemClick} />
      </nav>

      <UserProfile />
    </div>
  );
};

export default Sidebar;