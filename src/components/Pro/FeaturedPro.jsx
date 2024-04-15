import React, { Fragment } from 'react'
import './pro.css'

class FeaturedPro extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            document.getElementById('root').scrollTo({ top: 0, behavior: 'smooth' })
        }, 1600)
    }

    getPhotos = (selectedProj, photos) => {
        const { id, type } = selectedProj
        return photos.map((photo) => <img key={id + type} src={require(`/public/img/${photo}`)} alt={photo} />)
    }

    render() {
        const { selectedProj, selectPro } = this.props
        const { id, name, role, client, story, tools, hardskills, softskills, photos, url, isHosted = false } = selectedProj

        return <Fragment>
            <h2>{name}</h2>
            <button onClick={() => { selectPro(null, id) }} type='button'>
                <i className='fa-light fa-arrow-left' />
                <span>Go Back</span>
            </button>
            <br/>
            <div className='proj-wrapper'>
                <div className='proj-content'>
                    <div className='proj-photos'>
                        {this.getPhotos(selectedProj, photos)}
                    </div>
                    <div className='proj-inner-content'>
                        <div>
                            {client && <h3>Client</h3>}
                            {client && <p>{client}</p>}
                            {role && <h3>My Role</h3>}
                            {role && <p>{role}</p>}
                            {story && <h3>Summary</h3>}
                            {story && <p>{story}</p>}
                            {tools && <h3>Tools</h3>}
                            {tools && <p>{tools}</p>}
                            {hardskills && <h3>Skills</h3>}
                            {hardskills && <p>{`${hardskills}${softskills ? `, ${softskills}` : ''}`}</p>}
                        </div>
                        <a className='btn card-btn' href={!isHosted ? url : require(`/public/projs/${id}/${url}`)} target='_blank' rel='noreferrer'>
                            <span>View Source</span>
                        </a>
                    </div>
                </div>
            </div>
        </Fragment>
    }
}

export default FeaturedPro
