import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import './nav.css'

const BackToTop = () => {
    const [isClicked, setIsClicked] = useState(false)
    const [isHidden, setIsHidden] = useState(false)

    useEffect(() => {
        setIsClicked(false)
        $(window).on('load scroll', function () {
            if ($(window).scrollTop() > 100) {
                setIsHidden(false)
            }
        })
    }, [isHidden])

    useEffect(() => {
        window.scrollTo(0, 0, { behavior: 'smooth' })
        setIsHidden(true)
    }, [isClicked])

    return <div className={`backtotop ${isHidden ? 'hide' : 'show'}`} onClick={() => { setIsClicked(true) }}>
        <i className='fa-light fa-arrow-up' />
    </div>
}

export default BackToTop
