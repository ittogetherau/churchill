import { useCallback, useEffect, useState } from "react";

export const useAnnouncementVisibility = (storageKey: string) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const hasDismissed = sessionStorage.getItem(storageKey);
    if (hasDismissed === "true") {
      setIsVisible(false);
    }
  }, [storageKey]);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem(storageKey, "true");
  }, [storageKey]);

  return { isVisible, dismiss };
};
