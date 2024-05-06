import Link from './Router/Link'
import ReactGA from 'react-ga4'

const navLinks = [
    {
        url: '#home',
        name: 'Home'
    },
    {
        url: '#about',
        name: 'About'
    },
    {
        url: '#portfolio',
        name: 'Portfolio'
    },
    {
        url: 'https://drive.google.com/drive/folders/17zqHLL0oNNw2bwe4gb4vTe4oYwGPjgvp?usp=sharing',
        name: 'Resume'
    },
    {
        url: '#contact',
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

export const nav = (currentpage) => {
    const filteredNavLinks = navLinks.filter((nav) => nav.name.toLowerCase() !== (currentpage || '').toLowerCase())

    return filteredNavLinks.map((navLink) => {
        const { url, name } = navLink

        return <li key={name}>
            <Link to={url}>{name}</Link>
        </li>
    })
}

export const socials = () => {
    return smLinksData.map((smLink) => {
        const { url, icon } = smLink

        const handleClick = (platform) => {
            ReactGA.event({
                category: 'Social Links',
                action: 'Click',
                label: platform,
            })
        }

        return <li key={icon} className='inline-block socials' onClick={handleClick}>
            <Link to={url} target='_blank'>
                <i className={`fab fa-${icon}`} />
            </Link>
        </li>
    })
}

export const toggleMenu = () => {
    document.querySelector('.top').classList.toggle('open')
    document.querySelector('.site').classList.toggle('navopen')
}
