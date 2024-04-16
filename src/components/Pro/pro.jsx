import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import { proCards } from '../utils'
import { Nav, Footer } from '../Nav'
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
    const path = window.location.hash
    const match = projects && projects.filter((proj) => portfolioId === proj.id)
    setSelectedProj(match ? match[0] : null)
  }, [projects])

  useEffect(() => {
    setIsLoaded(false)
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

  }, [selectedProj])

  useEffect(() => {
    const id = selectedProj || 'site'

    if (isLoaded) window.onload = () => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }, [isLoaded])
  
  if (!isLoaded) return <Loader />

  return <div className='wrap portfolio'>
    <Fragment>
      <Nav />
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
