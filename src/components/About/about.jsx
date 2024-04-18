import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { Nav, Footer } from '../Nav'

import './about.css'

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {setIsLoaded(true)}, 1000)
  }, [])

  return <div className='wrap about'>
    <Fragment>
      <Nav IsLoading={!isLoaded} />
      {!isLoaded && <Loader />}
      <main className={isLoaded ? 'loading loaded' : 'loading'}>
        <div className='card'>
          <h2>About me</h2>
          <hr />
          <div>
            <img className='about-img' src='/public/about/me.jpg' alt='me'/>
            <p>
              Hello, I'm Sera :) 
              <br /><br />
              I love swimming, volunteering, exploring, collecting rocks, and my head always seems to be stuck in the stars. 
              <br /><br />
              These days, I primarily do UI/UX development though, I have both experience and a background in web design, graphic design, photography, videography, and media editing. 
              I've always been &#10024; a creative &#10024; but everything I learned came from leaning into my kinesthetic learning style and my knack of paying attention to the little details. 
              <br /><br />
              At this point in my career, I find myself using everything I've learned to guide others, while still finding more ways to grow myself, because there's always something new to learn. 
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default About
