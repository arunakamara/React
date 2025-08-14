import { useState } from "react";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

export default function App() {
  const [rating, setRating] = useState({
    likes: 0,
    dislikes: 0,
  });

  function handleLike() {
    setRating((prevRating) => ({ ...prevRating, likes: prevRating.likes + 1 }));
  }

  function handleDislike() {
    setRating((prevRating) => ({
      ...prevRating,
      dislikes: prevRating.dislikes + 1,
    }));
  }
  
  const { likes, dislikes } = rating;

  return (
    <>
      <div className="flex flex-col justify-center items-center mt-30 bg-stone-300 w-80 h-50 m-auto rounded-lg">
        <p className="font-bold leading-8 mt-5">Text</p>
        <menu className="flex mt-20 gap-5">
          <button
            onClick={handleLike}
            className="flex gap-2 mx-2 bg-stone-700 text-stone-200 p-3 rounded-lg hover:bg-stone-500"
          >
            Likes <FaThumbsUp className="text-blue-400 mt-1" />
            ({likes})
          </button>
          <button
            onClick={handleDislike}
            className="flex gap-2 mx-2 bg-stone-700 text-stone-200 p-3 rounded-lg hover:bg-stone-500"
          >
            Dislike <FaThumbsDown className="text-blue-400 mt-1 " />
            ({dislikes})
          </button>
        </menu>
      </div>
    </>
  );
}
