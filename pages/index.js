import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-lora text-white underline">
        Hello world!
      </h1>
      <div className='masonry-container masonry sm:masonry-sm md:masonry-md'>
        <div className='rounded-xl gradient-bg bg-gradient-to-br from-amber-500 via-sky-500 to-yellow-300'>
          <div className='rounded-xl relative w-full h-min hover:p-2 transition-all duration-150 ease-out hover:ease-in'>
            <Image 
              src={'/img/paradiso-cake2.jpg'}
              alt=""
              width="100%"
              height="100%"
              layout='responsive'
              objectFit='cover'
              className='rounded-xl'
            />
          </div>
        </div>
        <div className='gradient-bg bg-gradient-to-br from-amber-500 via-sky-500 to-yellow-300'>
          <div className='relative w-full h-min hover:p-2 transition-all duration-150 ease-out hover:ease-in'>
            <Image 
              src={'/img/paradiso-cake2.jpg'}
              alt=""
              width="100%"
              height="100%"
              layout='responsive'
              objectFit='cover'
            />
          </div>
        </div>
        <div className='gradient-bg bg-gradient-to-br from-amber-500 via-sky-500 to-yellow-300'>
          <div className='relative w-full h-min hover:p-2 transition-all duration-150 ease-out hover:ease-in'>
            <Image 
              src={'/img/paradiso-cake2.jpg'}
              alt=""
              width="100%"
              height="100%"
              layout='responsive'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
      
    </>
  )
}
