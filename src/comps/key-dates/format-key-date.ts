const monthArray = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ordinal = (n: number) => {
  if (n % 100 >= 11 && n % 100 <= 13) return `${n}th`;
  switch (n % 10) {
    case 1:
      return `${n}st`;
    case 2:
      return `${n}nd`;
    case 3:
      return `${n}rd`;
    default:
      return `${n}th`;
  }
};

export const formatKeyDate = (
  startDateStr: string,
  endDateStr?: string | null
) => {
  const start = new Date(startDateStr);
  const end = endDateStr ? new Date(endDateStr) : null;

  const nowYear = new Date().getFullYear();

  const sDay = start.getDate();
  const sMonthIdx = start.getMonth();
  const sYear = start.getFullYear();

  const sDayFmt = ordinal(sDay);
  const sMonth = monthArray[sMonthIdx];

  // no end date
  if (!end) {
    return sYear === nowYear
      ? `${sDayFmt} ${sMonth}`
      : `${sDayFmt} ${sMonth} ${sYear}`;
  }

  const eDay = end.getDate();
  const eMonthIdx = end.getMonth();
  const eYear = end.getFullYear();

  // same exact day
  if (sDay === eDay && sMonthIdx === eMonthIdx && sYear === eYear) {
    return sYear === nowYear
      ? `${sDayFmt} ${sMonth}`
      : `${sDayFmt} ${sMonth} ${sYear}`;
  }

  const eDayFmt = ordinal(eDay);
  const eMonth = monthArray[eMonthIdx];

  // same year, same month
  if (sYear === eYear && sMonthIdx === eMonthIdx) {
    return `${sDayFmt}–${eDayFmt} ${sMonth}`;
  }

  // same year, different month
  if (sYear === eYear) {
    return `${sDayFmt} ${sMonth} – ${eDayFmt} ${eMonth}`;
  }

  // different years
  return `${sDayFmt} ${sMonth} ${sYear} – ${eDayFmt} ${eMonth} ${eYear}`;
};
