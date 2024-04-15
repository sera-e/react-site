import React, { Fragment } from 'react'
import { Nav, Footer } from '../Nav'

import './err.css'

const Err = () => {

  return <div className='wrap err'>
    <Fragment>
      <Nav />
      <main>
        <div className='card'>
          <h2>404 - Page Not Found</h2>
          <hr />
          <p>
            Oops! Looks like you strayed too far.
          </p>
          <h5>
              That's okay :)
          </h5>
          <p>
            Why don't you stick around a while in quiet contemplation?
          </p>
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default Err
