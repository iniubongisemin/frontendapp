import React, { useState } from 'react';
import Link from 'next/link';

// SignInForm component for user sign-in
export default function SignInForm() {

  // State to manage input values
  const [inputVal, setInputVal] = useState('');
  const [inputValue, setInputValue] = useState('');
  
  // Event handler for updating 'inputVal' state
  const handleChang = (evt) => {
    setInputVal(evt.target.value);
  }

  // Event handler for updating 'inputValue' state
  const handleChange = (evt) => {
    setInputValue(evt.target.value);
  }

  return (
    <div>
      {/* Stylish container for the sign-in form */}
      <div className="relative top-20 mx-auto mb-[291px] bg-slate-950 w-[50%] p-5 rounded-md">
        {/* Sign-in title */}
        <p className='text-3xl font-bold'>Sign In</p>

        {/* Form for entering name */}
        <p>Name</p>
        <form>        
          <input 
            type="text" 
            value={inputVal} 
            onChange={handleChang} 
            placeholder='Enter your name' 
            className='hover:border-[#3498db] w-[100%] h-[35px] rounded-sm'
          />        
        </form>

        {/* Form for entering email address */}
        <p>Email Address</p>
        <form>
          <input 
            type="email" 
            value={inputValue} 
            onChange={handleChange} 
            placeholder='Enter your email address' 
            className='hover:border-[#3498db] w-[100%] h-[35px] rounded-sm'
          />
        </form>

        {/* Link to home page with a submit button */}
        <Link href={`/`}>
          <button type="submit" className='font-bold bg-[#3498db] rounded-md px-7 py-2 my-4 hover:text-white '>Submit</button>
        </Link>
      </div>
    </div>
  );
}


// Explanation:

// The SignInForm component is a form for user sign-in with fields for name and email.
// State variables (inputVal and inputValue) are used to manage the input values for name and email, respectively.
// Two separate form elements are used for each input field.
// Event handlers (handleChang and handleChange) update the corresponding state when the input values change.
// Styling classes are applied for proper layout and appearance.
// A Link from Next.js is used to create a link to the home page (/). The submit button is wrapped in this link.
// The submit button has styling for appearance and hover effects.
