import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./features/counterSlice";
import Crud from "./Crud";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="container text-center mt-5">
      <h2>Task 1 :- Redux Counter</h2>

      <h3 className="my-3">{count}</h3>

      <button
        className="btn btn-success me-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>

      <button
        className="btn btn-danger"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <hr className="my-5" />

      <Crud />
    </div>
  );
}

export default App;