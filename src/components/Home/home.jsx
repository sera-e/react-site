import React, { Fragment } from 'react'
import { nav, socials } from '../utils'
import { Nav, Footer } from '../Nav'
import Loader from '../Loader/loader'

import './home.css'

class Home extends React.Component {

  state = {
    IsLoaded: false
  }

  componentDidMount() {
    setTimeout(() => {this.setState({ IsLoaded: true })}, 1000)
  }

  render() {
    const { IsLoaded } = this.state

    return <div className='wrap home'>
    <Fragment>
      <Nav />
      {!IsLoaded && <Loader />}
      <main className={!IsLoaded && 'loading'}>
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
}

export default Home
