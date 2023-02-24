import { FormEvent, useState } from "react";

function ExpenseForm(props: any) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const processForm = (event: any) => {
    event.preventDefault();

    const inputs = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    setTitle("");
    setAmount("");
    setDate("");

    props.submitForm(inputs);
  };

  const updateTitle = (event: any) => setTitle(event.target.value);
  const updateAmount = (event: any) => setAmount(event.target.value);
  const updateDate = (event: any) => setDate(event.target.value);

  return (
    <div className="p-3 rounded border bg-white">
      <form onSubmit={processForm}>
        <div className="w-100">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={updateTitle}
            value={title}
          />
        </div>
        <div className="w-100">
          <label htmlFor="amount" className="col-sm-2 col-form-label">
            Amount
          </label>
          <input
            type="number"
            className="form-control"
            id="amount"
            min={0}
            step={0.1}
            onChange={updateAmount}
            value={amount}
          />
        </div>
        <div className="w-100">
          <label htmlFor="date" className="col-sm-2 col-form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            onChange={updateDate}
            value={date}
          />
        </div>
        <button type="submit" className="mt-3 btn btn-primary d-block ms-auto">
          Add new expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;
