"use client"
import React, { useState } from 'react';
import Data from './Data';

// Page component with state for the number
export default function Page() {
  // State for the number, initialized to 100
  const [number, setNumber] = useState(0);

  // Function to increase the number by 10
  function increase() {
    setNumber(number + 1);
  }

  // Function to decrease the number by 5
  function decrease() {
    setNumber(number - 1);
  }

  // JSX rendering of the Page component
  return (
    <div className='m-auto w-1/2 mt-[100] p-[50px]'>
      <p>{number}</p>
      <div className="gap-2 flex flex-row">
        <button className='p-4 bg-green-700 text-white rounded-md' onClick={increase}>Increase</button>
        <button className='p-4 bg-red-700 text-white rounded-md' onClick={decrease}>Decrease</button>
      </div>
      {/* Rendering the Data component */}
      <Data />
    </div>
  );
}

// Explanation:

// The Page component uses the useState hook to manage a piece of state named number with an initial value of 100.
// It defines two functions, increase and decrease, which update the number state accordingly.
// The JSX renders the current value of number, two buttons to increase and decrease the number, and includes the Data component.
// The Data component is presumably responsible for rendering data based on the value of number, but its implementation is not provided in the code snippet.