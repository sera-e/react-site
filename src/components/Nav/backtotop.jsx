import React, { useState } from 'react'
import { connect } from 'react-redux'
import { minContentHeight } from '../../../src/store/layout'

const BackToTop = ({ minContentHeight }) => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('scroll', toggleVisible)

    return <div style={{ display: visible ? 'inline' : 'none' }} className='backtotop' onClick={scrollToTop} >
        <i className='fa-light fa-arrow-up' />
    </div>
}

export default connect(
    minContentHeight,
)(BackToTop)
