import React from 'react'

function About() {
  return (
    <div className='w-100%'>
      <div className='bg-blue-800'>
        <h1 className='text-4xl font-bold py-10'>About</h1>
      </div>
      <div className='flex item-center w-100% m-auto mt-10 gap-20 relative'>
        <div className='w-45% border-red-4 absolute top-10 left-10 max-w-prose mx-auto'>
          <h1 className='text-4xl font-bold'>Hello sharad paradhi</h1>
          <h1 className='text-justify break-normal py-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio, dignissimos voluptate cumque inventore quae necessitatibus nam ratione minus eligendi molestiae ad, consectetur magnam. Error eius totam eos dolorum modi.</h1>
          <div className='md:flex'>
            <div>
              <h1 className='text-4xl font-bold'>295+</h1>
              <p className='font-bold'>Vacant Pentiont</p>
              <p className=''>Lorem ipsum dolor sit amet consectetur 
              </p>
            </div>
            <div >
            <h1  className='text-4xl font-bold'>1500+</h1>
              <p className='font-bold'>Pending Pentiont</p>
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </div>
          </div>
        </div>
        <img style={{ width: "40%", position: "absolute", top: "10px", right: "5%" }} className= 'sm:sm-size-800 hidden md:block' src='https://thumbs.dreamstime.com/b/software-language-programmer-avatar-software-language-programmer-avatar-vector-illustration-design-110589781.jpg' alt='' />
      </div>
    </div>
  )
}

export default About
