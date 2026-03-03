import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-border">
      <span className="text-xs text-muted-foreground">
        Showing 15 of 100 Scans
      </span>
      <div className="flex items-center gap-1">
        <button className="p-1.5 rounded border border-border hover:bg-accent transition-colors">
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        </button>
        <button className="p-1.5 rounded border border-border hover:bg-accent transition-colors">
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;