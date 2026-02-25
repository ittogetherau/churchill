import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KeyDatesFieldsFragment } from "@/graphql/generated/graphql";
import KeyDatesCard from "./key-dates-card";

interface Props {
  expandedMonth: string | null; // "YYYY-M" (0-based month)
  data: KeyDatesFieldsFragment[];
}

const parseYearMonth = (value: string) => {
  const [yearStr, monthStr] = value.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr); // 0-based
  if (Number.isNaN(year) || Number.isNaN(month)) return null;
  return { year, month };
};

const startOfMonth = (year: number, month: number) =>
  new Date(year, month, 1, 0, 0, 0, 0);

const endOfMonth = (year: number, month: number) =>
  new Date(year, month + 1, 0, 23, 59, 59, 999);

const HighlightedKeyDates = ({ data, expandedMonth }: Props) => {
  if (!data?.length) return null;

  if (!expandedMonth) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Highlights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="">Please select a month to continue.</p>
        </CardContent>
      </Card>
    );
  }

  const ym = parseYearMonth(expandedMonth);
  if (!ym) return null;

  const from = startOfMonth(ym.year, ym.month);
  const to = endOfMonth(ym.year, ym.month);

  const currentMonthHighlights = data
    .filter((el) => {
      if (!el?.start_date) return false;

      const sd = new Date(el.start_date);
      const ed = el?.end_date ? new Date(el.end_date) : sd;

      return sd <= to && ed >= from;
    })
    .sort((a, b) => {
      const ta = a?.start_date
        ? new Date(a.start_date).getTime()
        : Number.POSITIVE_INFINITY;
      const tb = b?.start_date
        ? new Date(b.start_date).getTime()
        : Number.POSITIVE_INFINITY;
      return ta - tb;
    });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Highlights</CardTitle>
      </CardHeader>
      <CardContent>
        {!currentMonthHighlights.length ? (
          <p className="">No highlights for selected month.</p>
        ) : (
          <div className="space-y-3">
            {currentMonthHighlights.map((item) => (
              <KeyDatesCard
                key={item?.id ?? `${item?.title}-${item?.start_date}`}
                title={`${item?.title}`}
                description={""}
                start_date={item?.start_date ?? ""}
                end_date={item?.end_date ?? ""}
                variant="small"
                tags={item.tags}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HighlightedKeyDates;
