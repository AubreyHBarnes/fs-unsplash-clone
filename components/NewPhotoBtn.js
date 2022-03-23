import { supabase } from '../api'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function NewPhotoBtn() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
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
                    <label for="first" className='block'>Label for photo</label>
                    <input className="my-4 shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="label" name="first" />
                    <label for="last" className='block'>Photo URL</label>
                    <input className="my-4 shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="photoUrl" name="last" />
                    <div className='self-end'>
                        <button className='mx-4' onClick={() => closeModal()}>Cancel</button>
                        <button className='bg-green py-4 px-8 text-white rounded-xl text-xl font-bold tracking-wider' onClick={() => closeModal()}>Submit</button>
                    </div>
                    
                </div>
            </div>
            
            
            </Dialog>
        </>
    );
}