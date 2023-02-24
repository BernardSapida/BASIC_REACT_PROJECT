import { useState } from "react";
import ExpenseBar from "./ExpenseBar";

function ExpenseFilter(props: any) {
  const [date, setDate] = useState("");

  const updateDate = (event: any) => {
    setDate(event.target.value);
    props.date = date;
  };

  return (
    <div>
      <div
        className="mb-3 mx-auto"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <label htmlFor="year" className="col-sm-2 col-form-label">
          Year
        </label>
        <select className="form-control" id="year" onChange={updateDate}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <ExpenseBar />
    </div>
  );
}

export default ExpenseFilter;
