import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { Nav, Footer } from '../Nav'
import Form from './Form'

const Info = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {setIsLoaded(true)}, 1000)
  }, [])

  return <div className='wrap contact'>
    <Fragment>
      <Nav IsLoading={!isLoaded} />
      {!isLoaded && <Loader />}
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
