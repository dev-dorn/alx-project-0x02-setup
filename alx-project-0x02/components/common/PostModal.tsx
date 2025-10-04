import { PostModalProps } from '@/interfaces';
import React from 'react';
import { useState } from 'react';


const PostModal:React.FC<PostModalProps> = ({

    isOpen, 
    onClose,
    onSubmit
}) => {
    const [title, setTitle] = useState("");
    const [content, setContent]= useState("");

    if(!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({title, content});
        setTitle("");
        setContent("");
        onClose();
    };

    return(
        <div className='fixed inset-0 items-center justify-center bg-black bg-opacity-40'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
                <h2 className='text-xl font-bold mb-4'>Create Post</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                type='text'
                placeholder='Enter title'
                onChange={(e)=> setTitle(e.target.value)}
                className='border px-3 py-2 rounded' 
                required
                />
                <textarea 
                placeholder='Enter content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='border px-3  py-2 rounded'
                required
                />


            </form>
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
export default PostModal;