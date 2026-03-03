import SidebarItem from "./SidebarItem";

interface Item {
  icon: React.ElementType;
  label: string;
  path: string;
}

interface SidebarSectionProps {
  items: Item[];
  onItemClick?: () => void;
}

const SidebarSection = ({ items, onItemClick }: SidebarSectionProps) => {
  return (
    <div className="space-y-1">
      {items.map((item) => (
        <SidebarItem
          key={item.label}
          {...item}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default SidebarSection;