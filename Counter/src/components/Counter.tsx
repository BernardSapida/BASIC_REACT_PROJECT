import { useSelector, useDispatch } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector(
    (state: Record<string, any>) => state.counter.count
  );
  const show = useSelector(
    (state: Record<string, any>) => state.counter.showCounter
  );

  const incrementHandler = () => dispatch(counterActions.increment());
  const decrementHandler = () => dispatch(counterActions.decrement());
  const toggleCounterHandler = () => dispatch(counterActions.showCounter());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{show && counter}</div>
      <div>
        <button className={classes.btnDecrement} onClick={decrementHandler}>
          Decrement
        </button>
        <button className={classes.btnIncrement} onClick={incrementHandler}>
          Increment
        </button>
      </div>
      <button className={classes.btn} onClick={toggleCounterHandler}>
        Toggle Counter
      </button>
    </main>
  );
};

export default Counter;
