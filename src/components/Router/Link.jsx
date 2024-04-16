import React from 'react'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { pathname } from '../../../src/store/layout'

const fullURL = new RegExp(/^(ftp|http|https):\/\//)
const validRootLevelPaths = ['handler', 'openenrollment', 'customenrollment']

const getReferrer = (path = '') => {
    const slug = path.replace('/app/', '')
    return slug.replace(/\//g, '-').toLowerCase()
}

const AppLink = ({ to = '', newWindow = 'auto', children, label, theme, appPath, referrer, activeClassName, ...props }) => {

    const isToObj = (typeof to === 'object')

    let useLinkComponent = false
    let includeReferrer = false
    if (isToObj) {
        useLinkComponent = true
    } else {
        if (to && to.charAt(0) === '/' && !to.includes('#')) {
            const [, rootLevel] = to.split('/')
            useLinkComponent = !validRootLevelPaths.includes(rootLevel.toLowerCase())
        }
        if (!to.includes('?')) {
            includeReferrer = true
        }
    }

    const isExternal = (to && fullURL.test(to))
    const toLink = to.pathname || to
    const linkProps = { href: toLink, ...props }

    if (isExternal && newWindow === 'auto') {
        linkProps.target = '_blank'
    } else if (newWindow === true || newWindow === '_blank') {
        linkProps.target = '_blank'
    }

    const LinkComponent = activeClassName ? NavLink : Link

    return (useLinkComponent && newWindow !== true)
        ? <LinkComponent to={isToObj ? to : toLink} aria-label={label} {...props}>
            {children}
        </LinkComponent>
        : <a aria-label={label} rel='noopener noreferrer' {...linkProps}>
            {children}
        </a>
}

export default compose(
    connect((state) => ({ appPath: pathname(state) }))
)(AppLink)
