import React, { Component } from 'react'
import { compose } from 'redux'
import { HashRouter, Switch, withRouter } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Info from '../Info'
import Pro from '../Pro'
import Err from '../Err'

import Route from './Route'

class Router extends Component {

    render() {
        const { location } = this.props
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
                    <Route path='/about(/*)'>
                        <About />
                    </Route>
                    <Route path='/contact(/*)'>
                        <Info />
                    </Route>
                    <Route path='/portfolio/:portfolioId?'>
                        <Pro portfolioId={Extended} key={Extended} />
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

