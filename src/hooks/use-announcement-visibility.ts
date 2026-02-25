import { useCallback, useSyncExternalStore } from "react";

export const useAnnouncementVisibility = (storageKey: string) => {
  const isVisible = useSyncExternalStore(
    (onStoreChange) => {
      if (typeof window === "undefined") return () => {};

      const handler = () => onStoreChange();
      window.addEventListener("announcement-visibility", handler);
      return () =>
        window.removeEventListener("announcement-visibility", handler);
    },
    () => {
      if (typeof window === "undefined") return true;
      return sessionStorage.getItem(storageKey) !== "true";
    },
    () => true,
  );

  const dismiss = useCallback(() => {
    if (typeof window === "undefined") return;
    sessionStorage.setItem(storageKey, "true");
    window.dispatchEvent(new Event("announcement-visibility"));
  }, [storageKey]);

  return { isVisible, dismiss };
};
