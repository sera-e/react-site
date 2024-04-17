import React, { Fragment } from 'react'
import Link from '../Router/Link'
import PhotoCarousel from './carousel'
import './pro.css'

class FeaturedPro extends React.Component {

    componentDidMount() {
        setTimeout(() => { window.scrollTo(0, 0, { behavior: 'smooth' }) }, 1600)
    }

    render() {
        const { selectedProj } = this.props
        const { id, name, role, client, story, tools, hardskills, softskills, photos, url, urltype, isHosted = false } = selectedProj

        return <div id={id}>
            <Fragment>
                <h2>{name}</h2>
                <Link to='#portfolio' className='goback-btn'>
                    <i className='fa-light fa-arrow-left' />
                    <span>Go Back</span>
                </Link>
                <div className='proj-wrapper'>
                    <div className='proj-content'>
                        <div className='proj-photos'>
                            <PhotoCarousel data={selectedProj} slideDeck={photos} />
                            <Link className='btn card-btn' to={!isHosted ? url : require(`/public/projs/${id}/${url}`)} target='_blank'>
                                <span>View {urltype.toUpperCase()}</span>
                            </Link>
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
            </Fragment>
        </div>
    }
}

export default FeaturedPro
