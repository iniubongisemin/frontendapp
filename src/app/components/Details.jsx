import { seafoods } from "@/app/page";
import Image from "next/image";

export default function Details({ params }) {
  // Find the seafood based on the provided params
  const seafoodIndex = seafoods.find(
    (seafood) => seafood.name === params
  );

  if (!seafoodIndex) {
    // Display a message if seafood is not found
    return <div>Seafood Product not found</div>;
  }

  return (
    <div className="min-h-screen w-4/5 m-auto pt-5">
      <section className="grid sm:grid-cols-2 grid-cols-1 gap-y-3">
        {/* Display the seafood image */}
        <Image
          src={`/images/${seafoodIndex.name}.jpg`}
          alt={seafoodIndex.name}
          width={400}
          height={600}
          className="h-[400px] w-[500px] rounded-md"
        />
        <section className="grid grid-cols-1 gap-x-10">
          {/* Display seafood details */}
          <h2 className="h-[100px] text-4xl capitalize py-6">
            {seafoodIndex.name}
          </h2>
          <p>&#8358;{seafoodIndex.price}</p>
          <p>Quantity</p>
          {/* Input for quantity and button to add to cart */}
          <div className="flex gap-y-8 justify-start items-start">
            <input
              type="number"
              title="Quantity"
              name="number"
              id="number"
              min={1}
              className="border-4 border-[#e55] border-solid outline-none rounded-md p-2 w-[70px]"
            />
            <button className="hover:bg-[#e55] text-[#e55] hover:text-white py-3 px-5 ml-6 rounded-md border-2 hover:border-none">
              Add to cart
            </button>
          </div>
          {/* Display additional details */}
          <h2 className="h-[200px] text-white bg-slate-950 text-4xl px-7 py-9">
            {seafoodIndex.name}
          </h2>
          <p>{seafoodIndex.price}</p>
          <p>{seafoodIndex.description}</p>
        </section>
      </section>
    </div>
  );
}