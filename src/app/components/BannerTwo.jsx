import styles from './components.module.css';
// import Link from 'next/link';

// BannerTwo component for displaying information about online and offline service
export default function BannerTwo() {
  return (
    <section className={styles.bannerTwo}>
      <section className='text-white sm:w-[100%] w-4/5 sm:p-[5em] p-[3em] text-left'>
        {/* Heading for describing how the service is provided */}
        <h2 className='sm:text-[4em] text-5xl md:text-5xl sm:text-3xl font-sans'>How we&apos;re serving you <br /> online and offline</h2>
        {/* Subheading with information about safety measures */}
        <p className='sm:text-2xl text-xl font-sans'>As an online store, we&apos;ve taken precautionary measures <br />
          to ensure the safety of all our customers and team members.</p>
        {/* Commented-out Link component (not currently used) */}
        {/* <Link href={`/`}> */}
        {/* Button linking to the whitepaper (commented out) */}
        <button className='px-10 py-2 mt-4 rounded-md hover:bg-[#3498db] hover:text-white font-semibold bg-white text-black'>Read our whitepaper</button>
        {/* </Link> */}
      </section>
    </section>
  );
}