import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'

import manager from './PluginManager'
import dashboardExtension from './extensions/dashboard'
import imagesExtension from './extensions/images'
import instancesExtension from './extensions/instances'

manager.registerPlugin(dashboardExtension)
manager.registerPlugin(imagesExtension)
manager.registerPlugin(instancesExtension)

const { getNavLinks, RouteMatcher } = manager

class App extends React.Component {
  render () {
    return (
      <Router>
        <Navbar links={getNavLinks()} component={<RouteMatcher />} />
      </Router>
    )
  }
}

export default App
