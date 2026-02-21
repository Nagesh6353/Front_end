import React, { useState } from 'react'
import Header from '../../coman/Header';

function Task1() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <Header />
      <div className="container text-center">
        <h1 className='text-center my-5'>React Hooks</h1>
        <h2>Task 1 :- Counter App</h2>

        <h3 className="my-3">{count}</h3>

        <button
          className="btn btn-primary me-2"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
      </div>


    </div>
  );
}

export default Task1