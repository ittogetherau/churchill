"use client";
import { useEffect, useState } from "react";
import { FetchUpcomingKeyDate } from "@/components/utils/apiQueries";
import Spiner from "@/components/spiner";
import DataNotFound from "@/components/globals/DataNotFound";
import { KeyDatesCard } from "@/components/cards";

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

const UpcomingKeyDates = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [expandedMonth, setExpandedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);

  useEffect(() => {
    FetchUpcomingKeyDate()
      .then((res) => {
        if (!res.data || res.data.length === 0) {
          setNoDataFound(true);
          setIsLoading(false);
          return;
        }

        const organizedData = {};
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();

        res.data.forEach((item) => {
          const eventDate = new Date(item.start_date);
          const year = eventDate.getFullYear();
          const month = eventDate.getMonth();

          if (!organizedData[year]) {
            organizedData[year] = Array.from({ length: 12 }, () => []);
          }

          organizedData[year][month].push(item);
        });

        setData(organizedData);

        const years = Object.keys(organizedData)
          .map(Number)
          .sort((a, b) => a - b);

        // Determine the default year
        let defaultYear = years.includes(currentYear) ? currentYear : years[0];

        // Determine the default month
        let defaultMonth = currentMonth;
        const hasEventsThisMonth =
          organizedData[defaultYear]?.[currentMonth]?.length > 0;

        if (!hasEventsThisMonth) {
          // find the first month with events
          const foundMonth = organizedData[defaultYear].findIndex(
            (m) => m.length > 0
          );
          defaultMonth = foundMonth >= 0 ? foundMonth : 0;
        }

        setSelectedYear(defaultYear.toString());
        setExpandedMonth(`${defaultYear}-${defaultMonth}`);

        setNoDataFound(years.length === 0);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setNoDataFound(true);
        setIsLoading(false);
      });
  }, []);

  const toggleMonth = (year, month) => {
    const key = `${year}-${month}`;
    setExpandedMonth((prev) => (prev === key ? null : key));
  };

  if (isLoading) return <Spiner />;

  if (noDataFound)
    return (
      <div className="md:w-2/3 md:mx-auto">
        <DataNotFound />
      </div>
    );

  return (
    <div className="flex flex-col gap-[32px] lg:gap-[64px] container mx-auto px-5">
      <h2 className="font-bold text-[36px] text-center mx-auto text-[#2C2B4B]">
        Key Dates
      </h2>

      <div>
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          {Object.keys(data)
            .sort((a, b) => a - b)
            .map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full font-bold border transition-all ${
                  selectedYear === year
                    ? "bg-primary-orange text-white border-primary-orange"
                    : "bg-white text-primary-orange border-primary-orange"
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
                    className={`w-full cursor-pointer px-4 py-2 rounded-md font-bold flex items-center justify-between border transition-all ${
                      isActive
                        ? "bg-primary-orange text-white"
                        : "border-primary-orange"
                    }`}
                    onClick={() => toggleMonth(selectedYear, month)}
                  >
                    {monthsList[month]}
                    <i
                      className={`flex fi fi-br-${
                        isActive ? "minus" : "plus"
                      } ml-2`}
                    ></i>
                  </div>

                  {isActive && (
                    <div className="flex flex-col gap-4">
                      {events.length > 0 ? (
                        events.map((item) => (
                          <KeyDatesCard
                            key={item.id}
                            title={item?.title}
                            description={item?.description}
                            start_date={item?.start_date}
                            end_date={item?.end_date}
                            category={item?.category}
                            audience={item?.audience}
                            isFullwidth={true}
                          />
                        ))
                      ) : (
                        <p className="text-sm italic text-gray-500 pl-2">
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
    </div>
  );
};

export default UpcomingKeyDates;
