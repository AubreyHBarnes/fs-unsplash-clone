import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className='bg-black min-h-screen px-8'>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp
