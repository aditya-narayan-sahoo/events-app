import { useRef } from "react";
import Button from "../ui/button";
import styles from "./events-search.module.css";
const EventsSearch = (props) => {
  const yearInput = useRef();
  const monthInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedYear = yearInput.current.value;
    const selectedMonth = monthInput.current.value;
    props.onSearch(selectedYear, selectedMonth);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInput}>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInput}>
            <option value="01">January</option>
            <option value="02">February</option>
            <option value="03">March</option>
            <option value="04">April</option>
            <option value="05">May</option>
            <option value="06">June</option>
            <option value="07">July</option>
            <option value="08">August</option>
            <option value="09">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
};
export default EventsSearch;
