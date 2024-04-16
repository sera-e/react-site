import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { thunk } from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createReducer from './store'
import App from './App'

const store = createStore(
    createReducer({}),
    applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
    <BrowserRouter basename={'/'}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    </React.StrictMode>
)
