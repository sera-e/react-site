import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { Nav, Footer } from '../Nav'
import BackToTop from '../Nav/backtotop'
import Link from '../Router/Link'

import './about.css'

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => { setIsLoaded(true) }, 1000)
  }, [])
  
  return <div className='wrap about'>
    <Fragment>
      <Nav IsLoading={!isLoaded} />
      {!isLoaded && <Loader />}
      <BackToTop />
      <main className={isLoaded ? 'loading loaded' : 'loading'}>
        <div className='card'>
          <h2>About me</h2>
          <hr />
          <div>
            <div className='about-img'>
              <img src={require('./me.jpg')} alt={`me`} />
              <Link className='btn card-btn' to='https://docs.google.com/document/d/1jVhgV5iM3fHNR2dNnOsHP3ovK5ymPhe4wuDt6txHDHA/edit?usp=sharing' target='_blank'>
                View My Resume <i className='fa-regular fa-file-user' />
              </Link>
            </div>
            <div className='about-txt'>
              <p>
                Hello, I'm Sera :)
                <br /><br />
                I love swimming, volunteering, exploring, collecting rocks, and my head always seems to be stuck in the stars.
                <br /><br />
                These days, I primarily do UI/UX development though, I have both experience and a background in web design, graphic design, photography, videography, and media editing.
                I've always been &#10024; a creative &#10024; but everything I learned came from leaning into my kinesthetic learning style and my knack of paying attention to the little details.
                <br /><br />
                At this point in my career, I find myself using everything I've learned to guide others, while still finding new ways to learn and grow.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default About
