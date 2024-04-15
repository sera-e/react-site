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
  const [selectedId, setSelectedId] = useState(null)

  const loadSettings = () => {
    $.getJSON(endpointGetProjects, (datajson) => setData(datajson))
  }

  useEffect(() => {
    setIsLoaded(false)
    loadSettings()
    setTimeout(() => { setIsLoaded(true) }, 1500)
    if (!!selectedProj) setTimeout(() => { window.scrollTo(0, 0, { behavior: 'smooth' }) }, 1600)
  }, [selectedProj])

  useEffect(() => {
    const id = selectedId || 'site'
    setTimeout(() => { document.getElementById(id).scrollIntoView({ behavior: 'smooth' }) }, 1600)
    
  }, [selectedId])

  const selectPro = (selectedPro, id) => {
    setSelectedProj(selectedPro)
    if (id) setSelectedId(id)
  }

  return <div className='wrap portfolio'>
    <Fragment>
      <Nav IsLoaded={isLoaded} />
      {!isLoaded && <Loader />}
      {data && <main className={isLoaded ? 'loading loaded' : 'loading'}>
        {selectedProj 
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
