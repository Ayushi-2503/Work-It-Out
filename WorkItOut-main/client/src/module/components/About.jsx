import React from 'react'
import img from '../../assets/landing page girl.jpg'

export default function About() {
  return (
    <div className='w-full h-screen flex'>
        <div className='w-1/2 h-full'>
            <img src={img} alt="no img" />
        </div>
        <div className='w-1/2 h-full flex items-center justify-center'  >
            <div className='flex items-start justify-start flex-col w-full h-1/2 p-2'>
            <h2 className='font-bold text-2xl text-orange-600 bg-orange-200 p-2 m-2 rounded'>About Us</h2>
            <h1 className='font-extrabold text-5xl   p-2 m-2 rounded'>Welcome To Our</h1> 
            <h1 className='font-extrabold text-5xl  p-2 m-2 rounded'>Fitness Gym</h1>
            <p className='p-4'>Welcome to WorkItOut, where fitness meets personalization. We believe that every body is unique, and that's why we offer customized fitness plans tailored to your individual needs and goals.</p>
            <button className='p-3 m-3 border-2 border-orange-600 rounded-md hover:bg-orange-600 hover:text-white font-semibold transition-all duration-200'>Explore More</button>
            </div>
        </div>
    </div>
  )
}
