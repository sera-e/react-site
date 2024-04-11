import React, { Fragment } from 'react'
import { compose } from 'redux'
import { Nav, Footer } from '../Nav'

import './info.css'

const Info = () => {

  return <div className='wrap contact'>
    <Fragment>
      <Nav />
      <main>
        <div className='card'>
          <h2>Contact info</h2>
          <hr />
          <h5>
            E-mail: <a href='mailto:seraeben.info@gmail.com'>seraeben.info@gmail.com</a>
          </h5>
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default compose()(Info)
