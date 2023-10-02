import React from 'react'

function Button(props) {
  return (
    <div className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-green-400 duration-500 cursor-pointer '>
        {props.children}
    </div>
  )
}

export default Button
