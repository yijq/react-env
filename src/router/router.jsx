import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Bundle from './Bundle'

import Home from 'bundle-loader?lazy&name=home!../pages/Home/Home.jsx'
import About from 'bundle-loader?lazy&name=about!../pages/About/About.jsx'
import NotFound from 'bundle-loader?lazy&name=notfound!../pages/NotFound/NotFound.jsx'

const Loading = () => <h2>Loading...</h2>

const createComponent = (component) => () => (
  <Bundle load={component}>
      {
          (Component) => Component ? <Component/> : <Loading/>
      }
  </Bundle>
);

const getRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/about`}>About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`/`} component={createComponent(Home)}/>
        {/* <Route exact path={`/`} component={Home}/> */}
        <Route path={`/about`} component={createComponent(About)}/>
        {/* <Route path={`/about`} component={About}/> */}
        <Route component={createComponent(NotFound)} />
      </Switch>
    </div>
  </Router>
)

export default getRouter