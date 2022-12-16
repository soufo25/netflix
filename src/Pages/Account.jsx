import React from 'react'
import Favourites from '../Components/Favourites';

const Account = () => {
  return (
    <div className='w-full text-white'>
      <img className=' w-full h-[400px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/b4d680b2-1380-4130-b07f-d2123c711e13/EG-en-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
      <div className='bg-black/50 fixed top-0 left-0 w-full h-[550px]'>
        <div className='absolute top-[20%] p-4 md:p-8 '>
            <h1 className=' text-3xl md:text-5xl font-bold'>Favourites</h1>
        </div>
      </div>
      <Favourites />
    </div>
  )
}

export default Account;
 