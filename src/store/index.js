import { combineReducers } from 'redux'

import layout from './layout'

export default function createReducer(reducers = {}) {
    return combineReducers({
        layout,
        ...reducers
    })
}
