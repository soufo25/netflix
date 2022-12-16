import React, {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

const SignIn = () => {
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, signIn} = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try{
          await signIn(email, password);
          navigate('/')
      } catch (error){
          console.log(error)
          setError(error.message)
      }

  };
  return (
    <div className='w-full h-screen'>
       <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/0ef67cc5-0aa7-47cf-87bd-7f595afc7cfb/b4d680b2-1380-4130-b07f-d2123c711e13/EG-en-20221107-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='/'/>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
    <div className='fixed w-full px-4 py-24 z-50'>
        <div className='max-w-[450px] h-[600px] max-auto bg-black/75 text-white' >
        <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>SignIn</h1>
            {error? <p className='py-3 bg-red-400'>{error}</p>: null}
            <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input onChange={(e)=>setEmail(e.target.value)}className='p-3 my-2 bg-gray-700 rounded' type='email' placeholder='Email' autoComplete='email' />
                <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type='password' placeholder='Password' autoComplete='password'/>
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
            </form>
            <div className='flex justify-between items-center text-sm text-gray-600'>
            <p><input className='' type='checkbox'/>Remenber Me</p>
            <p>Need Help?</p>
            </div>
            
        </div>
        </div>

    </div>
</div>
  )
}

export default SignIn;
