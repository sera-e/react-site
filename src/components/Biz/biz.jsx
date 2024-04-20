import React, { Fragment } from 'react'
import { Nav, Footer } from '../Nav'

import './biz.css'

const Biz = () => {

  return <div className='wrap err'>
    <Fragment>
      <Nav />
      <main>
        <div className='card'>
          <h2>biz title</h2>
          <hr />
          <p>biz details</p>
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default Biz
