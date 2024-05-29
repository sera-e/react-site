import React, { Fragment, useEffect, useState } from 'react'
import Link from '../Router/Link'
import PhotoCarousel from './carousel'
import Modal from './modal'
import ReactGA from 'react-ga4'

const FeaturedPro = ({ selectedProj, projects }) => {
    const [isModalShown, setIsModalShown] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const [prevNextProjIds, setPrevNextProjIds] = useState([])
    const { projid, name, role, client, story, tools, hardskills, softskills, photos, url, urltype, isHosted = false } = selectedProj

    useEffect(() => {
        const { id } = selectedProj
        const nextProjId = projects.filter((proj) => (id === 0 ? projects.length : id) - 1 === proj.id)
        const prevProjId = projects.filter((proj) => (id === projects.length - 1 ? -1 : id) + 1 === proj.id)
        setPrevNextProjIds([prevProjId[0].projid, nextProjId[0].projid])
    }, [selectedProj, projects])

    const showModal = (boole, index) => {
        setIsModalShown(boole)
        setPhotoIndex(index)
    }

    const handleClick = (platform) => {
        ReactGA.event({
            category: 'Project Source Links',
            action: 'Click',
            label: platform,
        })
    }

    return <div className='featured-pro' id={projid}>
        {isModalShown && <Modal proj={selectedProj} index={photoIndex} showModal={showModal} isModalShown={isModalShown} />}
        <Fragment>
            <h2>{name}</h2>
            <Link to='#portfolio' label='Go back to my portfolio' className='goback-btn'>
                <i className='fa-light fa-arrow-left' />
                <span>Go Back</span>
            </Link>
            <div className='proj-wrapper'>
                <div className='proj-content'>
                    <div className='proj-photos'>
                        <PhotoCarousel data={selectedProj} slideDeck={photos} showModal={showModal} />
                        <div onClick={handleClick}>
                            <Link className='btn card-btn' to={!isHosted ? url : require(`/public/projs/${projid}/${url}`)} label={`View ${urltype.toUpperCase()}`} target='_blank'>
                                <span>View {urltype.toUpperCase()}</span>
                            </Link>
                        </div>
                    </div>
                    <div className='proj-inner-content'>
                        <div>
                            {client && <div>
                                <h3>Client</h3>
                                <p>{client}</p>
                            </div>}
                            {role && <div>
                                <h3>My Role</h3>
                                <p>{role}</p>
                            </div>}
                            {story && <div>
                                <h3>Summary</h3>
                                <p>{story}</p>
                            </div>}
                            {tools && <div>
                                <h3>Tools</h3>
                                <p>{tools}</p>
                            </div>}
                            {hardskills && <div>
                                <h3>Skills</h3>
                                <p>{`${hardskills}${softskills ? `, ${softskills}` : ''}`}</p>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className='other-proj-links'>
                <div>
                    <Link className='btn proj-nav-prev' to={`#portfolio/${prevNextProjIds[0]}`} label='Go to the previous project in the portfolio list'>
                        <i className='fa-light fa-arrow-left' />
                        <span className='mobile'>Prev</span>
                        <span className='desktop'>Prev Project</span>
                    </Link>
                    <Link className='btn proj-nav-next' to={`#portfolio/${prevNextProjIds[1]}`} label='Go to the next project in the portfolio list'>
                        <span className='mobile'>Next</span>
                        <span className='desktop'>Next Project</span>
                        <i className='fa-light fa-arrow-right' />
                    </Link>
                </div>
                <Link className='btn proj-nav-portfolio' to='#portfolio' label='Go back to my portfolio'>
                    Back to Portfolio
                </Link>
            </div>
        </Fragment>
    </div>
}

export default FeaturedPro
