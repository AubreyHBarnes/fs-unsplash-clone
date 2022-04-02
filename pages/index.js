import Head from 'next/head'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import NewPhotoBtn from '../components/NewPhotoBtn';
import Masonry from '../components/Masonry';

import { supabase } from '../api'

export default function Home(props) {

  const [gallery, setGallery] = useState([])  

  useEffect(() => {
    // console.log('inside index ' + typeof(props.getUrls))
    setGallery(props.getUrls)
  }, [])

  // useEffect(() => {
  //   console.log(gallery)
  // }, [gallery])

  

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
          <NewPhotoBtn setGallery={setGallery}/>
        </header>
        {gallery ? <Masonry imgList={gallery} /> : <p>One Moment</p>}
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
        sortBy: { column: 'created_at', order: 'desc' },
      });

    
      const getImgNames = data;
      const getUrls = [];
  
      getImgNames.forEach(element => {
        const { publicURL, error } = supabase
          .storage
          .from('img-uploader-bucket')
          .getPublicUrl(`public/${element.name}`)
    
        getUrls.push(publicURL)
      });
  
      // setGallery(getUrls)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data,
      getUrls
      // urls
    },
  }
}