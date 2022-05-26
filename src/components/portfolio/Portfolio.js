import React from 'react'
import './portfolio.css'
import project1 from '../../assets/project1.png'
import project2 from '../../assets/project2.png'
import project3 from '../../assets/project3.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2> Recent Works </h2>
      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {project1} alt=''></img>
            <h3> Project 1</h3>
            <a href='https://cariasj.github.io/project-1-team-8/' className='btn'> Link</a>
           
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {project2} alt=''></img>
            <h3> Horiseon </h3>
            <a href='https://cariasj.github.io/Challenge1-Refactor/' className='btn'> Link</a>
            
          </div>
        </article>

        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src= {project3} alt=''></img>
            <h3>  Project 2</h3>
            <a href='https://blah-blah-blog1.herokuapp.com/'className='btn'> Link</a>
        
          </div>
        </article>

      </div>
		</section>
					
		
  )
}

export default Portfolio