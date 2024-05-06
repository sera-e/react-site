import React, { useEffect, useState } from 'react'
import Link from '../Router/Link'
import InnerLoader from '../Loader/innerloader'

export const ProCards = ({ projects }) => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [projectType, setProjectType] = useState(null)
    const [filteredProjects, setfilteredProjects] = useState(projects)

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 500)
    }, [filteredProjects])

    useEffect(() => {
        setIsLoaded(false)
        let filteredData = projects.slice()

        if (projectType) filteredData = projects.slice().filter(proj => proj.types.includes(projectType))

        setfilteredProjects(filteredData)
    }, [projectType, projects])

    const cards = () => filteredProjects.map((pro) => {
        const { id, name, photos } = pro

        return <li id={id} className='cards-item' key={`card ${id}`}>
            <div className='procard'>
                <Link to={`#portfolio/${id}`}>
                    <div>
                        <img className='card-image' src={require(`/public/projs/${id}/${photos[0]}`)} alt={name} />
                    </div>
                </Link>
                <div className='card-content'>
                    <Link to={`#portfolio/${id}`}>
                        <h3 className='card-title'>{name}</h3>
                    </Link>
                    <Link className='btn card-btn' to={`#portfolio/${id}`}>
                        Read More
                    </Link>
                </div>
            </div>
        </li>
    })

    return <div>
        <h2>
            {projectType} Portfolio
        </h2>
        <div className='dual-filter'>
            <div>
                <button className={`filter-pill ${projectType === 'Design' ? 'selected' : ''}`} onClick={() => projectType === 'Design' ? setProjectType(null) : setProjectType('Design')} type='button'>
                    Design
                </button>
                <button className={`filter-pill ${projectType === 'Development' ? 'selected' : ''}`} onClick={() => projectType === 'Development' ? setProjectType(null) : setProjectType('Development')} type='button'>
                    <span className='mobile'>Dev</span>
                    <span className='desktop'>Development</span>
                </button>
            </div>
        </div>
        {isLoaded ? <ul className='cards'>{cards()}</ul> : <InnerLoader />}
    </div>
}

export default ProCards
