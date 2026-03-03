import { scanSteps } from "@/data/mockData";
import {
  Globe,
  Bug,
  TestTube,
  CheckCircle2,
  FileText,
} from "lucide-react";

const stepIcons = [Bug, Globe, TestTube, CheckCircle2, FileText];

const activeStepIndex = 0;

const StepTacker = () => {
  return (
    <div className="flex items-center w-full justify-between mt-2">
      {scanSteps.map((step, i) => {
        const Icon = stepIcons[i];
        const isActive = i === activeStepIndex;

        return (
          <div key={step} className="flex-1 flex items-center">
            <div className="flex flex-col items-center relative">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition
            ${
              isActive
                ? "bg-primary border-primary text-white shadow-lg"
                : "bg-background border-border text-muted-foreground"
            }`}
              >
                <Icon className="w-5 h-5" />
              </div>

              <span className="text-xs mt-2 text-muted-foreground">{step}</span>
            </div>

            {i < scanSteps.length - 1 && (
              <div className="flex-1 h-px bg-border mx-3" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepTacker;
