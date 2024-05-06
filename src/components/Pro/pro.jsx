import React, { Fragment, useEffect, useState } from 'react'
import Loader from '../Loader/loader'
import ProCards from './projcards'
import { Nav, Footer } from '../Nav'
import BackToTop from '../Nav/backtotop'
import FeaturedPro from './FeaturedPro'
import $ from 'jquery'

const endpointGetProjects = '/mocks/proj.json'

const Pro = ({ portfolioId }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [projects, setProjects] = useState(null)
  const [selectedProj, setSelectedProj] = useState(null)

  const loadSettings = () => {
    $.getJSON(endpointGetProjects, (data) => {
      setProjects(data)
    })
  }

  useEffect(() => {
    loadSettings()
    setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
  }, [])

  useEffect(() => {
    const match = projects && projects.filter((proj) => portfolioId.split('/')[1] === proj.projid)
    setSelectedProj(match ? match[0] : null)
  }, [projects, portfolioId])

  useEffect(() => {
    if (selectedProj) {
      setIsLoaded(false)
      setTimeout(() => {
        setIsLoaded(true)
      }, 500)
    }
  }, [selectedProj])

  if (!isLoaded) return <Loader />

  return <div className={`wrap portfolio${selectedProj ? ' selected-proj' : ''}`}>
    <Fragment>
      <Nav />
      <BackToTop />
      {projects && <main className={isLoaded ? 'loading loaded' : 'loading'}>
        {selectedProj
          ? <FeaturedPro selectedProj={selectedProj} projects={projects} />
          : <ProCards projects={projects} />
        }
      </main>}
      <Footer />
    </Fragment>
  </div>
}

export default Pro
