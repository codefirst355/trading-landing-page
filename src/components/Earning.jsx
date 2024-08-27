import React, { useEffect, useRef, useState } from 'react'
import Button from './button'
import EarningVideoSrc from '../assets/startup_final_outs/mp4/b&w_1080p_60fps.mp4'

function Earning() {
  const [componentDidMount, setComponentDidMount] = useState(true)

  const videoRef =  useRef(null)

  useEffect(() => {
    if(componentDidMount){
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Trigger your event here
            videoRef.current.play()
          }
        },
        { threshold: 0.5 } // Adjust threshold as needed
      );
  
      if (videoRef.current) {
        observer.observe(videoRef.current);
      }
  
      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
      setComponentDidMount(false)
    }
  }, []);

  return (
    <div id='start' className='w-full flex flex-col items-center gap-4 py-5 text-center'>
      <h1 className='heading'>Start earning as a real trader in four simple steps</h1>
      <figure>
        <video className='w-[1120px] h-full' muted playsInline autoPlay src={EarningVideoSrc} ref={videoRef} />
      </figure>
      <Button variant="white">Start now</Button>
    </div>
  )
}

export default Earning
