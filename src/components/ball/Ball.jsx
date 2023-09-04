import React, { useEffect, useState } from 'react'
import './Ball.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
const Ball = () => {
  const [scroll,setScroll] = useState(0)
  useEffect(()=>{
    window.addEventListener('scroll',(e)=>{
      setScroll(e.currentTarget.scrollY)
    })
  },[])
  const scrollTop = () =>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
  return (
    <div className={scroll>=260?'ball active':'ball'} onClick={scrollTop}><FontAwesomeIcon icon={faArrowUp}/></div>
  )
}

export default Ball