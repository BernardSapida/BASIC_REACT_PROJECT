import ExpenseForm from "./ExpenseForm";

function NewExpense(props: any) {
  const saveNewExpense = (inputs: any) => {
    const newExpense = { id: Date.now(), ...inputs };

    props.newExpense(newExpense);
  };

  return (
    <div>
      <ExpenseForm submitForm={saveNewExpense} />
    </div>
  );
}

export default NewExpense;
