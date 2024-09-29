import React, { useEffect, useState } from 'react'
import "./BackToTop.css"
const BackToTop = () => {
    const [backToTop, setBackToTop] = useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTop(true)
            }else{
                setBackToTop(false)
            }
        })
    },[])
    const windowsTop = () => {
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
    }
    
  return (
    <div className='backToTop'>
      {
        backToTop && <button
        className='BackToTop-button'
        onClick={windowsTop}
        >^</button>
      }
    </div>
  )
}

export default BackToTop
