import React from 'react'
import Logo from '../../public/creatureslogo.jpg'

export const Home: React.FC = () => {
  return (
    <>
    <div className='flex justify-center'>
      <img src={Logo} alt="creature with a message" />
    </div>
    <div>
      <p className='flex justify-center'>Select Game Mode:</p>
      <div className='flex justify-around pt-8'>
        <div className='bg-red-500 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-red-700'>
          <p className='font-bold text-3xl'>5 Minutes</p>
        </div>
        <div className='bg-red-500 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-red-700'>
          <p className='font-bold text-3xl'>15 Minutes</p>
        </div>
        <div className='bg-red-500 rounded-lg w-[20%] h-36 flex justify-center items-center hover:cursor-pointer hover:bg-red-700'>
          <p className='font-bold text-3xl'>Open Play</p>
        </div>
      </div>
    </div>
      
    </>
  )
}
