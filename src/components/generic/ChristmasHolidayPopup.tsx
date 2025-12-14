"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "CIHE_holiday_notice_dismissed_v1";

type Status = "CAMPUS OPEN" | "CAMPUS CLOSED";

type HolidayRow = {
  date: string;
  details: string;
  status: Status;
};

const rows: HolidayRow[] = [
  {
    date: "Wed 24 December",
    details: "Normal workday",
    status: "CAMPUS CLOSED",
  },
  {
    date: "Thu 25 December",
    details: "Christmas Day (Public Holiday)",
    status: "CAMPUS CLOSED",
  },
  {
    date: "Fri 26 December",
    details: "Boxing Day (Public Holiday)",
    status: "CAMPUS CLOSED",
  },
  {
    date: "Sat 27 & Sun 28 December",
    details: "Weekend",
    status: "CAMPUS CLOSED",
  },
  { date: "Mon 29 December", details: "Normal workday", status: "CAMPUS OPEN" },
  { date: "Tue 30 December", details: "Normal workday", status: "CAMPUS OPEN" },
  { date: "Wed 31 December", details: "Normal workday", status: "CAMPUS OPEN" },
  {
    date: "Thu 1 January",
    details: "New Year's Day (Public Holiday)",
    status: "CAMPUS CLOSED",
  },
  {
    date: "Fri 2 January 2025",
    details:
      "Concessional Leave Day (no work or annual leave needed for staff)",
    status: "CAMPUS CLOSED",
  },
  {
    date: "Sat 3 & Sun 4 January 2026",
    details: "Weekend",
    status: "CAMPUS CLOSED",
  },
  {
    date: "Mon 5 January 2026 onwards",
    details: "Open Monday to Friday",
    status: "CAMPUS OPEN",
  },
];

export default function ChristmasHolidayPopup() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    try {
      const dismissed = window.localStorage.getItem(STORAGE_KEY);
      setOpen(!dismissed);
    } catch {
      setOpen(true);
    }
  }, []);

  const dismiss = React.useCallback(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setOpen(false);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="bg-background border-border/50 max-h-[85vh] w-full max-w-lg overflow-hidden rounded-2xl border shadow-2xl">
        <div className="border-b px-8 py-4">
          <h2 className="mb-2 text-3xl font-bold">Holiday Hours</h2>
          <p className="text-muted-foreground text-sm">
            Christmas & New Year break schedule
          </p>
        </div>

        <div className="max-h-[50vh] space-y-1 overflow-auto p-6">
          {rows.map((r, idx) => {
            const isOpen = r.status === "CAMPUS OPEN";
            return (
              <div
                key={idx}
                className={`flex items-center gap-3 rounded-lg p-3 transition-all hover:scale-[1.01] ${
                  isOpen
                    ? "bg-green-500/10 hover:bg-green-500/20"
                    : "bg-red-500/10 hover:bg-red-500/20"
                }`}
              >
                <div
                  className={`h-2 w-2 shrink-0 rounded-full ${isOpen ? "bg-green-500" : "bg-red-500"}`}
                ></div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold">{r.date}</div>
                  <div className="text-muted-foreground text-xs">
                    {r.details}
                  </div>
                </div>
                <div className="shrink-0 text-xs font-bold">
                  {isOpen ? "✓" : "✕"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-muted/30 flex justify-end gap-2 border-t px-6 py-4">
          <Button variant="ghost" onClick={dismiss} className="text-sm">
            Dismiss
          </Button>
          <Button onClick={dismiss} className="text-sm">
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
}
