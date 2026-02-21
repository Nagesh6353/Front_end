import { useRef } from "react";
import Header from "../../coman/Header";

function Task4() {
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <Header />
            <div className="container text-center mt-5">
                <h2>Input Focus using useRef</h2>

                <div className="mt-4">
                    <input
                        type="text"
                        ref={inputRef}
                        className="form-control w-50 mx-auto"
                        placeholder="Click button to focus me"
                    />
                </div>

                <button
                    className="btn btn-primary mt-3"
                    onClick={handleFocus}
                >
                    Focus Input
                </button>
            </div>
        </div>
    );
}

export default Task4;