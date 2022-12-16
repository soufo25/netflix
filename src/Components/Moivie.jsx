import React, {useState}from 'react';
import {FaHeart, FaRegHeart} from "react-icons/fa";
import { UserAuth } from '../Context/AuthContext';
import { db } from '../Firebase';
import { arrayUnion, doc, updateDoc} from 'firebase/firestore';

const Moivie = ({movie}) => {
    const [like, setLike] = useState(false)
    const [save, setSave] = useState(false)
    const {user} = UserAuth();

  const MovieID = doc(db, 'users', `${user?.email}`)
  
  const Favourite = async () => {
    if(user?.email){
      setLike(!like)
      setSave(true)
      await updateDoc(MovieID, {
        Favourites: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path
        })
    })
  } else {
    alert('Please log in to save Movie')
  }
}

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
    <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt= {movie?.title}/>
    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
        <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
            {movie?.title}</p>
            <p onClick={Favourite}>{like? <FaHeart className='absolute top-4 left-4 text-gray-300'/> : <FaRegHeart className='absolute top-4 left-4 text-gray-300' />}</p>
    </div>
    </div>
  )
}

export default Moivie;
