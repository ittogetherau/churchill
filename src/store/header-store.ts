"use client";

import { HeaderQuery } from "@/graphql/generated/graphql";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type HeaderStore = {
  data: HeaderQuery | null;
  lastFetchedAt: number | null;
  hasHydrated: boolean;

  setData: (data: HeaderQuery) => void;
  clear: () => void;
  setHasHydrated: (hasHydrated: boolean) => void;
};

export const useHeaderStore = create<HeaderStore>()(
  persist(
    (set) => ({
      data: null,
      lastFetchedAt: null,
      hasHydrated: false,

      setData: (data) => set({ data, lastFetchedAt: Date.now() }),
      clear: () => set({ data: null, lastFetchedAt: null }),
      setHasHydrated: (hasHydrated) => set({ hasHydrated }),
    }),
    {
      name: "churchill-header-cache",
      version: 1,
      storage: createJSONStorage(() => localStorage),
      partialize: ({ data, lastFetchedAt }) => ({ data, lastFetchedAt }),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
