import React from 'react'
import { CiInstagram } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import PropTypes from 'prop-types'


export default function Card(props) {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
            <img className='rounded-full h-60 w-60 object-cover' src={`/img/${props.image}.jpg`}></img>
        </div>
        <div className='font-roboto m-4 text-xl'>
            {props.name}
        </div>
        <div className='flex flex-row items-center justify-center'>
            <div className='p-2'><a href={`https://www.instagram.com/${props.insta}/`}><CiInstagram size='25'/></a></div>
            <div className='p-2'><a href={`mailto:${props.rno}@iitj.ac.in`}><CiMail size='25'/></a></div>
            <div className='p-2'><a href={`https://www.linkedin.com/in/${props.linkedin}//`}><CiLinkedin size='25'/></a></div>

        </div>
      
    </div>
  )
}

Card.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    insta: PropTypes.string.isRequired,
    rno: PropTypes.string.isRequired,
    linkedin: PropTypes.string.isRequired
}


