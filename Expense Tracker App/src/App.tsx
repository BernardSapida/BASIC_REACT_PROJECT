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
  const data: Expense[] = [];

  const [expenses, setExpenses] = useState(data);

  const addNewExpense = (expense: Expense) => {
    setExpenses((previousExpenses: Expense[]) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div className="my-5 container">
      <h1 className="text-center mb-3">Expense Tracker App</h1>
      <NewExpense newExpense={addNewExpense} />
      <hr />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
