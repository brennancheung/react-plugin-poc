import React from 'react'
import { flatten } from 'lodash'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { pluck } from '../util/fp'

const Dashboard = () => <h1>This is the Dashboard page</h1>
const Images = () => <h1>This is the Images page</h1>
const Instances = () => <h1>This is the Instances page</h1>

function PluginManager () {
  let plugins = []

  const renderPageRoute = (page, idx) => {
    const routeParams = {
      path: page.link,
      exact: !!page.exactMatch,
      component: page.component
    }
    return <Route key={idx} {...routeParams} />
  }

  const renderPageLink = (page, idx) => (
    <li key={idx}><Link to={page.link}>{page.name}</Link></li>
  )

  const getAllPages = () => flatten(plugins.map(pluck('pages')))

  return {
    registerPlugin: (plugin) => {
      plugins.push(plugin)
    },

    RouteMatcher: () => (
      <Switch>
        {getAllPages().map(renderPageRoute)}
      </Switch>
    ),

    NavLinks: () => (
      <ul>
        {getAllPages().map(renderPageLink)}
      </ul>
    )
  }
}

const manager = PluginManager()

// Dashboard plugin
manager.registerPlugin({
  pages: [
    {
      name: 'Dashboard',
      link: '/',
      exactMatch: true,
      component: Dashboard,
    }
  ]
})

// Images plugin
manager.registerPlugin({
  name: 'images',
  pages: [
    {
      name: 'Images',
      link: '/images',
      component: Images
    }
  ]
})

// Instances plugin
manager.registerPlugin({
  name: 'instances',
  pages: [
    {
      name: 'Instances',
      link: '/instances',
      component: Instances
    }
  ]
})

const { NavLinks, RouteMatcher } = manager

class App extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <h1>React Plugin Architecture POC Demo</h1>
          <NavLinks />
          <RouteMatcher />
        </div>
      </Router>
    )
  }
}

export default App
