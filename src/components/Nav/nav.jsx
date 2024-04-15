import React from 'react'
import { nav, toggleMenu } from '../utils'

import './nav.css'

const Nav = ({ IsLoading }) => <nav className='top'>
    <div className={IsLoading ? 'loading' : 'loading loaded'}>
        <button className='menu' onClick={() => { toggleMenu() }}><i className='fas fa-bars'></i>Menu</button>
        <button className='close' onClick={() => { toggleMenu() }}><i className='fas fa-times'></i>Close</button>
        <ul>
            {nav()}
        </ul>
    </div>
</nav>

export default Nav
