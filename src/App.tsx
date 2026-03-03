import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ScanDetail from "./pages/ScanDetail";
import Projects from "./pages/Projects";
import Scans from "./pages/Scans";
import Schedule from "./pages/Schedule";
import Notifications from "./pages/Notifications";
import SettingsPage from "./pages/SettingsPage";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

const App = () => (
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/scans/:slug" element={<ScanDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/scans" element={<Scans />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
);

export default App;
