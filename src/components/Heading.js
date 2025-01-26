import React from 'react';
import Proptypes from 'prop-types';

export default function Heading(props) {
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <h1 className='text-4xl text-center font-roboto'>{props.title}</h1>
        <div className='w-20 h-1 bg-slate-600 m-5'></div>
    </div>
  )
}

Heading.propTypes = {
  title: Proptypes.string.isRequired
}