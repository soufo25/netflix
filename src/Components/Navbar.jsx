
import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';


const Navbar = () => {
  const {user, logOut} = UserAuth();
  const navigate = useNavigate()
  

  const handleSignOut = async () => {
    try {
      await logOut()
      navigate('/signin')
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
      <Link to= '/'>
      <h1 className='text-red-600 text-4xl font-bold cursor-pointer'>ZOUFLIX </h1>
      </Link>
      {user?. email ? (
        <div>
        <Link to='/account'>
        <button className='text-white pr-4'>Account</button>
        </Link>
        <button onClick={handleSignOut} className='bg-red-600 px-5 rounded cursor-pointer text-white'>logOut</button>
      </div>): ( <div>
        <Link to='/signin'>
        <button className='text-white pr-4'>Sign In</button>
        </Link>
        <Link to= 'signup'>
        <button className='bg-red-600 px-5 rounded cursor-pointer text-white'>Sign Up</button>
        </Link>
      </div>)}
    </div>
  )
}
export default Navbar;
