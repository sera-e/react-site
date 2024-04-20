import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'

const PhotoCarousel = ({ data, slideDeck, showModal }) => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
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
        <button className='expand' onClick={() => { showModal(true, index) }} type='button'>
            <i className='fa-regular fa-expand' key={`expand ${index}`} />
        </button>
        <Carousel fade activeIndex={index} onSelect={handleSelect} className={slideDeck.length < 2 ? 'single-slide' : ''}>
            {slides()}
        </Carousel>
    </div>
}

export default PhotoCarousel