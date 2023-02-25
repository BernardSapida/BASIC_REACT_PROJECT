import ExpensesBar from "./ExpensesBar";

function ExpensesFilter(props: any) {
  const updateDate = (event: any) => {
    const filteredYear = event.target.value;
    props.setFilteredYear(filteredYear);
  };

  return (
    <>
      <div
        className="mb-3 mx-auto"
        style={{ maxWidth: "800px", width: "100%" }}
      >
        <label htmlFor="year" className="mb-2">
          Filter expenses by year:
        </label>
        <select className="form-control" id="year" onChange={updateDate}>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <ExpensesBar items={props.items} />
    </>
  );
}

export default ExpensesFilter;
