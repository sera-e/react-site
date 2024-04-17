import './App.scss'
import './Layout.scss'
import Router from './components/Router/Router'

function App() {
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
