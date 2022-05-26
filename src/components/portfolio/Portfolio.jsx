import React from 'react'
import './portfolio.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2> Recent Works </h2>
      <div className='conatiner portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {project1} alt=''></img>
            <h3> Title of projects</h3>
            <a href='https://github.com/cariasj' className='btn'> Github</a>
            <a href='https://github.com/cariasj' className='btn btn-primary'> Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {project2} alt=''></img>
            <h3> Title of projects</h3>
            <a href='https://github.com/cariasj' className='btn'> Github</a>
            <a href='https://github.com/cariasj' className='btn btn-primary'> Github</a>
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {project3} alt=''></img>
            <h3> Title of projects</h3>
            <a href='https://github.com/cariasj' className='btn'> Github</a>
            <a href='https://github.com/cariasj' className='btn btn-primary'> Github</a>
          </div>
        </article>

      </div>
		</section>
					
		
  )
}

export default Portfolio