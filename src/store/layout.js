import { createSelector } from 'reselect'

const SET_PATHNAME = 'SET_PATHNAME'
const SET_SCREEN_DIMENSIONS = 'SET_SCREEN_DIMENSIONS'

const initialState = {
    pathname: '',
    dimensions: null
}

export const setPathname = (pathname) => ({
    type: SET_PATHNAME,
    payload: pathname
})

export const setScreenDimensions = (dimensions) => ({
    type: SET_SCREEN_DIMENSIONS,
    payload: dimensions
})

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_PATHNAME:
            return {
                ...state,
                pathname: payload
            }
        case SET_SCREEN_DIMENSIONS:
            return {
                ...state,
                dimensions: payload
            }

        default: return state
    }
}

export const selector = (state) => state.layout

export const pathname = createSelector(
    selector,
    (layout) => layout.pathname || ''
)

export const dimensions = createSelector(
    selector,
    (layout) => layout.dimensions
)

export const minContentHeight = createSelector(
    dimensions,
    (d) => (d ? d.height : 'auto')
)

export default reducer
