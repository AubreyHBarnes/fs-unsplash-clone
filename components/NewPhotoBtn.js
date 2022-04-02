import { supabase } from '../api'
import React, { useCallback, useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useDropzone } from 'react-dropzone';

export default function NewPhotoBtn({ setGallery }) {
    const [isOpen, setIsOpen] = useState(false)
    const [inputVal, setInputVal] = useState('')

    // useEffect(() => {
    //     setGallery()
    // }, [])

    const updateMasonry = async () => {
        //to update list of images after upload, use the same method in getStaticProps
        const { data, error } = await supabase
            .storage
            .from('img-uploader-bucket')
            .list('public', {
                limit: 100,
                offset: 0,
                sortBy: { column: 'created_at', order: 'asc' },
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
        setGallery(getUrls)
    };

    const onDrop = useCallback(async (acceptedFiles) => {
        const { data, error } = await supabase.storage
        .from('img-uploader-bucket')
        .upload(`public/${acceptedFiles[0].path}`, acceptedFiles[0])

        setInputVal(acceptedFiles[0].name)
      }, [])
      const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    function closeModal() {
        setIsOpen(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (event.target[0].value === '' || event.target[1].value === '') alert('please fill in both fields')
        //insert user input to DB
        const { data } = await supabase
        .from('myUnsplashTags')
        .insert([
            { tags: event.target[0].value, img_name: event.target[1].value }
        ])
        .single()
        // console.log(data)
        //Then we update the gallery with new user input
        updateMasonry();
            
            
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)} className='text-white font-pt-sans mt-4 font-bold text-xl bg-green w-36 h-16 rounded-xl self-end'>Add a photo</button>
            <Dialog 
                open={isOpen} 
                onClose={() => closeModal()}
                className="fixed z-10 inset-0 overflow-y-auto"
            >
            <div className='flex items-center justify-center min-h-screen'>
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <div className='relative bg-white rounded-lg w-full max-w-md p-8 mx-auto flex flex-col'>
                    <Dialog.Title className='text-2xl p-4'>Add New Photo</Dialog.Title>
                    <Dialog.Description className='hidden'>
                        Add a new photo by label and photo url
                    </Dialog.Description>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <label htmlFor="first" className='block'>Label for photo</label>
                        <input className="my-4 shadow appearance-none border border-black rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" type="text" id="label" name="first" />
                        <div {...getRootProps()} className='photoUrl-container'>
                            <label htmlFor="last" className='block'>Drag & Drop, or Click to upload</label>
                            <div className='url-flex-container flex my-4 shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'>
                                <input {...getInputProps()} value={inputVal} style={{display: 'block'}} className="bg-transparent flex-grow" type="text" id="photoUrl" name="last" />
                                <FontAwesomeIcon icon={faUpload} className="text-2xl p-1 flex-shrink" />
                            </div>
                        </div>
                        
                        <div className='self-end'>
                            <button className='mx-4' onClick={() => closeModal()}>Cancel</button>
                            <button className='bg-green py-4 px-8 text-white rounded-xl text-xl font-bold tracking-wider' type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            
            
            </Dialog>
        </>
    );
}