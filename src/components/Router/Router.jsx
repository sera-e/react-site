import React, { Component } from 'react'
import { compose } from 'redux'
import { HashRouter, Switch, withRouter } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Info from '../Info'
import Pro from '../Pro'
import Biz from '../Biz'
import Err from '../Err'

import Route from './Route'

class Router extends Component {

    componentDidMount = () => {
        const { location } = this.props
        const { pathname } = location
        const url = '/'
        const hash = '#'
        if (pathname.length > 1) window.location.href = url + hash + pathname
    }

    render() {
        const { location } = this.props
        console.log(location)
        const { hash } = location
        const segments = hash.replace(/^#\//,'').toLowerCase().split('/')
        const Extended = segments.slice(0).join('/')

        return <div key='page-router'>
            <HashRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/(home|index)(/*)'>
                        <Home />
                    </Route>
                    <Route path='/about/:aboutId?'>
                        <About key={Extended} />
                    </Route>
                    <Route path='/contact(/*)'>
                        <Info />
                    </Route>
                    <Route path='/portfolio/:portfolioId?'>
                        <Pro portfolioId={Extended} key={Extended} />
                    </Route>
                    <Route path='/card'>
                        <Biz />
                    </Route>
                    <Route path='/secret'>
                    </Route>
                    <Route path='/*'>
                        <Err />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    }
}

export default compose(
    withRouter
)(Router)

