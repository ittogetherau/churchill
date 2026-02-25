"use client";
import { HolidayPopupQuery } from "@/graphql/generated/graphql";
import { parseJsonData } from "@/utils/parse-json-data";
import { useCallback, useSyncExternalStore } from "react";
import { Button } from "../ui/button";

const STORAGE_KEY = "CIHE-popup-state-holiday";

type dateType = {
  date: string;
  title: string;
  is_holiday: boolean;
};

type StoreState = {
  open: boolean;
  popupData: HolidayPopupQuery["holiday_popup"];
  status: "idle" | "loading" | "loaded" | "dismissed";
};

let storeState: StoreState = {
  open: false,
  popupData: null,
  status: "idle",
};

const listeners = new Set<() => void>();

const emitChange = () => {
  for (const listener of listeners) listener();
};

const setStoreState = (partial: Partial<StoreState>) => {
  storeState = { ...storeState, ...partial };
  emitChange();
};

const getSnapshot = () => storeState;
const getServerSnapshot = () =>
  ({
    open: false,
    popupData: null,
    status: "idle",
  }) satisfies StoreState;

const fetchHolidayPopupData = async () => {
  if (typeof window === "undefined") return;
  if (storeState.status !== "idle") return;

  try {
    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      setStoreState({ open: false, status: "dismissed" });
      return;
    }
  } catch {
    return;
  }

  setStoreState({ status: "loading" });

  const response = await fetch("/api/holiday-data", { cache: "no-store" });
  const data = (await response.json()) as HolidayPopupQuery;
  const holidayPopup = data?.holiday_popup ?? null;

  if (holidayPopup?.show_popup) {
    setStoreState({ popupData: holidayPopup, open: true, status: "loaded" });
  } else {
    setStoreState({ popupData: holidayPopup, open: false, status: "loaded" });
  }
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  if (listeners.size === 1) void fetchHolidayPopupData();
  return () => listeners.delete(listener);
};

const dismissHolidayPopup = () => {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // ignore storage errors
  }
  setStoreState({ open: false, status: "dismissed" });
};

const HolidayPopup = () => {
  const { open, popupData } = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const dismiss = useCallback(() => {
    dismissHolidayPopup();
  }, []);

  if (!open || !popupData) return null;

  const dates: dateType[] = parseJsonData<dateType>(popupData.dates);
  if (!dates || dates.length == 0) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="bg-background border-border/50 max-h-[85vh] w-full max-w-lg overflow-hidden rounded-2xl border shadow-2xl">
        <div className="border-b px-8 py-4">
          <h2 className="mb-2 text-3xl font-bold">{popupData?.title}</h2>
          {/* <p className="text-muted-foreground text-sm">
            Christmas & New Year break schedule
          </p> */}
        </div>

        <div className="max-h-[50vh] space-y-1 overflow-auto p-6">
          {dates.map((r, idx) => {
            const isOpen = !!r.is_holiday;

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
                  <div className="text-sm font-semibold">{r.title}</div>
                  <div className="text-muted-foreground text-xs">{r.date}</div>
                </div>
                <div className="shrink-0 text-xs font-bold">
                  {isOpen ? "✓" : "✕"}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-muted/30 flex justify-end gap-2 border-t px-6 py-4">
          <Button onClick={dismiss} className="text-sm">
            Got it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HolidayPopup;
