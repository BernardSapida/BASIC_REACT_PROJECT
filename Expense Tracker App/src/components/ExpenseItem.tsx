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
        <div className="ms-3">
          <p className="fs-3">{props.title}</p>
        </div>
      </div>
      <div className="">
        <p className="fs-3">
          <span className="badge bg-danger">Php {props.amount}</span>
        </p>
      </div>
    </div>
  );
};

export default ExpenseItem;
