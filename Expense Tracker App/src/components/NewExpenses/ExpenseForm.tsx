import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

function ExpenseForm(props: any) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState<number>(0);
  const [date, setDate] = useState("");

  const [validated, setValidated] = useState(false);
  const [invalidTitle, setInvalidTitle] = useState<boolean>();
  const [invalidAmount, setInvalidAmount] = useState<boolean>();
  const [invalidDate, setInvalidDate] = useState<boolean>();

  const resetState = () => {
    setTitle("");
    setAmount(0);
    setDate("");

    setInvalidTitle(undefined);
    setInvalidAmount(undefined);
    setInvalidDate(undefined);
    setValidated(false);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const form = event.currentTarget;
    const inputs = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    if (form.checkValidity() === false) event.stopPropagation();

    if (!isValidTitle || !isValidAmount || !isValidDate) {
      return setValidated(true);
    }

    props.submitForm(inputs);
    resetState();
  };

  const updateTitle = (event: any) => {
    const inputTitle = event.target.value;

    if (inputTitle.length <= 3) setInvalidTitle(true);
    else setInvalidTitle(false);

    setTitle(inputTitle);
  };

  const updateAmount = (event: any) => {
    const inputAmount = +event.target.value;

    if (inputAmount <= 0) setInvalidAmount(true);
    else setInvalidAmount(false);

    setAmount(inputAmount);
  };

  const updateDate = (event: any) => {
    const inputDate = event.target.value;

    if (inputDate.length == 0) setInvalidDate(true);
    else setInvalidDate(false);

    setDate(event.target.value);
  };

  const isValidTitle = !(
    invalidTitle ||
    invalidTitle == undefined ||
    invalidTitle != false
  );
  const isValidAmount = !(
    invalidAmount ||
    invalidAmount == undefined ||
    invalidAmount != false
  );
  const isValidDate = !(
    invalidDate ||
    invalidDate == undefined ||
    invalidDate != false
  );

  return (
    <div className="p-3 rounded border bg-white">
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="title">Title</Form.Label>
        <InputGroup className="w-100 mb-2" hasValidation={true}>
          <Form.Control
            type="text"
            className="rounded"
            placeholder="Expense title"
            aria-label="Expense title"
            aria-describedby="Expense title"
            onChange={updateTitle}
            value={title}
            isInvalid={validated && !isValidTitle}
            isValid={validated && isValidTitle}
          />
          <Form.Control.Feedback type="invalid">
            Title must be atleast 4 characters long
          </Form.Control.Feedback>
        </InputGroup>

        <label htmlFor="amount">Amount</label>
        <InputGroup className="w-100 mb-2" hasValidation>
          <Form.Control
            type="number"
            className="form-control rounded"
            placeholder="Amount"
            aria-label="Amount"
            aria-describedby="Amount"
            min={0}
            step={0.01}
            onChange={updateAmount}
            value={amount}
            isInvalid={validated && !isValidAmount}
            isValid={validated && isValidAmount}
          />
          <Form.Control.Feedback type="invalid">
            Amount must be a positive number
          </Form.Control.Feedback>
        </InputGroup>

        <label htmlFor="date">Date</label>
        <InputGroup className="w-100 mb-2" hasValidation>
          <Form.Control
            type="date"
            className="form-control"
            aria-label="Date"
            aria-describedby="Date"
            onChange={updateDate}
            value={date}
            isInvalid={validated && !isValidDate}
            isValid={validated && isValidDate}
          />
          <Form.Control.Feedback type="invalid">
            Date is required
          </Form.Control.Feedback>
        </InputGroup>

        <Button
          as="input"
          type="submit"
          variant="primary"
          className="mt-3 d-block ms-auto"
          value="Add new expense"
        />
      </Form>
    </div>
  );
}

export default ExpenseForm;
