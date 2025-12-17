"use client";
import { KeyDatesCard } from "@/components/cards";
import DataNotFound from "@/components/globals/DataNotFound";
import { type KeyDatesFieldsFragment } from "@/graphql/generated/graphql";
import ContainerLayout from "@/layouts/container-layout";
import Link from "next/link";
import { useEffect, useState } from "react";

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

type OrganizedData = Record<string, KeyDatesFieldsFragment[][]>;

const organizeByYearMonth = (items: KeyDatesFieldsFragment[]) => {
  const organized: OrganizedData = {};
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

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
    return { organized, defaultYear: null, defaultMonth: null };
  }

  const defaultYear = years.includes(currentYear) ? currentYear : years[0];

  let defaultMonth = currentMonth;
  const hasEventsThisMonth = organized[defaultYear]?.[currentMonth]?.length > 0;
  if (!hasEventsThisMonth) {
    const foundMonth = organized[defaultYear].findIndex((m) => m.length > 0);
    defaultMonth = foundMonth >= 0 ? foundMonth : 0;
  }

  return { organized, defaultYear, defaultMonth };
};

const UpcomingKeyDates = ({
  keyDates,
}: {
  keyDates: KeyDatesFieldsFragment[];
}) => {
  const [data, setData] = useState<OrganizedData>({});
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  useEffect(() => {
    const { organized, defaultYear, defaultMonth } = organizeByYearMonth(
      keyDates ?? [],
    );
    setData(organized);
    if (defaultYear !== null && defaultMonth !== null) {
      setSelectedYear(defaultYear.toString());
      setExpandedMonth(`${defaultYear}-${defaultMonth}`);
    } else {
      setSelectedYear(null);
      setExpandedMonth(null);
    }
  }, [keyDates]);

  const toggleMonth = (year: string, month: number) => {
    const key = `${year}-${month}`;
    setExpandedMonth((prev) => (prev === key ? null : key));
  };

  const hasData = selectedYear && Object.keys(data).length > 0;

  if (!hasData) {
    return (
      <div className="md:mx-auto md:w-2/3">
        <DataNotFound />
      </div>
    );
  }

  return (
    <ContainerLayout>
      <h2 className="mx-auto text-center text-[36px] font-bold text-[#2C2B4B]">
        Key Dates
      </h2>

      <div>
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {Object.keys(data)
            .sort((a, b) => Number(a) - Number(b))
            .map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
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

        {/* Months & Events */}
        {selectedYear && (
          <div className="flex flex-col gap-4">
            {[...Array(12).keys()].map((month) => {
              const isActive = expandedMonth === `${selectedYear}-${month}`;
              const events = data[selectedYear][month] || [];

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
                    <div className="flex flex-col gap-4">
                      {events.length > 0 ? (
                        <>
                          {events.map((item) => (
                            <KeyDatesCard
                              key={
                                item?.id ?? `${item?.title}-${item?.start_date}`
                              }
                              title={`${item?.title}`}
                              description={""}
                              start_date={item?.start_date ?? ""}
                              end_date={item?.end_date ?? ""}
                              category={[]}
                              audience={[]}
                            />
                          ))}

                          {selectedYear === "2026" && month === 1 && (
                            <p className="pl-2 text-sm italic">
                              *This is an indicative timeframe only based on the
                              Department of{" "}
                              <Link
                                href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-processing-times/global-visa-processing-times"
                                className="text-primary-orange hover:underline"
                              >
                                Home Affairs website (visa processing times)
                              </Link>{" "}
                              that is subject to change / may increase or
                              decrease, at any time, without notice. Churchill
                              institute has no authority / influence over
                              student visa application assessment times and
                              outcomes.
                            </p>
                          )}
                        </>
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
        )}
      </div>
    </ContainerLayout>
  );
};

export default UpcomingKeyDates;
