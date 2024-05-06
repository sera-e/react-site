import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { Nav, Footer } from '../Nav'
import BackToTop from '../Nav/backtotop'
import Link from '../Router/Link'
import ReactGA from 'react-ga4'

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
              <div className='resume-btns' onClick={handleClick}>
                <Link className='btn card-btn' to='https://drive.google.com/drive/folders/17zqHLL0oNNw2bwe4gb4vTe4oYwGPjgvp' target='_blank'>
                  View my Resume <i className='fa-light fa-file-lines' />
                </Link>
                <Link className='btn card-btn' to='#portfolio'>
                  View my Portfolio <i className='fa-light fa-folder-image' />
                </Link>
              </div>
              {/* <div className='fa-icon-stack'>
                <div className='fa-bg-stack'>
                  <i className='fa-sharp fa-thin fa-solar-system fa-rotate-90 fa-2xl' style={{ 'color': '#ff0080' }} />
                  <i className='fa-duotone fa-solar-system fa-rotate-90 fa-2xl' style={{ '--fa-primary-color': '#0000ff', '--fa-primary-opacity': '1', '--fa-secondary-color': '#ff0080', '--fa-secondary-opacity': '0.4' }} />
                </div>
                <div className='fa-face-stack'>
                  <i className='fa-duotone fa-face-smile-relaxed fa-rotate-by' style={{ '--fa-primary-color': '#000000', '--fa-secondary-color': '#ffa275', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '13deg' }} />
                  <i className='fa-solid fa-cloud fa-2xl' style={{ 'color': '#000000' }} />
                  <i className='fa-solid fa-heart fa-rotate-by' style={{ 'color': '#000000', '--fa-rotate-angle': '193deg' }} />
                </div>
                <div className='fa-icons-for-stack'>

                  <i className='fa-duotone fa-sun fa-rotate-by fa-2xl' style={{ '--fa-primary-color': '#ffff00', '--fa-secondary-color': '#ffff80', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '10deg' }} />
                  <i className='fa-duotone fa-moon-stars fa-2xl' style={{ '--fa-primary-color': '#ffffff', '--fa-secondary-color': '#ffff80', '--fa-secondary-opacity': '1' }} />

                  <i className='fa-duotone fa-star-shooting fa-2xl' style={{ '--fa-primary-color': '#ffffff', '--fa-secondary-color': '#80ffff', '--fa-secondary-opacity': '1' }} />
                  <i className='fa-duotone fa-stars fa-2xl' style={{ '--fa-primary-color': '#ffff80', '--fa-secondary-color': '#80ffff', '--fa-secondary-opacity': '1' }} />

                  <i className='fa-duotone fa-planet-moon fa-rotate-by fa-2xl' style={{ '--fa-primary-color': '#008080', '--fa-secondary-color': '#00ffff', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '-10deg' }} />
                  <i className='fa-duotone fa-planet-ringed fa-2xl' style={{ '--fa-primary-color': '#ff8000', '--fa-secondary-color': '#ffff00', '--fa-secondary-opacity': '1' }} />

                  <i className='fa-duotone fa-comet fa-rotate-180 fa-2xl' style={{ '--fa-primary-color': '#0080c0', '--fa-secondary-color': '#80ffff', '--fa-secondary-opacity': '1' }} />
                  <i className='fa-duotone fa-meteor fa-2xl' style={{ '--fa-primary-color': '#ff0000', '--fa-secondary-color': '#ff8080', '--fa-secondary-opacity': '1' }} />

                  <i className='fa-duotone fa-galaxy fa-rotate-by fa-2xl' style={{ '--fa-primary-color': '#ffff00', '--fa-secondary-color': '#800080', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '20deg' }} />
                  <i className='fa-duotone fa-shuttle-space fa-rotate-by fa-2xl' style={{ '--fa-primary-color': '#8080c0', '--fa-secondary-color': '#c0c0c0', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '225deg' }} />
                  <i className='fa-duotone fa-satellite fa-2xl' style={{ '--fa-primary-color': '#8eb6f0', '--fa-secondary-color': '#fdc502', '--fa-secondary-opacity': '1' }} />

                  <i className='fa-duotone fa-alien-8bit fa-rotate-by fa-2xl' style={{ '--fa-primary-color': '#ff0080', '--fa-secondary-color': '#8000ff', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '-10deg' }} />
                  <i className='fa-duotone fa-ufo fa-rotate-by fa-2xl' style={{ '--fa-primary-color': '#c0c0c0', '--fa-secondary-color': '#00ff80', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '-10deg' }} />

                  <i className='fa-luna fa-duotone fa-cat-space fa-rotate-by fa-2xl fa-flip-horizontal' style={{ '--fa-primary-color': '#ff8040', '--fa-secondary-color': '#ff00ff', '--fa-secondary-opacity': '1' }} />
                  <i className='fa-star fa-duotone fa-cat-space fa-rotate-by fa-2xl fa-flip-horizontal' style={{ '--fa-primary-color': '#000000', '--fa-secondary-color': '#ff80c0', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '45deg' }} />
                  
                  <i className="fa-duotone fa-hand-horns fa-rotate-by fa-2xl" style={{ '--fa-primary-color': '#c0c0c0', '--fa-secondary-color': '#c0c0c0', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '-45deg' }} />
                  <i class="fa-duotone fa-boombox fa-rotate-by fa-2xl" style="--fa-primary-color: #8000ff; --fa-secondary-color: #8080ff; --fa-secondary-opacity: 1; --fa-rotate-angle: 5deg;"></i>

                  <i className="fa-duotone fa-hand-sparkles fa-rotate-by fa-2xl" style={{ '--fa-primary-color': '#ffffff', '--fa-secondary-color': '#0080ff', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '-30deg' }} />
                  <i class="fa-duotone fa-hat-wizard fa-rotate-by fa-2xl" style="--fa-primary-color: #ff80ff; --fa-secondary-color: #ffff80; --fa-secondary-opacity: 1; --fa-rotate-angle: -5deg;"></i>

                  <i class="fa-duotone fa-tree-palm fa-rotate-by fa-2xl" style="--fa-primary-color: #80ff80; --fa-secondary-color: #e17100; --fa-secondary-opacity: 1; --fa-rotate-angle: 10deg;"></i>
                  <i class="fa-duotone fa-map-location-dot fa-2xl" style="--fa-primary-color: #ff0000; --fa-secondary-color: #009797; --fa-secondary-opacity: 1;"></i>

                  <i className='fa-duotone fa-box-heart fa-rotate-by fa-2xl' style={{ '--fa-primary-color': '#e8b67d', '--fa-secondary-color': '#df9f60', '--fa-secondary-opacity': '1', '--fa-rotate-angle': '-25deg' }} />
                  <i className="fa-duotone fa-watermelon-slice fa-2xl" style={{ '--fa-primary-color': '#00e800', '--fa-secondary-color': '#ff0000', '--fa-secondary-opacity': '1' }} />

                </div>
              </div> */}
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
