import ExpenseItem from "./ExpenseItem";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

function ExpensesList(props: any) {
  return (
    <div>
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
}

export default ExpensesList;
