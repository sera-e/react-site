import React, { Fragment } from 'react'
import { compose } from 'redux'
import { proCards } from '../utils'
import { Nav, Footer } from '../Nav'
// import Link from 'src/Routes/Link'
// import api from '../../api'
import $ from 'jquery'
import './pro.css'

const endpointGetProjects = '/mocks/proj.json'

class Pro extends React.Component {

    state = { data: null, IsLoaded: false }

    componentDidMount() {
        this.loadSettings()
    }

    toggleCallback = (isActive) => {
        const { appId, handleShowAppToUsers } = this.props
        handleShowAppToUsers(appId, isActive)
    }

    loadSettings = () => {

      $.getJSON(endpointGetProjects, (data) => {
          this.setState({ data, IsLoaded: true })
      })
    }

    render() {
        const { IsLoaded, data } = this.state
        if (!IsLoaded || !data) return <span>Loading</span>

        return (
          <div className='wrap portfolio'>
          <Fragment>
            <Nav />
            <main>
              <h2>Portfolio</h2>
              <ul className='cards'>
                {proCards(data)}
              </ul>
            </main>
            <Footer />
          </Fragment>
        </div>
        )
    }
}

export default compose()(Pro)
