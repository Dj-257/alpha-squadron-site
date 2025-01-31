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
                <img src='/img/dashak.png' alt='dashak' className='rounded-full object-cover w-full h-64 object-center'/>
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

        <div className='flex flex-col justify-center items-center p-4 rounded-lg shadow-md cursor-pointer transition-all bg-slate-600'>
            <div>
                <img src='/img/homecoming.png' alt='homecoming' className='rounded-full object-cover w-full h-64'/>
            </div>
            <div className='text-2xl m-2 underline font-bold text-center text-white font-mono'>
                Homecoming
            </div>
            <div className='font-open_sans text-justify'>

                    Homecoming is the official name for Convocation of Batch of 2024. The event was conducted on a grand scale with Vice President of India as the Chief Guest. A new initiative, 'Roommate Rewind' was introduced where the seniors were given an opportunity to share their experiences and memories with their juniors as they stayed in their rooms during the event. Our team handled all verticals smoothly and efficiently, and in the it campus felt like a festival was ongoing. Everything ranging from formal to informal eevnts was a grand success and was appreciated by all the attendees.
            </div>
            <div>
                <button className='instagram p-2 rounded-lg flex justify-center items-center font-open_sans font-bold m-2' onClick={()=>window.open('https://www.instagram.com/p/DBOdYj9SFfs/}','_blank')}>
                    Instagram Post
                    <img src='/img/insta.png' alt='instagram' className='w-6 h-6 ml-2'/>
                </button>
                
            </div>
        </div>

        <div className='flex flex-col justify-center items-center p-4 rounded-lg shadow-md cursor-pointer transition-all bg-slate-600'>
            <div>
                <img src='/img/legacy.png' alt='legacy' className='rounded-full object-cover w-full h-64'/>
            </div>
            <div className='text-2xl m-2 underline font-bold text-center text-white font-mono'>
                Legacy Initiative
            </div>
            <div className='font-open_sans text-justify'>

                    Legacy initiative was started this year itself at Convocation. The idea was to raise funding from our graduating batch to help the upcoming batches, particularly for the development of more co-working spaces inside the campus. The initiative was a grand success and we were able to raise a substantial amount of money. The initiative was appreciated by the faculty and the students alike and we hope to continue this tradition in the coming years.
            </div>
            <div>
                <button className='instagram p-2 rounded-lg flex justify-center items-center font-open_sans font-bold m-2' onClick={()=>window.open('https://www.instagram.com/p/DBgptiVPJdj/}','_blank')}>
                    Instagram Post
                    <img src='/img/insta.png' alt='instagram' className='w-6 h-6 ml-2'/>
                </button>
                
            </div>
        </div>

    </div>

    
    </>


  )
}
