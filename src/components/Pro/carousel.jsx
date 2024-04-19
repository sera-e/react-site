import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'

const PhotoCarousel = ({ data, slideDeck }) => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    const slides = () => {
        const { id, photodesc, type } = data
        
        return slideDeck.map((photo, i) => <Carousel.Item interval={4000}>
            <img key={id + type + i} src={require(`/public/projs/${id}/${photo}`)} alt={`${id} ${photo}`} />
            {/* <Carousel.Caption>
                {photodesc[i]}
            </Carousel.Caption> */}
        </Carousel.Item>)
    }

    return <Carousel fade activeIndex={index} onSelect={handleSelect} className={slideDeck.length < 2 ? 'single-slide' : ''}>
        {slides()}
    </Carousel>
}

export default PhotoCarousel