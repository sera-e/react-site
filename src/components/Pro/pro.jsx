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
  const [data, setData] = useState(null)
  const [selectedProj, setSelectedProj] = useState(null)
  const [selectedProjId, setSelectedProjId] = useState('site')
  const [showSelectedProj, setShowSelectedProj] = useState(false)

  const loadSettings = () => {
    $.getJSON(endpointGetProjects, (datajson) => setData(datajson))
  }

  useEffect(() => {
    setIsLoaded(false)
    loadSettings()
    setTimeout(() => {
      setIsLoaded(true)
    }, 1600)

    setShowSelectedProj(!!selectedProj)
  }, [selectedProj])

  useEffect(() => {
    const id = selectedProjId || 'site'
    document.getElementById(id).scrollIntoView({ behavior: 'smooth'})
  }, [selectedProjId])

  const selectPro = (pro) => {
    setSelectedProj(pro)
    if (pro) setSelectedProjId(pro.id)
  }
  
  if (!isLoaded) return <Loader />

  return <div className='wrap portfolio'>
    <Fragment>
      <Nav />
      {data && <main>
        {selectedProj && showSelectedProj 
        ? <FeaturedPro selectedProj={selectedProj} selectPro={selectPro}/> 
        : <div>
            <h2>Portfolio</h2>
            <ul className='cards'>{proCards(data, selectPro)}</ul>
          </div>
        }
      </main>}
      <Footer />
    </Fragment>
  </div>
}

export default Pro
