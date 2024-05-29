import React, { Fragment } from 'react'
import { Footer } from '../Nav'
import Link from '../Router/Link'

const Err = () => {

  return <div className='wrap err'>
    <Fragment>
      <span/>
      <main>
        <div className='card'>
          <h2>404 - Page Not Found</h2>
          <hr />
          <p>
            Oh no, you look lost.
          </p>
          <p>
            That's okay :)
          </p>
          <br />
          <Link className='btn' to='/' label='Back to homepage'>Go Back to Homepage</Link>
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default Err
