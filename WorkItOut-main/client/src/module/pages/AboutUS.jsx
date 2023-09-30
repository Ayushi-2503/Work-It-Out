import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi';

export default function AboutUS() {
    const navigate = useNavigate();
    return (
        <div className='w-full h-full p-4 '>
            <div className='w-full h-16 flex items-center justify-between'>
                <BiArrowBack className='text-4xl font-bold text-black' onClick={() => navigate(-1)} />
            </div>
            <div className='w-full h-full flex items-center flex-col justify-center p-4 my-1'>
                <h1 className='text-4xl font-semibold '>About WorkItOut</h1>
                <p className='p-4 my-2'>
                Welcome to WorkItOut, where fitness meets personalization. We believe that every body is unique, and that's why we offer customized fitness plans tailored to your individual needs and goals.And with our one-to-one training sessions, you'll have the support and guidance of a personal trainer every step of the way.Many people struggle to find the right exercise routine that fits their unique body requirements and goals. 
Additionally, finding a personal trainer to guide and support them in their fitness journey can be time-consuming and expensive.
 Therefore, there is a need for a gym fitness website that offers personalized exercise recommendations based on individual body requirements.Out website provides a comprehensive assessment of the user's physical condition, including body composition, fitness level, medical history, and any specific goals they may have. Based on this assessment, the website suggests a workout plan that is tailored to the user's needs.The website also offers one-to-one interaction with a qualified trainer who can answer questions, provide feedback, and offer guidance throughout the user's fitness journey. This interaction could take the form of video calls or messaging  depending on the user's preferences and availability.
                </p>
            </div>
        </div>
    )
}
