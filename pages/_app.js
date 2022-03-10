import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='bg-black container h-full px-8'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
