const navLinks = [
    {
        url: '/',
        name: 'Home'
    },
    {
        url: '/portfolio',
        name: 'Portfolio'
    },
    {
        url: '/contact',
        name: 'Contact'
    }
]

const smLinksData = [
    {
        url: 'https://codepen.io/serae',
        icon: 'codepen'
    },
    {
        url: 'https://dribbble.com/serae',
        icon: 'dribbble'
    },
    {
        url: 'https://linkedin.com/in/serae',
        icon: 'linkedin-in'
    },
    {
        url: 'https://github.com/sera-e',
        icon: 'github'
    }
]

export const nav = () => {
    return navLinks.map((navLink) => {
        const { url, name } = navLink

        return <li key={name}><a href={`#${url}`}>{name}</a></li>
    })
}

export const socials = () => {
    return smLinksData.map((smLink) => {
        const { url, icon } = smLink

        return <li key={icon} className='inline-block'>
            <a href={url} target='_blank' rel='noreferrer'>
                <i className={`fab fa-${icon}`}></i>
            </a>
        </li>
    })
}

export const proCards = (proData, selectPro) => proData.map((pro) => {
    const {id, name, photos } = pro

    return <li id={id} className='cards-item' key={id}>
        <div className='procard'>
            <div>
                <img className='card-image' src={require(`/public/img/${photos[0]}`)} alt={name} />
            </div>
            <div className='card-content'>
                <h3 className='card-title'>{name}</h3>
                <button className='btn card-btn' onClick={() => { selectPro(pro) }} type='button'>Read More</button>
            </div>
        </div>
    </li>
})

export const toggleMenu = () => {
    document.querySelector('.top').classList.toggle('open')
    document.querySelector('.site').classList.toggle('navopen')
}