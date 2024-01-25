import styles from './components.module.css';
import Link from 'next/link';

// BannerOne component for displaying a promotional banner
export default function BannerOne() {
  return (
    <section className={`${styles.bannerOne}`}>
      <section className='relative left-16 lg:top-16 md:top-10 text-[#fff] sm:relative sm:right-10 sm:w-[50%] md:w-[90%] lg:w-1/2 sm:p-[5em] p-[3em]'>
        {/* Heading for the promotional message */}
        <h2 className='sm:text-l text-6xl font-sans font-semibold'>Serving you since 2021.</h2>
        {/* Subheading with information about seafood delivery */}
        <p className='sm:text-2xl text-xl font-sans'>We deliver the best seafood across West Africa. The best prices you can ever get!</p>
        {/* Link to the shop page */}
        <Link href={`/shop`}>
          {/* Button for encouraging users to shop */}
          <button className='px-4 py-2 mt-4 rounded-md hover:bg-white hover:text-black border-2 border-white border-solid font-semibold'>Shop now</button>
        </Link>
      </section>
    </section>
  );
}