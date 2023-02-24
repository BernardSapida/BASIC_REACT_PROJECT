import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

interface Expense {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

const App = () => {
  const data: Expense[] = [
    {
      id: Date.now() - 1,
      title: "Car Insurance",
      amount: 450_000,
      date: new Date(2023, 1, 17),
    },
  ];

  const [expenses, setExpenses] = useState(data);

  const addNewExpense = (expense: Expense) => {
    setExpenses((previousExpenses: Expense[]) => {
      console.log([...previousExpenses, expense]);
      return [...previousExpenses, expense];
    });
  };

  return (
    <div className="my-5 container">
      <NewExpense newExpense={addNewExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
