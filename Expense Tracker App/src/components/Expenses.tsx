import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 450_000,
      date: new Date(2023, 1, 17),
    },
    {
      title: "House Insurance",
      amount: 550_000,
      date: new Date(2023, 2, 18),
    },
    {
      title: "Toilet Paper",
      amount: 100,
      date: new Date(2023, 3, 19),
    },
    {
      title: "School Materials",
      amount: 1_000,
      date: new Date(2023, 4, 20),
    },
    {
      title: "Tuition Fee",
      amount: 50_000,
      date: new Date(2023, 11, 21),
    },
  ];

  return (
    <div className="container">
      <h1 className="text-danger">Expense Tracker:</h1>
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Expenses;
