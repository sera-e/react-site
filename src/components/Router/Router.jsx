import React, { Component } from 'react'
import { compose } from 'redux'
import { BrowserRouter, HashRouter, Switch, Redirect, withRouter } from 'react-router-dom'

import Home from '../Home'
import About from '../About'
import Info from '../Info'
import Pro from '../Pro'
import Biz from '../Biz'
import Err from '../Err'

import Route from './Route'

class Router extends Component {

    render() {
        const { location } = this.props
        const { hash } = location
        const segments = hash.replace(/^#\//,'').toLowerCase().split('/')
        const Extended = segments.slice(0).join('/')

        return <div key='page-router'>
            <BrowserRouter>
                <Switch>
                    <Route path='/home'>
                        <Redirect to='#/' />
                    </Route>
                    <Route path='/about'>
                        <Redirect to='#/about' />
                    </Route>
                    <Route path='/contact'>
                        <Redirect to='#/contact' />
                    </Route>
                    <Route path='/portfolio'>
                        <Redirect to='#/portfolio' />
                    </Route>
                    <Route exact path='/card'>
                        <Redirect to='#/card' />
                    </Route>
                    <Route path='/secret'>
                        <Redirect to='#/secret' />
                    </Route>
                </Switch>
            </BrowserRouter>
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
                    <Route path='/(error|*)'>
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

