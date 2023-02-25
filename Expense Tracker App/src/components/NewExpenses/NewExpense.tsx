import ExpenseForm from "./ExpenseForm";

function NewExpense(props: any) {
  const saveNewExpense = (inputs: any) => {
    const newExpense = { id: Date.now(), ...inputs };

    props.newExpense(newExpense);
  };

  return <ExpenseForm submitForm={saveNewExpense} />;
}

export default NewExpense;
