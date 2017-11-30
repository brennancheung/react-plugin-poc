import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import manager from './PluginManager'
import dashboardExtension from './extensions/dashboard'
import imagesExtension from './extensions/images'
import instancesExtension from './extensions/instances'

manager.registerPlugin(dashboardExtension)
manager.registerPlugin(imagesExtension)
manager.registerPlugin(instancesExtension)

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
