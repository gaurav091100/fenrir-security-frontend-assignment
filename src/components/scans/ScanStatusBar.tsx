const ScanStatusBar = () => {
  return (
    <div className="flex items-center gap-6 px-4 py-2.5 bg-card border border-border rounded-sm text-xs overflow-x-auto">
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
        <span className="text-muted-foreground">Sub-Agents:</span>
        <span className="font-semibold text-foreground">0</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
        <span className="text-muted-foreground">Parallel Executions:</span>
        <span className="font-semibold text-foreground">2</span>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
        <span className="text-muted-foreground">Operations:</span>
        <span className="font-semibold text-foreground">1</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <span className="text-foreground font-medium">
          Critical: <span className="text-severity-critical">0</span>
        </span>
        <span className="text-foreground font-medium">
          High: <span className="text-severity-high">0</span>
        </span>
        <span className="text-foreground font-medium">
          Medium: <span className="text-severity-medium">0</span>
        </span>
        <span className="text-foreground font-medium">
          Low: <span className="text-severity-low">0</span>
        </span>
      </div>
    </div>
  );
};

export default ScanStatusBar;
