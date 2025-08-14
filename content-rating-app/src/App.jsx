import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'

export default function App(){
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-30 bg-stone-300 w-80 h-50 m-auto rounded-lg">
        <p className="font-bold leading-8 mt-5">Text</p>
        <menu className='flex mt-20 gap-5'>
          <button className='flex gap-2 mx-2 bg-stone-700 text-stone-200 p-3 rounded-lg hover:bg-stone-500'>
            Likes <FaThumbsUp className='text-blue-400 mt-1'/>
             {0}
            </button>
          <button className='flex gap-2 mx-2 bg-stone-700 text-stone-200 p-3 rounded-lg hover:bg-stone-500'>
            Dislike <FaThumbsDown className='text-blue-400 mt-1 '/>
             {0}
            </button>
        </menu>
      </div>
    </>
  )
}