import React, { Fragment } from 'react'
import { compose } from 'redux'
import { proCards } from '../utils'
import { Nav, Footer } from '../Nav'
import FeaturedPro from './FeaturedPro'
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

    toggleCallback = () => {
    }

    loadSettings = () => {

      $.getJSON(endpointGetProjects, (data) => {
          this.setState({ data, IsLoaded: true })
      })
    }

    selectPro = (data) => this.setState({ selectedProj: data })

    render() {
      const { IsLoaded, data, selectedProj } = this.state
      if (!IsLoaded || !data) return <span>Loading</span>

      return <div className='wrap portfolio'>
        <Fragment>
          <Nav />
          <main>
            <h2>{selectedProj ? selectedProj.name : 'Portfolio'}</h2>
            {selectedProj 
            ? <FeaturedPro selectedProj={selectedProj} selectPro={this.selectPro}/> 
            : <ul className='cards'>{proCards(data, this.selectPro)}</ul>
            }
          </main>
          <Footer />
        </Fragment>
      </div>
    }
}

export default compose()(Pro)
