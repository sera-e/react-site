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
        url: 'https://drive.google.com/drive/folders/17zqHLL0oNNw2bwe4gb4vTe4oYwGPjgvp',
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
        icon: 'linkedin',
        name: 'LinkedIn'
    },
    {
        url: 'https://codepen.io/serae',
        icon: 'codepen',
        name: 'CodePen'
    },
    {
        url: 'https://github.com/sera-e',
        icon: 'github-alt',
        name: 'GitHub'
    }
]

export const nav = (currentpage) => {
    const filteredNavLinks = navLinks.filter((nav) => nav.name.toLowerCase() !== (currentpage || '').toLowerCase())

    return filteredNavLinks.map((navLink) => {
        const { url, name } = navLink

        return <li key={name}>
            <Link to={url} label={name}>{name}</Link>
        </li>
    })
}

export const socials = () => {
    return smLinksData.map((smLink) => {
        const { url, icon, name } = smLink

        const handleClick = (platform) => {
            ReactGA.event({
                category: 'Social Links',
                action: 'Click',
                label: platform,
            })
        }

        return <li key={icon} className='inline-block socials' onClick={handleClick}>
            <Link to={url} label={name} target='_blank'>
                <i className={`fab fa-${icon}`} />
            </Link>
        </li>
    })
}

export const toggleMenu = () => {
    document.querySelector('.site').classList.toggle('navopen')
}
