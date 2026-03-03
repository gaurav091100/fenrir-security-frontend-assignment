import { Search, SlidersHorizontal, Columns3, Plus } from "lucide-react";
import { toast } from "sonner";

interface Props {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const DashboardToolbar = ({ searchQuery, setSearchQuery }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
      <div className="relative flex-1 w-full sm:max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search scans by name or type..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
        />
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={() => toast.info("Filters applied")}
          className="flex items-center gap-2 px-4 py-2.5 text-sm border border-border rounded-sm bg-background text-foreground hover:bg-accent transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Filter
        </button>

        <button
          onClick={() => toast.info("Column settings opened")}
          className="flex items-center gap-2 px-4 py-2.5 text-sm border border-border rounded-sm bg-background text-foreground hover:bg-accent transition-colors"
        >
          <Columns3 className="w-4 h-4" />
          Column
        </button>

        <button
          onClick={() =>
            toast.success("New scan created", {
              description: "Your scan has been queued.",
            })
          }
          className="flex items-center gap-2 px-4 py-2.5 text-sm rounded-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium"
        >
          <Plus className="w-4 h-4" />
          New scan
        </button>
      </div>
    </div>
  );
};

export default DashboardToolbar;