import ExpenseItem from "./ExpenseItem";
import Filter from "./Filter";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

const Expenses = (props: any) => {
  return (
    <div className="my-5">
      <Filter />
      {props.items.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
