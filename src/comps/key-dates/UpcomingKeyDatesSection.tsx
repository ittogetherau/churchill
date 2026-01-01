"use client";
import { KeyDatesFieldsFragment } from "@/graphql/generated/graphql";
import { useState } from "react";
import UpcomingKeyDates from "./UpcomingKeyDates";
import TwoColumnLayout from "@/layouts/two-column-layout";
import HighlightedKeyDates from "./HighlightedKeyDates";

interface props {
  keyDates: KeyDatesFieldsFragment[];
  highlightedDates: KeyDatesFieldsFragment[];
}
const UpcomingKeyDatesSection = ({ keyDates, highlightedDates }: props) => {
  const [expandedMonth, setExpandedMonth] = useState<string | null>(null);

  return (
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
  );
};

export default UpcomingKeyDatesSection;
