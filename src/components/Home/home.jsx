import React, { Fragment } from 'react'
import { compose } from 'redux'
import { nav, socials } from '../utils'
import { Nav, Footer } from '../Nav'

import './home.css'

const Home = () => {

  return <div className='wrap home'>
    <Fragment>
      <Nav />
      <main>
        <div className='card'>
          <h2>SERA EBEN</h2>
          <h4>Designer // Programmer</h4>
          <hr />
          <ul>
            {socials()}
          </ul>
        </div>
        <nav>
          <ul>
            {nav()}
          </ul>
        </nav>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default compose()(Home)
