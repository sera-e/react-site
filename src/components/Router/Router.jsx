import React, { Component } from 'react'
import { HashRouter, Switch } from 'react-router-dom'

import Home from '../Home'
import Info from '../Info'
import Pro from '../Pro'
import Err from '../Err'

import Route from './Route'

class Router extends Component {

    render() {

        return <div key='page-router'>
            <HashRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/(home|index)(/*)'>
                        <Home />
                    </Route>
                    <Route path='/(contact)(/*)'>
                        <Info />
                    </Route>
                    <Route path='/(portfolio)(/*)'>
                        <Pro />
                    </Route>
                    <Route path='/(*)'>
                        <Err />
                    </Route>
                    <Route path='*'>
                        <Err />
                    </Route>
                </Switch>
            </HashRouter>
        </div>
    }
}

export default Router
