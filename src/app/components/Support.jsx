import Image from "next/image";
import styles from './components.module.css';

// Data representing different support options
const support = [
  {
    id: 1,
    title: 'support',
    image: '/images/fishermen.png',
    statement: 'Our full product line is online right here on our site! Every purchase goes a long way to feed the families of our seafaring suppliers. So what are you waiting for? Get your seafood now!'
  },
  {
    id: 2,
    title: 'sign up',
    image: '/images/signup.png',
    statement: 'Since we have changed the way we operate to online only, signup to stay updated on our latest products and discounts.'
  },
  {
    id: 3,
    title: 'gift card',
    image: '/images/giftcard.png',
    statement: 'Not craving seafood for now? No problem Buy a gift card and use it later or share it with friends and family.'
  }
];

// Component to render each support option
const SupportGrid = support.map((grid) => (
  <aside key={grid.id}>
    {/* Displaying images using the Image component from Next.js */}
    <Image src={grid.image} alt={grid.title} width={300} height={370} className="w-92 h-64 rounded-md m-auto"/>
    <h3>{grid.title}</h3>
    <p>{grid.statement}</p>
  </aside>
));

// Main Support component
export default function Support() {
  return (
    <section className={`w-[80%] m-auto ${styles.support}`}>
      
      {/* Section title with styling */}
      <h2 className="px-[2em] py-3 border-l-8 border-solid border-l-[#3498db] my-6">Support Our Business</h2>

      {/* Grid layout to display support options */}
      <section className="grid sm:grid-cols-3 grid-cols-1 gap-[50px]">
        {SupportGrid}
      </section>
    </section>
  );
} 


// Explanation:

// The Support component renders a section with information on supporting the business, including three support options.
// The support array contains objects representing each support option with an id, title, image URL, and statement.
// The SupportGrid variable is created by mapping through the support array, creating an aside element for each support option.
// The Image component from Next.js is used to display the images with specified dimensions.
// Proper naming conventions are applied, such as SupportGrid instead of supportGrid, to follow conventions for component names.
// The component uses the mapped SupportGrid to render the support options in a grid layout with styling classes.
