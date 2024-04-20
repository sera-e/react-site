import Link from './Router/Link'

const navLinks = [
    {
        url: 'home',
        name: 'Home'
    },
    {
        url: 'about',
        name: 'About'
    },
    {
        url: 'portfolio',
        name: 'Portfolio'
    },
    {
        url: 'contact',
        name: 'Contact'
    }
]

const smLinksData = [
    {
        url: 'https://linkedin.com/in/serae',
        icon: 'linkedin'
    },
    {
        url: 'https://codepen.io/serae',
        icon: 'codepen'
    },
    {
        url: 'https://github.com/sera-e',
        icon: 'github-alt'
    }
]

export const nav = () => {
    return navLinks.map((navLink) => {
        const { url, name } = navLink

        return <li key={name}>
            <Link to={`#${url}`}>{name}</Link>
        </li>
    })
}

export const socials = () => {
    return smLinksData.map((smLink) => {
        const { url, icon } = smLink

        return <li key={icon} className='inline-block socials'>
            <Link to={url} target='_blank'>
                <i className={`fab fa-${icon}`} />
            </Link>
        </li>
    })
}

export const proCards = (proData) => proData.map((pro) => {
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

export const toggleMenu = () => {
    document.querySelector('.top').classList.toggle('open')
    document.querySelector('.site').classList.toggle('navopen')
}
