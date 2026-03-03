export interface ScanEntry {
  id: string;
  name: string;
  type: "Greybox" | "Blackbox";
  status: "Completed" | "Scheduled" | "Failed";
  progress: number;
  vulnerabilities: { critical: number; high: number; medium: number; low: number };
  lastScan: string;
}

export interface Finding {
  id: string;
  severity: "Critical" | "High" | "Medium";
  title: string;
  endpoint: string;
  description: string;
  timestamp: string;
}

export interface LogEntry {
  time: string;
  message: string;
  highlights?: { text: string; type: "url" | "code" | "keyword" }[];
}

export const orgStats = {
  org: "Project X",
  owner: "Nammagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failedScans: 100,
  lastUpdated: "10 mins ago",
};

export const severityStats = [
  { label: "Critical Severity", count: 86, change: "+2%", direction: "up" as const, period: "increase than yesterday" },
  { label: "High Severity", count: 16, change: "+0.9%", direction: "up" as const, period: "increase than yesterday" },
  { label: "Medium Severity", count: 26, change: "+0.9%", direction: "down" as const, period: "decrease than yesterday" },
  { label: "Low Severity", count: 16, change: "+0.9%", direction: "up" as const, period: "increase than yesterday" },
];

export const scans: ScanEntry[] = [
  { id: "1", name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: "2", name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: "3", name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: "4", name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: "5", name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: "6", name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: "7", name: "Web App Servers", type: "Greybox", status: "Completed", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 }, lastScan: "4d ago" },
  { id: "8", name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: "4d ago" },
  { id: "9", name: "Web App Servers", type: "Greybox", status: "Scheduled", progress: 100, vulnerabilities: { critical: 5, high: 12, medium: 0, low: 0 }, lastScan: "4d ago" },
  { id: "10", name: "IoT Devices", type: "Blackbox", status: "Failed", progress: 10, vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 }, lastScan: "3d ago" },
  { id: "11", name: "Temp Data", type: "Blackbox", status: "Failed", progress: 10, vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 }, lastScan: "3d ago" },
];

export const findings: Finding[] = [
  {
    id: "f1",
    severity: "Critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access.",
    timestamp: "10:45:23",
  },
  {
    id: "f2",
    severity: "High",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing.",
    timestamp: "10:45:23",
  },
  {
    id: "f3",
    severity: "Medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible.",
    timestamp: "10:45:23",
  },
];

export const logEntries: LogEntry[] = [
  {
    time: "09:00:00",
    message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
    highlights: [{ text: "helpdesk.democorp.com", type: "url" }],
  },
  {
    time: "09:01:00",
    message: "Good! target is online. Now let me perform port scanning to identify running services.",
  },
  {
    time: "09:02:00",
    message: 'Excellent reconnaissance results:\n\n  - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server)\n\nLet me probe the web server on target first to understand its structure.',
    highlights: [{ text: "helpdesk.democorp.com", type: "url" }],
  },
  {
    time: "09:03:00",
    message: 'Great! I found a login page for a Help Desk Platform. I can see a useful comment: "TODO: Delete the testing account (test:test)". Let me test this credential. The login redirects to /password/test. Let me follow that path and explore it.',
    highlights: [
      { text: '"TODO: Delete the testing account (test:test)"', type: "keyword" },
      { text: "/password/test", type: "code" },
    ],
  },
  {
    time: "09:04:00",
    message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page. Let me try a different approach.",
    highlights: [{ text: "'#'", type: "keyword" }],
  },
  {
    time: "09:05:00",
    message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.",
    highlights: [{ text: "test:test", type: "keyword" }],
  },
  {
    time: "09:06:00",
    message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows \"Welcome, John Doe\". This suggests an **IDOR vulnerability** - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...",
    highlights: [
      { text: "'X-UserId: 10032'", type: "code" },
      { text: "**IDOR vulnerability**", type: "keyword" },
    ],
  },
];

export const scanDetailMeta = {
  scanType: "Grey Box",
  targets: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
};

export const scanSteps = ["Spidering", "Mapping", "Testing", "Validating", "Reporting"];
