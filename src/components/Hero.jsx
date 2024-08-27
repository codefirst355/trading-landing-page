import React from 'react'
import Button from './button'

function Hero() {
  return (
    <div className='h-full w-full flex flex-col-reverse mt-20 md:flex-col lg:justify-center lg:items-center lg:py-5'>
      <figure className='h-80 w-full'>
        <span className=''></span>
      </figure>
      <div className="flex flex-col items-center gap-4 mb-20">
        <h1 className="heading text-center font-[SFProDisplay-Black] text-white">Your go-to for trading confidence</h1>
        <span className='lg:text-4xl text-heading font-[SFProDisplay-Bold]'>The easiest way to start</span>
        <Button variant="white" type="signup">Registration</Button>
      </div>
    </div>
  )
}

export default Hero
