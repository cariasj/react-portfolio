import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contant_option-icon'/>
            <a href='mailto:cariasjosue@gmail.com'>Email me</a>
          </article>
          <article className='contact_option'>
            <BsGithub className='contant_option-icon'/>
            <a href='https://github.com/cariasj'>Github</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact