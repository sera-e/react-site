import { createSelector } from 'reselect'

const SET_PATHNAME = 'SET_PATHNAME'

const initialState = {
    pathname: ''
}

export const setPathname = (pathname) => ({
    type: SET_PATHNAME,
    payload: pathname
})

const reducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case SET_PATHNAME:
            return {
                ...state,
                pathname: payload
            }

        default: return state
    }
}

export const selector = (state) => state.layout

export const pathname = createSelector(
    selector,
    (layout) => layout.pathname || ''
)

export default reducer
