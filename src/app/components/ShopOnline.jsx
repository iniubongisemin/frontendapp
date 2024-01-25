import Image from "next/image"

export default function ShopOnline() {
  return (
    <>
    <div className="lg:flex lg:flex-row lg:m-auto md:relative lg:relative lg:w-[100%] md:w-[100%] sm:flex sm:flex-col sm:relative">
      <div className='lg:relative lg:left-[500px] md:m-auto lg:h-[1000px] lg:w-[50%] md:w-[90%] lg:rounded-md md:rounded-md sm:w-[100px] sm:relative sm:px-0 sm:mx-0 bg-slate-900 sm:py-[80px]'>
        
        <aside className="lg:relative sm:relative text-white p-8 sm:p-2 m-0 lg:left-44 md:left-40 lg:w-[60%] md:w-[60%] sm:w-[30%]">
          <h2 className='font-bold sm:text-2xl md:text-3xl lg:text-3xl lg:text-left sm:text-left'>Shop Online</h2><br />
          <p>We know that after COVID-19, a lot of folks around the city and state are feeling uneasy about the future - you’re not alone.</p>  <br />

          <p>We are committed to making sure you enjoy gastronomic seafood experiences, and we’re going to keep doing just that - with our dedicated team.</p><br />

          <p>As long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p><br />

          <p>-------</p><br />

          <p>Esther & Ini-ubong Isemin</p><br />

          <p>Seafood.co</p><br /><br />
        </aside>
        
      </div>
      <div className="lg:relative lg:top-24 lg:p-0 lg:m-0 sm:right-0 md:right-0">
          <Image
              src={`/images/founders.png`}
              alt='buy seafood online'
              width={500}
              height={660}
              className='lg:rounded-md lg:relative lg:h-[800px] lg:p-0 lg:m-auto lg:right-[800px] lg:w-[500px] md:rounded-md md:w-[300] md:h-[460] md:relative md:m-auto'
          />
      </div>
    </div>
    </>
  )
}

// Explanation:

// The component ShopOnline is designed to display information about shopping online along with an image.
// The content is organized using flex containers for different screen sizes.
// The Image component from Next.js is used to display an image with specified dimensions.
// The text content is structured within an aside element, providing details about shopping online and expressing commitment to customers.
// Styling classes are applied to position and style elements based on different screen sizes.
