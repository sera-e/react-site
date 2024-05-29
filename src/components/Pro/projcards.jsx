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
        const { projid, name, tilephoto, types } = pro

        return <li id={projid} className='cards-item' key={`card ${projid}`}>
            <div className='procard'>
                <Link to={`/portfolio/${projid}`} label={`Go to ${name} portfolio project`}>
                    <div>
                        <img className='card-image' src={require(`/public/projs/${projid}/${tilephoto}`)} alt={name} />
                    </div>
                    <div className='card-content'>
                        <div className='fa-circle-container'>
                            {types.includes('Design') && <i className='fa-solid fa-circle-small fa-circle-small-purple' />}
                            {types.includes('Development') && <i className='fa-solid fa-circle-small fa-circle-small-blue' />}
                        </div>
                        <h3 className='card-title'>
                            {name}
                        </h3>
                        <button className='btn card-btn'>
                            Read More
                        </button>
                    </div>
                </Link>
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
                    <span>
                        <i className='fa-solid fa-circle-small fa-circle-small-purple' />
                        Design
                    </span>
                </button>
                <button className={`filter-pill ${projectType === 'Development' ? 'selected' : ''}`} onClick={() => projectType === 'Development' ? setProjectType(null) : setProjectType('Development')} type='button'>
                    <span className='mobile devmobile'>
                        <i className='fa-solid fa-circle-small fa-circle-small-blue' />
                        Dev
                    </span>
                    <span className='desktop'>
                        <i className='fa-solid fa-circle-small fa-circle-small-blue' />
                        Development
                    </span>
                </button>
            </div>
        </div>
        {isLoaded ? <ul className='cards'>{cards()}</ul> : <InnerLoader />}
    </div>
}

export default ProCards
