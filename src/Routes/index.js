import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './index.scss'
import loadable from '@loadable/component'

const Home =loadable(() => import('../page/Home'))
const PLP =loadable(() => import('../page/PLP'))
const PDP =loadable(() => import('../page/PDP'))
const Login =loadable(() => import('../page/Login'))
const Header =loadable(() => import('../page/Header'))
const Footer =loadable(() => import('../page/Footer'))
const Books =loadable(() => import('../page/Books'))
const SignIn =loadable(() => import('../page/Register/SignIn'))
const SignUp =loadable(() => import('../page/Register/SignUp'))
const NotFound =loadable(() => import('../page/NotFound'))
const LogOut =loadable(() => import('../page/LogOut'))
const DataStore =loadable(() => import('../page/DataStore'))

// import { Home } from '../page/Home'
// import { PLP } from '../page/PLP'
// import { PDP } from '../page/PDP'
// import { Login } from '../page/Login'
// import {Header} from '../page/Header'
// import Footer from '../page/Footer'
// import { Books } from '../page/Books'
// import SignIn from '../page/Register/SignIn'
// import SignUp from '../page/Register/SignUp'
// import NotFound from '../page/NotFound'
// import LogOut from '../page/LogOut'

class Routes extends React.Component {
  render() {
    return (
      <>
        <div className="header"><Header /></div>
        <div>
          <Switch>
            {/* <Route exact path="/Login/Books/PLP/PDP">
              <PDP />
            </Route> */}
            {/* <Route exact path="Login/Books/PLP/PDP" Component={PDP} /> */}
            <Route
              path="/PDP/:product_id?"
              exact
              render={routeProps => {
                return <PDP {...routeProps}  />
              }}
            />
            {/* <Route exact path="/Login/Books/PLP">
              <PLP />
            </Route> */}
            <Route
              path="/PLP/:author_id?"
              exact
              render={routeProps => {
                return <PLP {...routeProps}  />
              }}
            />
            <Route exact path="/Books">
              <Books />
            </Route>
            {/* <Route exact path="/Login">
              <Login />
            </Route> */}
            <Route
              path="/Login"
              exact
              render={routeProps => {
                return <Login {...routeProps}  />
              }}
            />
            <Route exact path="/SignIn">
              <SignIn />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/LogOut">
              <LogOut />
            </Route>
            <Route exact path="/DataStore">
              <DataStore />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
            {/* <Route exact path="/Register">
              <Register />
            </Route> */}
          </Switch>
        </div>
        <div className="footer"><Footer /></div>
      </>
    )
  }
}

export default Routes
export { Routes }
