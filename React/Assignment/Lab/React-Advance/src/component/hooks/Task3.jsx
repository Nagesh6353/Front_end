import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/counterSlice";
import Header from "../../coman/Header";

function Task3() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <Header />
            <div className="container text-center mt-5">
                <h2>Task 3 :- Redux Counter</h2>

                <h3 className="my-3">{count}</h3>

                <button
                    className="btn btn-primary me-2"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>

                <button
                    className="btn btn-secondary"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Task3;