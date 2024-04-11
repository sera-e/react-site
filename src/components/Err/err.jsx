import React, { Fragment } from 'react'
import { compose } from 'redux'
// import { nav, socials } from '../utils'
import { Nav, Footer } from '../Nav'
// import Link from 'src/Routes/Link'

import './err.css'

const Err = () => {

  // const trackClick = () => {
  //   if (gtag) {
  //     gtag('event', 'click', { event_category: 'perpay', event_label: 'perpay_click_get_start' })
  //   }
  // }

  return <div className='wrap contact'>
    <Fragment>
      <Nav />
      <main>
        <div className='card'>
          <h2>404 - Page Not Found</h2>
          <hr />
          <p>
            Oops! Looks like you strayed too far.
          </p>
          <br /><br /><br />
          <h5>
              That's okay :)
          </h5>
          <p>
            Why don't you stick around a while in quiet contemplation?
          </p>
          <br />
          <br />
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default compose()(Err)
