"use client";
import { KeyDatesFieldsFragment } from "@/graphql/generated/graphql";
import TwoColumnLayout from "@/layouts/two-column-layout";
import { useState } from "react";
import HighlightedKeyDates from "./HighlightedKeyDates";
import UpcomingKeyDates from "./UpcomingKeyDates";

interface props {
  keyDates: KeyDatesFieldsFragment[];
  highlightedDates: KeyDatesFieldsFragment[];
}
const UpcomingKeyDatesSection = ({ keyDates, highlightedDates }: props) => {
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);

  return (
    <div>
      <h2 className="mb-2 text-center text-[36px] font-bold text-[#2C2B4B]">
        Key Dates
      </h2>

      <TwoColumnLayout
        sidebar={
          <HighlightedKeyDates
            expandedMonth={expandedMonth}
            data={highlightedDates}
          />
        }
      >
        <UpcomingKeyDates
          expandedMonth={expandedMonth}
          setExpandedMonth={setExpandedMonth}
          keyDates={keyDates}
        />
      </TwoColumnLayout>
    </div>
  );
};

export default UpcomingKeyDatesSection;
