import { ChevronRight } from "lucide-react";

const UserProfile = () => {
  return (
    <div className="px-3 py-4 border-t border-sidebar-border">
      <div className="flex items-center gap-3 px-2">
        <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-semibold">
          A
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            admin@edu.com
          </p>
          <p className="text-xs text-muted-foreground">
            Security Lead
          </p>
        </div>

        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export default UserProfile;