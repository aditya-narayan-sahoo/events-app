import EventList from "@/components/events/event-list";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterdData = router.query.slug;
  if (!filterdData) {
    return <p className="center">Loading...</p>;
  }
  const filteredYear = filterdData[0];
  const filteredMonth = filterdData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2023 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p>Invalid Filter. Please adjust your values</p>;
  }
  const filterdEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filterdEvents || filterdEvents.length === 0) {
    return <p>No events found for the chosen filter!</p>;
  }

  return (
    <div>
      <EventList items={filterdEvents} />
    </div>
  );
};

export default FilteredEventsPage;
