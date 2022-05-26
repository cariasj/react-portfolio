import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'

const Header = () => {
  return (
   <header>
     <div className="container header_container">
       <h5>Hello I Am</h5>
       <h1>Josue</h1>
       <h5 className="text-light">Fullstack Dev</h5>
       <CTA />

       <div className='me'>
         <img src= {ME} alt='Josue'></img>
       </div>
     </div>
   </header>
  )
}

export default Header