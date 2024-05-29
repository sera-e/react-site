import React, { Fragment } from 'react'
import Loader from '../Loader/loader'
import Link from '../Router/Link'
import { Nav, Footer } from '../Nav'
import { nav, socials } from '../utils'
import Ufo from '../svgs/ufo'

class Home extends React.Component {

  state = {
    IsLoaded: false
  }

  componentDidMount() {
    setTimeout(() => { this.setState({ IsLoaded: true }) }, 500)
  }

  render() {
    const { IsLoaded } = this.state

    return <div className='wrap home'>
      <Fragment>
        <Nav IsLoading={!IsLoaded} IsHome={true} />
        {!IsLoaded && <Loader />}
        <main className={IsLoaded ? 'loading loaded' : 'loading'}>
          <Ufo />
          <div className='card'>
            <h2>SERA EBEN</h2>
            <h3>Designer // Programmer</h3>
            <hr />
            <Link className='btn card-btn' to='portfolio' label='Explore my work'>
              Explore my work
            </Link>
            <ul>
              {socials()}
            </ul>
          </div>
          <nav>
            <ul>
              {nav('home')}
            </ul>
          </nav>
        </main>
        <Footer />
      </Fragment>
    </div>
  }
}

export default Home
