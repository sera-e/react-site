import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { Nav, Footer } from '../Nav'
import BackToTop from '../Nav/backtotop'
import Form from './Form'

import './info.css'

const Info = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {setIsLoaded(true)}, 1000)
  }, [])

  return <div className='wrap contact'>
    <Fragment>
      <Nav IsLoading={!isLoaded} />
      {!isLoaded && <Loader />}
      <BackToTop />
      <main className={isLoaded ? 'loading loaded' : 'loading'}>
        <div className='card'>
          <h2>Contact me</h2>
          <hr />
          <Form />
        </div>
      </main>
      <Footer />
    </Fragment>
  </div>
}

export default Info
