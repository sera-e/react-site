import React, { useEffect } from 'react'
import './App.scss'
import './Layout.scss'
import Router from './components/Router/Router'
import ReactGA from 'react-ga4';

function App() {
    useEffect(() => {
        ReactGA.initialize('G-3P20DLHZPK');
        // Send pageview with a custom path
        ReactGA.send({ hitType: 'pageview', page: '/webpage', title: 'Web Page' })
    }, [])

    return (
      <div className='site' id='site'>
        <Router />
        <div className='stars'>
          <div id='stars1'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>
      </div>
    )
}

export default App
