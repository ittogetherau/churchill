import { KeyDatesFieldsFragment } from "@/graphql/generated/graphql";

type OrganizedData = Record<string, KeyDatesFieldsFragment[][]>;

export const organizeByYearMonth = (items: KeyDatesFieldsFragment[]) => {
  const organized: OrganizedData = {};

  items.forEach((item) => {
    if (!item?.start_date) return;
    const eventDate = new Date(item.start_date);
    const year = eventDate.getFullYear();
    const month = eventDate.getMonth();

    if (!organized[year]) {
      organized[year] = Array.from({ length: 12 }, () => []);
    }
    organized[year][month].push(item);
  });

  const years = Object.keys(organized)
    .map(Number)
    .sort((a, b) => a - b);

  if (!years.length) {
    return { organized, defaultYear: null as number | null };
  }

  const currentYear = new Date().getFullYear();
  const defaultYear = years.includes(currentYear) ? currentYear : years[0];

  return { organized, defaultYear };
};

const quarterStartFromMonth = (m: number) => Math.floor(m / 3) * 3;

export const getDefaultExpandedMonth = (items: KeyDatesFieldsFragment[]) => {
  const { organized, defaultYear } = organizeByYearMonth(items ?? []);
  if (defaultYear === null) return null;

  const y = defaultYear.toString();
  const currentMonth = new Date().getMonth();
  const start = quarterStartFromMonth(currentMonth);

  const months = organized[y] ?? Array.from({ length: 12 }, () => []);
  const withinWindow = [start, start + 1, start + 2].filter((m) => m <= 11);
  const firstWithEvents = withinWindow.find((m) => (months[m]?.length ?? 0) > 0);
  const expand = firstWithEvents ?? start;

  return `${y}-${expand}`;
};

