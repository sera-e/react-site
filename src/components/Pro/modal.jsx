import React, { useEffect, useState } from 'react'

const Modal = ({ proj, index, showModal, isModalShown }) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const { projid, photos, photodesc } = proj

    useEffect(() => {
        setTimeout(() => { setIsLoaded(true) }, 100)
    }, [])

    const close = () => {
        setIsLoaded(false)
        setTimeout(() => { showModal(false, index) }, 100)
    }

    return <div className={`modal ${isLoaded ? 'show' : 'hide'}`}>
        <h3 className='caption'>{photodesc[index]}</h3>
        <img src={require(`/public/projs/${projid}/${photos[index]}`)} alt={`${projid} ${photos[index]}`} />
        <button onClick={close} type='button'>
            <i className='fa-light fa-times' />
            Close
        </button>
        <span className='modalbg' onClick={close} />
    </div>
}

export default Modal
