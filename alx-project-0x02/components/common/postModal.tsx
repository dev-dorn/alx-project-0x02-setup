import { PostModalProps } from '@/interfaces';
import React from 'react';

const PostModal:React.FC<PostModalProps> = ({

    isOpen, 
    onClose,
    onSubmit
}) => {
    if(!isOpen) return null;

    return(
        <div className='fixed inset-0 items-center justify-center bg-black bg-opacity-40'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
                <h2 className='text-xl font-bold mb-4'>Create Post</h2>


            <div className='flex justify-end gap-4 mt-4'>
                <button
                onClick={onClose}
                className='px-4 py-2 rounded bg-gray-300 hover:bg-gray-400'>
                    Cancel
                </button>
            </div>
            </div>

        </div>
    )
}