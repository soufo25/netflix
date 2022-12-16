
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {user, signUp} = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await signUp(email, password);
            navigate('/')
        } catch (error){
            console.log(error)
        }

    };

  return (
    <div className='w-full h-screen'>
        <img className ='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/b4d680b2-1380-4130-b07f-d2123c711e13/EG-en-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] max-auto bg-black/75 text-white' >
            <div className='max-w-[320px] mx-auto py-16'>
                <h1 className='text-3xl font-bold'>SignUp</h1>
                <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                    <input onChange={(e) => setEmail(e.target.value)}className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email' />
                    <input  onChange={(e) => setPassword(e.target.value)}className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='password'/>
                    <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                </form>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                <p><input className='' type='checkbox'/>Remenber Me</p>
                <p>Need Help?</p>
                </div>
                <p className='py-6'><span className='text-gray-600'>Already Subcribed to Zouflix?</span> <Link to='/signin'>Sign in</Link></p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default SignUp;
