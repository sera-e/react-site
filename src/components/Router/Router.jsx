import React, { Component } from 'react'
import { compose } from 'redux'
import { BrowserRouter, Switch, withRouter } from 'react-router-dom'

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
            <h1>{`Sera Eben's website - ${String(segments.slice(0, 1))} page`}</h1>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
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
                    <Route path='/secret'>
                    </Route>
                    <Route path='/*'>
                        <Err />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    }
}

export default compose(
    withRouter
)(Router)

