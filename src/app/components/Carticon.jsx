import { FaShoppingCart } from 'react-icons/fa';
// import Link from 'next/link';

// Carticon component for displaying a shopping cart icon
export default function Carticon() {
  return (
    <div className='bg-black px-4 py-2 rounded-md'>
      {/* Commented-out Link component (not currently used) */}
      {/* <Link href='/'> */}
      {/* Shopping cart icon */}
      <FaShoppingCart />
      {/* </Link> */}
    </div>
  );
}