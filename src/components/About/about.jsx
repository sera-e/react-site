import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { Nav, Footer } from '../Nav'
import BackToTop from '../Nav/backtotop'
import Link from '../Router/Link'
import ReactGA from 'react-ga4'

import './about.css'

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => { setIsLoaded(true) }, 1000)
  }, [])

  const handleClick = (platform) => {
      ReactGA.event({
          category: 'Resume Link',
          action: 'Click',
          label: platform,
      })
  }
  
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
              <img src={require('./me.png')} alt={`me`} />
              <Link onClick={handleClick} className='btn card-btn' to='https://drive.google.com/file/d/1rjHertcbMDQEl0BX-ZOMzqM9xmScdue9' target='_blank'>
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
