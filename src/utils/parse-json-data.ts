export const parseJsonData = <T>(input: unknown): T[] => {
  if (Array.isArray(input)) return input as T[];

  if (typeof input === "string") {
    try {
      const parsed: unknown = JSON.parse(input);
      if (Array.isArray(parsed)) return parsed as T[];
    } catch {
      // ignore invalid JSON
    }
  }

  return [];
};
