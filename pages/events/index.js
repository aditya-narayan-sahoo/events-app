import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const AllEventsPage = () => {
  const allEvents = getAllEvents();

  const router = useRouter();

  const handlFindEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <>
      <EventsSearch onSearch={handlFindEvents} />
      <EventList items={allEvents} />
    </>
  );
};

export default AllEventsPage;
