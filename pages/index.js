import Head from 'next/head'
import Image from 'next/image'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'




export default function Home() {
  return (
    <>
      <section className='main-wrapper container'>
        <header className='flex flex-col justify-between  w-full py-8 md:flex-row'>
          <div className='logo-container flex'>
            <div className='flex items-center w-full'>
              <Image src={'/img/Element_Hydro.png'} alt="" width={50} height={50} />
              <h1 className="text-3xl font-pt-sans text-white ">
                My Unsplash
              </h1>
              
            </div>
            <div className='search-container bg-white justify-between pl-4 flex items-center rounded-lg'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
              <input className="bg-transparent ml-4 justify-self-end rounded-lg" type="text" placeholder='Search by name'></input>
            </div>
            
          </div>
          
          <button className='text-white font-pt-sans mt-4 font-bold text-xl bg-green w-36 h-16 rounded-xl self-end'>Add a photo</button>
        </header>
      
        
        <div className='masonry-container container masonry sm:masonry-sm md:masonry-md m-auto'>
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
      </section>
    </>
  )
}
