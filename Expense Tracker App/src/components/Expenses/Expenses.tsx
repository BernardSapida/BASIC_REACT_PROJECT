import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesChart/ExpensesFilter";

const Expenses = (props: any) => {
  const [year, setYear] = useState(2020);

  let filteredExpenses = props.items.filter(
    (item: any) => item.date.getFullYear() == year
  );

  const filteredList = (filterYear: any) => {
    setYear(filterYear);
    filteredExpenses = props.items.filter(
      (item: any) => item.date.getFullYear() == filterYear
    );
  };

  return (
    <>
      <ExpensesFilter items={filteredExpenses} setFilteredYear={filteredList} />
      <hr />
      <ExpensesList items={filteredExpenses} />
    </>
  );
};

export default Expenses;
