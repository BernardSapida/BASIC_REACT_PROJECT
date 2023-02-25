import ExpenseItem from "./ExpenseItem";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

function ExpensesList(props: any) {
  const expenseList =
    props.items.length > 0 ? (
      props.items.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    ) : (
      <p className="text-center">No expense record for this year!</p>
    );
  return <div>{expenseList}</div>;
}

export default ExpensesList;
