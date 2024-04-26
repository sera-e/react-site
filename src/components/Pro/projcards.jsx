import React, { useEffect, useState } from 'react'
import Link from '../Router/Link'
import ReactGA from 'react-ga4'
import InnerLoader from '../Loader/innerloader'

export const ProCards = ({ projects }) => {
    const [isLoaded, setIsLoaded] = useState(true)
    const [projectTypes, setProjectTypes] = useState([])
    const [filteredProjects, setfilteredProjects] = useState(projects)

    const setProjType = (type) => {
        setIsLoaded(false)
        let projTypes = projectTypes.slice()

        if (projectTypes.includes(type)) projTypes = projTypes.filter((t) => t !== type)
        else projTypes.push(type)

        projTypes.sort()

        setProjectTypes(projTypes)
    }

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true)
        }, 500)
    }, [filteredProjects])

    useEffect(() => {
        let finalData = projects.slice()
        let filteredData = []

        if (projectTypes.length) {
            projectTypes.forEach(filterValue => filteredData.push(...projects.slice().filter(proj => proj.types.includes(filterValue))))
            finalData = filteredData.filter((value, index, self) => index === self.findIndex(t => t.id === value.id))
        }

        setfilteredProjects(finalData)
    }, [projectTypes, projects])

    const handleClick = (platform) => {
        ReactGA.event({
            category: 'Project Links',
            action: 'Click',
            label: platform,
        })
    }

    const cards = () => filteredProjects.map((pro) => {
        const { id, name, photos } = pro

        return <li id={id} className='cards-item' key={`card ${id}`}>
            <div className='procard'>
                <Link onClick={handleClick} to={`#portfolio/${id}`}>
                    <div>
                        <img className='card-image' src={require(`/public/projs/${id}/${photos[0]}`)} alt={name} />
                    </div>
                </Link>
                <div className='card-content'>
                    <Link onClick={handleClick} to={`#portfolio/${id}`}>
                        <h3 className='card-title'>{name}</h3>
                    </Link>
                    <Link onClick={handleClick} className='btn card-btn' to={`#portfolio/${id}`}>
                        Read More
                    </Link>
                </div>
            </div>
        </li>
    })

    return <div>
        <h2>
            {projectTypes.length > 1 ? projectTypes.join(' & ') : projectTypes} Portfolio
        </h2>
        <div className='dual-filter'>
            <div>
                <button className={`filter-pill ${projectTypes.includes('Design') ? 'selected' : ''}`} onClick={() => setProjType('Design')} type='button'>
                    Design
                </button>
                <button className={`filter-pill ${projectTypes.includes('Development') ? 'selected' : ''}`} onClick={() => setProjType('Development')} type='button'>
                    Development
                </button>
            </div>
        </div>
        {isLoaded ? <ul className='cards'>{cards()}</ul> : <InnerLoader />}
    </div>
}

export default ProCards
