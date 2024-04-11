import React from 'react'
import { compose } from 'redux'
import { nav, toggleMenu } from '../utils'

import './nav.css'

const Nav = () => <nav className='top'>
    <div>
        <button className='menu' onClick={() => { toggleMenu() }}><i className='fas fa-bars'></i>Menu</button>
        <button className='close' onClick={() => { toggleMenu() }}><i className='fas fa-times'></i>Close</button>
        <ul>
            {nav()}
        </ul>
    </div>
</nav>

export default compose()(Nav)
