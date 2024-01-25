'use client'
import React, { useState, ChangeEvent } from 'react'

// Sample seafood data
const seafoods = [
  {
    name: "crayfish",
    type: "crayfish",
    description: "Delicious, small crustaceans that add a mouthwatering aroma and flavor to dishes.",
    id: 1,
    price: 5000
  },
  {
    name: "scallops",
    type: "scallops",
    description: "Fresh and flavorful scallops, a seafood delicacy.",
    id: 2,
    price: 7500
  },
  {
    name: "african_lobster",
    type: "lobsters",
    description: "Indulge in succulent African Lobster, a delicacy for any occasion.",
    id: 3,
    price: 8500
  },
  {
    name: "barracuda",
    type: "fish",
    description: "Tender and fresh Barracuda, perfect for grilling enthusiasts.",
    id: 4,
    price: 5500
  },
  {
    name: "oysters",
    type: "oysters",
    description: "Briny and refreshing fresh oysters, ideal for raw seafood enthusiasts.",
    id: 5,
    price: 9500
  },
  {
    name: "tiger_prawns",
    type: "prawns",
    description: "Succulent Tiger Prawns, can be marinated in garlic and butter, ready to cook.",
    id: 6,
    price: 10000
  },
  {
    name: "mud_crabs",
    type: "crabs",
    description: "Premium mud crab meat and spices.",
    id: 7,
    price: 7000
  },
  {
    name: "tilapia",
    type: "fish",
    description: "Rich and smoky Tilapia fillets, perfect for appetizers and salads.",
    id: 8,
    price: 5000
  },
  {
    name: "river_prawns",
    type: "prawns",
    description: "Spicy Cajun-style River Prawns, a flavorful seafood experience.",
    id: 9,
    price: 6000
  },
  {
    name: "ring_squid",
    type: "squids",
    description: "Tender Ring Squid can be cooked in a delectable white wine and garlic sauce.",
    id: 10,
    price: 8000
  },
  {
    name: "blue_swimmer_crab",
    type: "crabs",
    description: "Delicious Blue Swimmer Crab, perfect for seafood lovers.",
    id: 11,
    price: 6500
  },
  {
    name: "rock_crab",
    type: "crabs",
    description: "Hard-shelled Rock Crab, known for its sweet and tender meat.",
    id: 12,
    price: 7200
  },
  {
    name: "crawfish",
    type: "crawfish",
    description: "Small, freshwater crustaceans similar to small lobsters, often used in stews and soups.",
    id: 13,
    price: 5200
  },
  {
    name: "trout",
    type: "fish",
    description: "Freshwater fish known for its delicate flavor and tender flesh.",
    id: 14,
    price: 5800
  },
  {
    name: "croaker",
    type: "fish",
    description: "Silver-skinned fish with a mild, sweet flavor, often used in soups and stews.",
    id: 15,
    price: 9000
  },
  {
    name: "giant_snail",
    type: "snail",
    description: "Tender Giant Snail, ideal for grilling or adding to soups.",
    id: 16,
    price: 7500
  },
  {
    name: "catfish",
    type: "fish",
    description: "Freshwater fish known for its rich, fatty flesh, commonly used in Nigerian cuisine.",
    id: 17,
    price: 5500
  },
  {
    name: "tiger_prawns",
    type: "prawns",
    description: "Juicy Prawns perfect for cooking in a mouthwatering garlic butter sauce.",
    id: 18,
    price: 8500
  },
  {
    name: "rainbow_tilapia",
    type: "fish",
    description: "Delicate Rainbow Tilapia fillet, perfect for baking or grilling.",
    id: 19,
    price: 6500
  },
  {
    name: "african_squid_ink",
    type: "seafood_ink",
    description: "Exquisite African Squid Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
    id: 20,
    price: 9500
  },
  {
    name: "cuttlefish_ink",
    type: "seafood_ink",
    description: "Exquisite cuttlefish Ink perfect for cooking gastronomic Pasta!, creating a unique and flavorful dish.",
    id: 21,
    price: 9500
  }
];

export default function Data() {
    // State to manage the search input value
    const [seafood, setSeafood] = useState('');

    // Filter seafoods based on search input
    const seafoodFilter = seafoods.filter(seaf =>
        seaf.name.toLowerCase().includes(seafood.toLowerCase()) ||
        seaf.description.toLowerCase().includes(seafood) ||
        seaf.price.toString().includes(seafood)
    );

    // JSX for displaying filtered seafoods or a message if none found
    const seafoodFilters = seafoodFilter.length === 0 ? (
        <h2>Please fill in a valid product name</h2>
    ) : seafoodFilter.map((seafoodArray, index) => (
        <aside key={index} className='shadow-2xl rounded-md'>
            <p>{seafoodArray.name}</p>
            <p>{seafoodArray.description}</p>
            <p>{seafoodArray.price}</p>
        </aside>
    ));

    // Function to handle input change
    function onchange(event) {
        return setSeafood(event.target.value);
    }

    return (
        <div>
            <div>
                {/* Search input */}
                <input
                    type="text"
                    name='text'
                    id='text'
                    placeholder='search seafood products'
                    className='border-2 border-slate-900 border-solid text-black rounded-md p-2 m-6'
                    value={seafood}
                    onChange={onchange}
                />
            </div>

            <div className="grid grid-cols-3 gap-5">
                {/* Display filtered seafoods */}
                {seafoodFilters}
            </div>
        </div>
    );
}
