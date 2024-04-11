import { Route as AppRoute, Redirect } from 'react-router-dom'

const Route = ({ path, exact, children, location }) => {

    const { pathname } = location

    return <AppRoute path={path} exact={exact}>
        {pathname ? children : <Redirect to={'/'} />}
    </AppRoute>
}

export default Route
