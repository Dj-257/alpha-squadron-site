import React from 'react'
import Heading from './Heading'
import Card from './Card'

export default function Team() {
  return (
    <>
    <Heading title='TEAM'/>
    <div className='font-roboto m-4 text-2xl font-bold text-center'>VICE PRESIDENT</div>
    <Card name='Tharakadatta Hegde' image='tharak' insta='tharak_hegde' linkedin='tharakadattahegde' rno='b22cs102'/>
    <div className='font-roboto m-4 text-2xl font-bold text-center'>OVERALL COORDINATOR</div>
    <Card name='Yuvraj Saran' image='yuvraj' insta='yuvrajsrn' linkedin='yuvrajsrn' rno='b22me074'/>
    <div className='font-roboto m-4 text-2xl font-bold text-center'>COMMANDERS</div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card name='Sarthak Kolekar' image='sarthak' insta='sarthakrajkolekar' linkedin='sarthakrajkolekar' rno='b22cs1065'/>
        <Card name='Nayan Kute' image='nayan' insta='nayankute21' linkedin='nayan-kute-a1b998284' rno='b23cs1041'/>
        <Card name='Aditya Jha' image='aditya' insta='adityaj_24' linkedin='aditya-jha-14b972287' rno='b23ee1082'/>
    </div>

    <div className='font-roboto m-4 text-2xl font-bold text-center'>SOLDIERS</div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card name='Akhil Dhyani' image='akhil' insta='akhil_cipher' linkedin='akhil-dhyani-b39a37312' rno='b24cs1005'/>
        <Card name='Harshil Agrawal' image='harshil' insta='_harshil_0316' linkedin='harshil-agrawal-82470a310' rno='b24cs1030'/>
        <Card name='Cherry Aggarwal' image='cherry' insta='cherry_aggarwal_' linkedin='cherry-aggarwal-000967321' rno='b22cm1016'/>
        <Card name='Harpreet Bawa' image='harpreet' insta='2.harpreet.2' linkedin='harpreet-singh-bawa-276040331' rno='b24mt1010'/>
        <Card name='Heril Mistry' image='heril' insta='hmistry_11' linkedin='heril-mistry-870205313' rno='b24me1048'/>
        <Card name='Aakarsh Sinha' image='aakarsh' insta='aakarazzi' linkedin='aakarsh-sinha-5993902b4' rno='b24ch1001'/>
        <Card name='Jimeet Shastri' image='jimeet' insta='jimeet2440' linkedin='jimeet-shastri-034761327' rno='b24cs1034'/>
    </div>



    

    </>
  )
}
