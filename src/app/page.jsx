import React from 'react'
import BannerOne from './components/BannerOne'
import BannerTwo from './components/BannerTwo'
import Support from './components/Support'
import ShopOnline from './components/ShopOnline'
import Seafoods from './components/Seafoods'

 export const seafoods = [
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

//&#8358; css:\20A6 => Naira symbol

export default function Home(products) {
  return (
    <>
      <main className='min-h-screen'>
        <BannerOne />
        <Support />
        <BannerTwo />
        <Seafoods products = {seafoods}/>
        <ShopOnline />
      </main>
    </>
  )
}



// import Image from "next/image";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
//         <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
//           Get started by editing&nbsp;
//           <code className="font-mono font-bold">src/app/page.js</code>
//         </p>
//         <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
//           <a
//             className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
//             href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             By{" "}
//             <Image
//               src="/vercel.svg"
//               alt="Vercel Logo"
//               className="dark:invert"
//               width={100}
//               height={24}
//               priority
//             />
//           </a>
//         </div>
//       </div>

//       <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
//         <Image
//           className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//           src="/next.svg"
//           alt="Next.js Logo"
//           width={180}
//           height={37}
//           priority
//         />
//       </div>

//       <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
//         <a
//           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Docs{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Find in-depth information about Next.js features and API.
//           </p>
//         </a>

//         <a
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Learn{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Learn about Next.js in an interactive course with&nbsp;quizzes!
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Templates{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
//             Explore starter templates for Next.js.
//           </p>
//         </a>

//         <a
//           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
//           className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <h2 className={`mb-3 text-2xl font-semibold`}>
//             Deploy{" "}
//             <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//               -&gt;
//             </span>
//           </h2>
//           <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
//             Instantly deploy your Next.js site to a shareable URL with Vercel.
//           </p>
//         </a>
//       </div>
//     </main>
//   );
// }
