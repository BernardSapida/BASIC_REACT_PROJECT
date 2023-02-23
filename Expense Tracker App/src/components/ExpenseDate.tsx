interface ExpenseDate {
  date: Date;
}

const ExpenseDate = (props: ExpenseDate) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div
      className="p-3 rounded bg-dark col-auto text-light"
      style={{ width: "100px" }}
    >
      <p className="m-0 lh-sm text-center fw-semibold fs-6">{month}</p>
      <p className="m-0 lh-sm text-center fw-semibold fs-3">{day}</p>
      <p className="m-0 lh-sm text-center fs-6">{year}</p>
    </div>
  );
};

export default ExpenseDate;
