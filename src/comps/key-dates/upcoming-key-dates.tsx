"use client";
import { Button } from "@/components/ui/button";
import { KeyDatesFieldsFragment } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import KeyDatesCard from "./key-dates-card";
import DataNotFound from "@/components/globals/data-not-found";
import { getDefaultExpandedMonth, organizeByYearMonth } from "./utils";

const monthsList = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

const quarterStartFromMonth = (m: number) => Math.floor(m / 3) * 3;

const UpcomingKeyDates = ({
  expandedMonth,
  setExpandedMonth,
  keyDates,
}: {
  expandedMonth: string | null;
  setExpandedMonth: (prev: any) => void;
  keyDates: KeyDatesFieldsFragment[];
}) => {
  const { organized, defaultYear } = useMemo(
    () => organizeByYearMonth(keyDates ?? []),
    [keyDates],
  );

  const defaultExpandedMonth = useMemo(
    () => getDefaultExpandedMonth(keyDates),
    [keyDates],
  );

  const effectiveExpandedMonth = expandedMonth ?? defaultExpandedMonth;

  const [selectedYear, setSelectedYear] = useState<string | null>(() =>
    defaultYear === null ? null : defaultYear.toString(),
  );
  const [monthWindowStart, setMonthWindowStart] = useState<number>(() =>
    defaultYear === null ? 0 : quarterStartFromMonth(new Date().getMonth()),
  );

  const yearsSorted = useMemo(
    () => Object.keys(organized).sort((a, b) => Number(a) - Number(b)),
    [organized],
  );

  const hasData = selectedYear && Object.keys(organized).length > 0;

  const windowMonths = useMemo(() => {
    const start = clamp(monthWindowStart, 0, 9);
    return [start, start + 1, start + 2];
  }, [monthWindowStart]);

  const canPrev = monthWindowStart > 0;
  const canNext = monthWindowStart < 9;

  const toggleMonth = (year: string, month: number) => {
    const key = `${year}-${month}`;
    setExpandedMonth((prev: any) => (prev === key ? null : key));
  };

  const onSelectYear = (year: string) => {
    setSelectedYear(year);

    setMonthWindowStart(0);

    const months = organized[year] ?? Array.from({ length: 12 }, () => []);
    const firstWithEvents = [0, 1, 2].find((m) => (months[m]?.length ?? 0) > 0);
    const expand = firstWithEvents ?? 0;
    setExpandedMonth(`${year}-${expand}`);
  };

  const prevWindow = () => {
    const next = clamp(monthWindowStart - 3, 0, 9);
    setMonthWindowStart(next);
    if (selectedYear) setExpandedMonth(`${selectedYear}-${next}`);
  };

  const nextWindow = () => {
    const next = clamp(monthWindowStart + 3, 0, 9);
    setMonthWindowStart(next);
    if (selectedYear) setExpandedMonth(`${selectedYear}-${next}`);
  };

  if (!hasData) {
    return (
      <div className="md:mx-auto md:w-2/3">
        <DataNotFound />
      </div>
    );
  }

  return (
    <ContainerLayout>
      <>
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {yearsSorted.map((year) => (
            <button
              key={year}
              onClick={() => onSelectYear(year)}
              className={`rounded-full border px-4 py-2 font-bold transition-all ${
                selectedYear === year
                  ? "bg-primary-orange border-primary-orange text-white"
                  : "text-primary-orange border-primary-orange bg-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {selectedYear && (
          <>
            <div className="mb-4 flex items-center justify-between gap-3">
              <Button
                size={"sm"}
                className="py-5 text-sm"
                onClick={prevWindow}
                disabled={!canPrev}
              >
                <ChevronLeft /> Previous
              </Button>

              <div className="text-sm font-semibold text-gray-600">
                {monthsList[windowMonths[0]]}-{monthsList[windowMonths[1]]}-
                {monthsList[windowMonths[2]]}
              </div>

              <Button
                size={"sm"}
                className="py-5 text-sm"
                onClick={nextWindow}
                disabled={!canNext}
              >
                Next <ChevronRight />
              </Button>
            </div>

            <div className="flex flex-col gap-4">
              {windowMonths.map((month) => {
                const isActive =
                  effectiveExpandedMonth === `${selectedYear}-${month}`;
                const events = organized[selectedYear]?.[month] || [];

                return (
                  <div key={month} className="flex flex-col gap-2">
                    <div
                      className={`flex w-full cursor-pointer items-center justify-between rounded-md border px-4 py-2 font-bold transition-all ${
                        isActive
                          ? "bg-primary-orange text-white"
                          : "border-primary-orange"
                      }`}
                      onClick={() => toggleMonth(selectedYear, month)}
                    >
                      <span className="flex items-center gap-2">
                        {monthsList[month]}
                        <span className="lg:text-primary-orange lg:bg-primary-orange/10 rounded-full bg-white/20 px-2 py-1 text-xs font-normal text-white">
                          {events.length}
                        </span>
                      </span>
                      <i
                        className={`fi flex fi-br-${
                          isActive ? "minus" : "plus"
                        } ml-2`}
                      ></i>
                    </div>

                    {isActive && (
                      <div className="space-y-4">
                        {events.length > 0 ? (
                          events.map((item) => (
                            <KeyDatesCard
                              key={
                                item?.id ?? `${item?.title}-${item?.start_date}`
                              }
                              title={`${item?.title}`}
                              description={""}
                              start_date={item?.start_date ?? ""}
                              end_date={item?.end_date ?? ""}
                              tags={item.tags}
                            />
                          ))
                        ) : (
                          <p className="pl-2 text-sm text-gray-500 italic">
                            No events in this month.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    </ContainerLayout>
  );
};

export default UpcomingKeyDates;
