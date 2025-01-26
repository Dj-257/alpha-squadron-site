import React from 'react';
import Heading from './Heading';

export default function Achievements() {
  return (
    <>
    <Heading title='ACHIEVEMENTS'/>

    <div className='grid grid-cols-1 md:grid-cols-3 p-4 gap-4'>
        <div className='flex flex-col justify-center items-center p-4 rounded-lg shadow-md cursor-pointer transition-all bg-slate-600'>
            <div>
                <img src='/img/alumni-session.png' alt='Ajat Prabha' className='rounded-full object-cover w-full h-64'/>
            </div>
            <div className='text-2xl m-2 underline font-bold text-center text-white font-mono'>
                Alumni Session with Ajat Prabha
            </div>
            <div className='font-open_sans text-justify'>

                    B.Tech in Computer Science Engineering, IIT Jodhpur (2016–2020) and Founder of Devlups Lab at IIT Jodhpur, Ajat Prabha interned at Google Summer of code CNCF (Cloud Native Computing Foundation) (2019). Currently he is working as Senior Software Engineer: Kong Inc.

                    Ajat Prabha has achieved remarkable milestones in technological fields.
                    He shared about his passion to write various tech-related blogs which helps him keep documentation of learnings and is continuing till you back from his internship days.

                    We are deeply grateful to him for inspiring the IIT-Jodhpur community and motivating us to aim higher.
            </div>
            <div>
                <button className='instagram p-2 rounded-lg flex justify-center items-center font-open_sans font-bold m-2' onClick={()=>window.open('https://www.instagram.com/p/DEjHnsdIv8E/}','_blank')}>
                    Instagram Post
                    <img src='/img/insta.png' alt='instagram' className='w-6 h-6 ml-2'/>
                </button>
                
            </div>
        </div>


        <div className='flex flex-col justify-center items-center p-4 rounded-lg shadow-md cursor-pointer transition-all bg-slate-600'>
            <div>
                <img src='/img/dashak.png' alt='Ajat Prabha' className='rounded-full object-cover w-full h-64 object-center'/>
            </div>
            <div className='text-2xl m-2 underline font-bold text-center text-white font-mono'>
                Dashak 3.0
            </div>
            <div className='font-open_sans text-justify'>
                Our team helped organised the third edition of Dashak, the ten-year alumni reuninon of IIT Jodhpur. The event was held on 25<sup>th</sup> and 26<sup>th</sup> January, 2025. Our squadron members, under the leadership of our VP and coordinators,  volunteered under various verticals like logistics, hospitality, and event management to make this event a grand success. The meticulous planning and execution were evident in every aspect of the event. From coordinating alumni arrivals and accommodations to managing complex event schedules and facilitating networking opportunities, our team worked tirelessly to create a welcoming and nostalgic environment.

            </div>
            <div>
                <button className='instagram p-2 rounded-lg flex justify-center items-center font-open_sans font-bold m-2' onClick={()=>window.open('https://www.instagram.com/p/DECpj48MeI-/}','_blank')}>
                    Instagram Post
                    <img src='/img/insta.png' alt='instagram' className='w-6 h-6 ml-2'/>
                </button>
                
            </div>
        </div>

    </div>
    </>


  )
}
