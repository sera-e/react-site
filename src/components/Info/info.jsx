import React, { Fragment } from 'react'
import { compose } from 'redux'
// import { nav, socials } from '../utils'
import { Nav, Footer } from '../Nav'
// import Link from 'src/Routes/Link'

import './info.css'

const Info = () => {

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
