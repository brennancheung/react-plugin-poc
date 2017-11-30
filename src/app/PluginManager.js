import React from 'react'
import { flatten } from 'lodash'
import {
  Link,
  Switch,
  Route
} from 'react-router-dom'
import { pluck } from './util/fp'

const renderPageLink = (page, idx) => (
  <li key={idx}><Link to={page.link}>{page.name}</Link></li>
)

const renderPageRoute = (page, idx) => {
  const routeParams = {
    path: page.link,
    exact: !!page.exactMatch,
    component: page.component
  }
  return <Route key={idx} {...routeParams} />
}

function PluginManager () {
  let plugins = []

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

export default manager
