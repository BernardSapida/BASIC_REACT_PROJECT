import ExpenseDate from "./ExpenseDate";

interface Expenses {
  title: string;
  amount: number;
  date: Date;
}

const ExpenseItem = (props: Expenses) => {
  return (
    <div className="my-3 p-2 rounded border d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <ExpenseDate date={props.date} />
        <p className="fs-3 ms-3 my-0">{props.title}</p>
      </div>
      <div style={{ width: "150px" }}>
        <p className="fs-3 m-0">Php {props.amount}</p>
        <button type="button" className="btn btn-primary m-0 lh-1">
          Change Title
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
