import { useEffect } from "react"

export default function Masonry ({ imgList }) {
    
    useEffect(() => {
        console.log('inside Masonry ' + typeof(imgList))
        console.log(imgList)
    
      
    })
    

    return (
        <>
            <div className='masonry-container container columns-4 gap-3 space-y-3 pb-28 m-auto'>
                { imgList.map((item, index) => (
                    <div key={index} className='rounded-xl gradient-bg bg-gradient-to-tl from-amber-500 via-sky-500 to-yellow-300'>
                        <div className='break-inside-avoid relative w-full h-min hover:p-2 transition-all duration-150 ease-out hover:ease-in'>
                        <img 
                            src={item}
                            alt=""
                            className='rounded-xl mx-auto'
                        />
                        <p>{index}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}