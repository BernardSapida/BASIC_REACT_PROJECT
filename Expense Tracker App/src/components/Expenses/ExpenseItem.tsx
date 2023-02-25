import ExpenseDate from "./ExpenseDate";

interface Expenses {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: Expenses) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "Php",
    minimumFractionDigits: 2,
  });

  return (
    <div className="my-3 p-2 rounded border d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <ExpenseDate date={props.date} />
        <p className="fs-3 ms-3 my-0">{props.title}</p>
      </div>
      <div>
        <p className="fs-3 m-0">{formatter.format(props.amount)}</p>
      </div>
    </div>
  );
};

export default ExpenseItem;
