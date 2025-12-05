import { useCallback, useEffect, useState } from "react";

export const useAnnouncementVisibility = (storageKey: string) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasDismissed = localStorage.getItem(storageKey);
    if (hasDismissed === "true") {
      setIsVisible(false);
    }
  }, [storageKey]);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    localStorage.setItem(storageKey, "true");
  }, [storageKey]);

  return { isVisible, dismiss };
};
