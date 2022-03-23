import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import NewPhotoBtn from '../components/NewPhotoBtn';

import { supabase } from '../api'

export default function Home(props) {

  const [gallery, setGallery] = useState([])  

  useEffect(() => {
    const getImgNames = props.data;
    const getUrls = [];

  getImgNames.forEach(element => {
    const { publicURL, error } = supabase
      .storage
      .from('img-uploader-bucket')
      .getPublicUrl(`public/${element.name}`)

    getUrls.push(publicURL)
  });

    setGallery(getUrls)
  }, [props.data])

  return (
    <>
      <section className='main-wrapper container m-auto'>
        <header className='flex flex-col justify-between  w-full py-8 md:flex-row'>
          <div className='logo-container flex'>
            <div className='flex items-center w-full'>
              <Image src={'/img/Element_Hydro.png'} alt="" width={50} height={50} />
              <h1 className="text-3xl font-pt-sans text-white mx-4">
                My Unsplash
              </h1>
            </div>
            <div className='search-container bg-white justify-between pl-4 flex items-center rounded-lg'>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
              <input className="bg-transparent ml-4 justify-self-end rounded-lg" type="text" placeholder='Search by name'></input>
            </div>
          </div>
          <NewPhotoBtn />
        </header>
        <div className='masonry-container container columns-4 gap-3 space-y-3 pb-28 m-auto'>
          { gallery.length > 0 ? gallery.map((item, index) => (
            <>
            <div key={index} className='rounded-xl gradient-bg bg-gradient-to-br from-amber-500 via-sky-500 to-yellow-300'>
              <div className='break-inside-avoid relative w-full h-min hover:p-2 transition-all duration-150 ease-out hover:ease-in'>
                <img 
                  src={item}
                  alt=""
                  className='rounded-xl mx-auto'
                />
              </div>
            </div>
            </>
          )) : <p className='text-white'>nah</p>}
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  
    const { data, error } = await supabase
      .storage
      .from('img-uploader-bucket')
      .list('public', {
        limit: 100,
        offset: 0,
        sortBy: { column: 'name', order: 'asc' },
      })
  
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
      // urls
    },
  }
}