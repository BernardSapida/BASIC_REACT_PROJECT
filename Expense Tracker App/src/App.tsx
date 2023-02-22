import { useState } from "react";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello World!!</h1>
      <ExpenseItem />
    </div>
  );
}

export default App;
