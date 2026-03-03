import AppLayout from "@/components/layout/AppLayout";
import CircularProgress from "@/components/common/CircularProgress";
import StepTacker from "@/components/scans/StepTacker";
import MetadataRow from "@/components/scans/MetadataRow";
import LiveConsole from "@/components/scans/LiveConsole";
import FindingLog from "@/components/scans/FindingLog";
import ScanStatusBar from "@/components/scans/ScanStatusBar";

const ScanDetail = () => {
  return (
    <AppLayout>
      <div className="p-4 lg:p-6 space-y-6">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-10">
            <CircularProgress />
            <div className="flex-1">
              <StepTacker />
              <MetadataRow />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3">
          <LiveConsole />
          <FindingLog />
        </div>
        <ScanStatusBar />
      </div>
    </AppLayout>
  );
};

export default ScanDetail;
