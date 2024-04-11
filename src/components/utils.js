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

        return <li key={name}><a href={url}>{name}</a></li>
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

export const proCards = (proData) => proData.map((pro) => {
    const {id, name, type, client, story, tools, hardskills, softskills, photos, url, isHosted = false } = pro

    return <li className='cards_item' key={id+name+type+client+story+tools+hardskills+softskills}>
        <div className='procard'>
            <div className='card_image'>
                <img src={isHosted ? '' : photos[0]} alt={name} />
            </div>
            <div className='card_content'>
                <h3 class='card_title'>{name}</h3>
                {/* <p class='card_text'></p> */}
                <a class='btn card_btn' href={url} target='_blank' rel='noreferrer'>View Source</a>
            </div>
        </div>
    </li>
})

export const toggleMenu = () => {
    document.querySelector('.top').classList.toggle('open')
    document.querySelector('.site').classList.toggle('navopen')
}