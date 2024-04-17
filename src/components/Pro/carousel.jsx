import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './carousel.css'

const PhotoCarousel = ({ data, slideDeck }) => {
    const [index, setIndex] = useState(0)

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    const slides = () => {
        const { id, type } = data
        
        return slideDeck.map((photo, i) => <Carousel.Item>
            <img key={id + type + i} src={require(`/public/projs/${id}/${photo}`)} alt={`${id} ${photo}`} />
        </Carousel.Item>)
    }

    return <Carousel fade activeIndex={index} onSelect={handleSelect}>
        {slides()}
    </Carousel>
}

export default PhotoCarousel