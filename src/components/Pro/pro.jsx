import React, { Fragment, useEffect, useState } from 'react'
import { proCards } from '../utils'
import { Nav, Footer } from '../Nav'
import FeaturedPro from './FeaturedPro'
import Loader from '../Loader/loader'
import $ from 'jquery'
import './pro.css'

const endpointGetProjects = '/mocks/proj.json'

const Pro = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState(null)
  const [selectedProj, setSelectedProj] = useState(null)
  const [selectedProjId, setSelectedProjId] = useState('site')
  const [showSelectedProj, setShowSelectedProj] = useState(false)

  const loadSettings = () => {
    $.getJSON(endpointGetProjects, (data) => setProjects(data))
  }

  const selectPro = (pro, id) => {
    setSelectedProj(pro)

    let projid = id || 'site'
    if (pro) projid = pro.id

    setSelectedProjId(projid)
  }

  useEffect(() => {
    loadSettings()
  }, [])

  useEffect(() => {
    const path = window.location.hash
    const match = projects && projects.filter((proj) => path.includes(proj.id))

    if (match) selectPro(match[0])

  }, [projects])

  useEffect(() => {
    setIsLoaded(false)
    setTimeout(() => {
      setIsLoaded(true)
    }, 1500)

    setShowSelectedProj(!!selectedProj)
  }, [selectedProj])

  useEffect(() => {
    const id = selectedProjId || 'site'
    
    if (isLoaded) window.onload = () => document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
  }, [isLoaded])
  
  if (!isLoaded) return <Loader />

  return <div className='wrap portfolio'>
    <Fragment>
      <Nav />
      {projects && <main>
        {selectedProj && showSelectedProj 
        ? <FeaturedPro selectedProj={selectedProj} selectPro={selectPro}/> 
        : <div>
            <h2>Portfolio</h2>
            <ul className='cards'>{proCards(projects, selectPro)}</ul>
          </div>
        }
      </main>}
      <Footer />
    </Fragment>
  </div>
}

export default Pro
