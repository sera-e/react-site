import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { proCards } from '../utils'
import { Nav, Footer } from '../Nav'
import BackToTop from '../Nav/backtotop'
import FeaturedPro from './FeaturedPro'
import $ from 'jquery'
import './pro.css'

const endpointGetProjects = '/mocks/proj.json'

const Pro = ({ portfolioId }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState(null)
  const [selectedProj, setSelectedProj] = useState(null)

  const loadSettings = () => {
    $.getJSON(endpointGetProjects, (data) => setProjects(data))
  }

  useEffect(() => {
    loadSettings()
  }, [])

  useEffect(() => {
    const match = projects && projects.filter((proj) => portfolioId.split('/')[1] === proj.id)
    setSelectedProj(match ? match[0] : null)
  }, [projects, portfolioId])

  useEffect(() => {
    setIsLoaded(false)
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

  }, [selectedProj])
  
  if (!isLoaded) return <Loader />

  return <div className='wrap portfolio'>
    <Fragment>
      <Nav />
      <BackToTop />
      {projects && <main>
        {selectedProj 
        ? <FeaturedPro selectedProj={selectedProj} /> 
        : <div>
            <h2>Portfolio</h2>
            <ul className='cards'>{proCards(projects)}</ul>
          </div>
        }
      </main>}
      <Footer />
    </Fragment>
  </div>
}

export default Pro
