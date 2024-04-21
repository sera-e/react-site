import React from 'react'
import { nav, toggleMenu } from '../utils'

import './nav.css'

const Nav = ({ IsLoading, IsHome }) => <nav className='top'>
    <div className={IsLoading ? 'top-inner loading' : 'top-inner loading loaded'}>
        <button className='menu' onClick={() => { toggleMenu() }} type='button'>
            <div>
                <i className='fa-regular fa-bars' />
                <p>Menu</p>
            </div>
        </button>
        <button className='close' onClick={() => { toggleMenu() }} type='button'>
            <div>
                <i className='fa-regular fa-times' />
                <p>Close</p>
            </div>
        </button>
        <ul>
            {nav(IsHome ? 'home' : '')}
        </ul>
    </div>
</nav>

export default Nav
