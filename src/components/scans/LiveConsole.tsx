import { logEntries } from '@/data/mockData'
import { ChevronDown, Loader2, X } from 'lucide-react';
import { useState, type JSX } from 'react'

const LiveConsole = () => {
  const [activeTab, setActiveTab] = useState<"activity" | "verification">(
    "activity",
  );

  const renderLogMessage = (entry: (typeof logEntries)[0]) => {
    const message = entry.message;
    if (entry.highlights) {
      const parts: (string | JSX.Element)[] = [];
      let remaining = message;
      entry.highlights.forEach((h, i) => {
        const idx = remaining.indexOf(h.text);
        if (idx >= 0) {
          if (idx > 0) parts.push(remaining.slice(0, idx));
          const className =
            h.type === "url"
              ? "text-primary"
              : h.type === "code"
                ? "bg-primary/20 text-primary px-1 py-0.5 rounded text-xs"
                : "text-severity-medium";
          parts.push(
            <span key={i} className={className}>
              {h.text}
            </span>,
          );
          remaining = remaining.slice(idx + h.text.length);
        }
      });
      if (remaining) parts.push(remaining);
      return parts;
    }
    return message;
  };
  return (
    <div className="lg:col-span-2 bg-background border border-border overflow-hidden flex flex-col">
            {/* Console header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border/50">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse-dot" />
                <span className="text-sm font-semibold text-console-fg">
                  Live Scan Console
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface/10 text-xs text-console-fg/70">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Running...
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1.5 hover:bg-surface/10 rounded transition-colors">
                  <ChevronDown className="w-4 h-4 text-console-fg/50" />
                </button>
                <button className="p-1.5 hover:bg-surface/10 rounded transition-colors">
                  <X className="w-4 h-4 text-console-fg/50" />
                </button>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex px-4  border-b border-border/50">
              <button
                onClick={() => setActiveTab("activity")}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "activity"
                    ? "border-primary text-primary"
                    : "border-transparent text-console-fg/50 hover:text-console-fg/70"
                }`}
              >
                Activity Log
              </button>
              <button
                onClick={() => setActiveTab("verification")}
                className={`px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === "verification"
                    ? "border-primary text-primary"
                    : "border-transparent text-console-fg/50 hover:text-console-fg/70"
                }`}
              >
                Verification Loops
              </button>
            </div>

            {/* Log content */}
            <div className="flex-1 overflow-auto p-5 space-y-4 max-h-[500px]">
              {logEntries.map((entry, i) => (
                <div
                  key={i}
                  className="font-mono text-sm text-console-fg leading-relaxed"
                >
                  <span className="text-console-fg/50">[{entry.time}]</span>{" "}
                  <span className="whitespace-pre-wrap">
                    {renderLogMessage(entry)}
                  </span>
                </div>
              ))}
            </div>
          </div>
  )
}

export default LiveConsole