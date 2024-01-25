import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Seafoods(products) {
  // Displaying only the first 3 seafood products
  const seafoodCards = products.slice(0, 3);

  return (                                                                    
    <section className='w-4/5 m-auto py-8 flex flex-col gap-y-4'>
      {/* Section title for seafood products */}
      <h2 className='font-semibold'>Seafood products</h2>
      {/* Subtitle emphasizing availability */}
      <h3 className='text-5xl font-bold'>Open 24 / 7 / 365</h3>
      
      {/* Grid layout for displaying seafood products */}
      <aside className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4'>
        {seafoodCards.map((seafood, index) => (
          <div key={index} className='text-center'>
            {/* Link to individual seafood details page */}
            <Link href={`/seafoods/${seafood.name}`}>
              {/* Image of the seafood product */}
              <Image
                src={`/images/${seafood.name}.jpg`}
                alt={seafood.name}
                width={400}
                height={500}
                className='h-[400px] rounded-md'
              />
            </Link>
            {/* Displaying seafood name */}
            <h2 className='capitalize'>{seafood.name}</h2>
            {/* Displaying seafood price */}
            <h2>&#8358;{seafood.price}</h2>
            {/* Button to view details */}
            <Link href='/'>
              <button className='bg-[#3498db] rounded-md px-5 py-2 hover:bg-black hover:text-white'>
                Details
              </button>
            </Link>
          </div>
        ))}
      </aside>

      {/* Button to navigate to the shop page */}
      {/* This button occurs outside the map loop to prevent the occurrence of multiple buttons */}
      <Link href='/shop'>
        <button className='text-center w-1/4 m-auto block bg-slate-900 hover:bg-[#3498db] text-white rounded-md p-3 mt-5'>
          <span>Checkout our seafood</span>
        </button>
      </Link>
    </section>
  );
}

// Explanation:

// This React functional component, Seafoods, receives a prop products with a specified structure using TypeScript.
// It renders a section with a title, a subtitle, and a grid of seafood cards, each linking to a details page.
// The button to checkout seafood is placed outside the map loop to prevent multiple buttons from being generated.
