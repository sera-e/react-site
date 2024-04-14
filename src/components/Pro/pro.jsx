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

  const loadSettings = () => {
    $.getJSON(endpointGetProjects, (datajson) => setData(datajson))
  }

  useEffect(() => {
    setIsLoaded(false)
    loadSettings()
    setTimeout(() => { setIsLoaded(true) }, 1000)
  }, [selectedProj])

  const selectPro = (selectedPro) => setSelectedProj(selectedPro)

  return <div className='wrap portfolio'>
    <Fragment>
      <Nav />
      {!isLoaded && <Loader />}
      {data && <main className={!isLoaded && 'loading'}>
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
