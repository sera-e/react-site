import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import ReactGA from 'react-ga4'
import './carousel.css'

const PhotoCarousel = ({ data, slideDeck, showModal }) => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)

        ReactGA.event({
            category: 'Carousel Slide',
            action: 'Click',
            label: selectedIndex,
        })
    }

    const handleClick = (platform) => {
        ReactGA.event({
            category: 'Expand Project Image',
            action: 'Click',
            label: platform,
        })
    }

    const slides = () => {
        const { id, photodesc } = data

        return slideDeck.map((photo, i) => <Carousel.Item interval={4000} key={`photo ${id} ${i}`}>
            <img src={require(`/public/projs/${id}/${photo}`)} alt={`${id} ${photo}`} />
            {slideDeck.length > 1 && <Carousel.Caption>
                {photodesc[i]}
            </Carousel.Caption>}
        </Carousel.Item>)
    }

    return <div className='carousel-wrap'>
        <button className='expand' onClick={() => { showModal(true, index); handleClick() }} type='button'>
            <i className='fa-regular fa-expand' key={`expand ${index}`} />
        </button>
        <Carousel fade activeIndex={index} onSelect={handleSelect} className={slideDeck.length < 2 ? 'single-slide' : ''}>
            {slides()}
        </Carousel>
    </div>
}

export default PhotoCarousel