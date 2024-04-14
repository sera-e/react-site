import React, { Fragment } from 'react'
import { compose } from 'redux'
import { proCards } from '../utils'
import { Nav, Footer } from '../Nav'
import FeaturedPro from './FeaturedPro'
import Loader from '../Loader/loader'
import $ from 'jquery'
import './pro.css'

const endpointGetProjects = '/mocks/proj.json'

class Pro extends React.Component {

    state = {
      IsLoaded: false,
      data: null,
      selectedProj: null
    }

    componentDidMount() {
      this.loadSettings()
    }

    loadSettings = () => {

      $.getJSON(endpointGetProjects, (data) => {
          this.setState({ data })
      }, () => {setTimeout(() => {this.setState({ IsLoaded: true })}, 1000)})
    }

    selectPro = (data) => this.setState({ selectedProj: data })

    render() {
      const { IsLoaded, data, selectedProj } = this.state
      if (!IsLoaded || !data) return <Loader />

      return <div className='wrap portfolio'>
        <Fragment>
          <Nav />
          <main>
            {selectedProj 
            ? <FeaturedPro selectedProj={selectedProj} selectPro={this.selectPro}/> 
            : <div>
                <h2>Portfolio</h2>
                <ul className='cards'>{proCards(data, this.selectPro)}</ul>
              </div>
            }
          </main>
          <Footer />
        </Fragment>
      </div>
    }
}

export default compose()(Pro)
