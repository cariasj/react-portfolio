import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
const Nav = () => {
  return (
   <nav>
     <a href='#' className='active'> <AiOutlineHome/></a>
     <a href='#about'> About</a>
     <a href='#portfolio'> Portfolio</a>
     <a href='#contact'> Contact </a>
   </nav>
  )
}

export default Nav