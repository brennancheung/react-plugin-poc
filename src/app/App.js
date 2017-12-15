import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import PropTypes from 'prop-types'

import manager from './PluginManager'
import dashboardExtension from './extensions/dashboard'
import imagesExtension from './extensions/images'
import instancesExtension from './extensions/instances'
import pluginLoaderExtension from './extensions/pluginLoader'
import mockInfrastructureExtension from './extensions/mockInfrastructure'
import loginExtension from './extensions/login'
import openStackExtension from './extensions/openStack'

import Main from './Main'

class App extends React.Component {
  state = { loaded: false }

  componentWillMount = () => {
    window.define = this.define
    manager.registerPlugin(dashboardExtension)
    manager.registerPlugin(imagesExtension)
    manager.registerPlugin(instancesExtension)
    manager.registerPlugin(pluginLoaderExtension)
    manager.registerPlugin(mockInfrastructureExtension)
    manager.registerPlugin(loginExtension)
    manager.registerPlugin(openStackExtension)
  }

  // The external extension will have access to this method to pass the
  // extension object into the existing core app.
  define = (plugin) => {
    if (typeof plugin === 'object') {
      manager.registerPlugin(plugin)
    } else if (typeof plugin === 'function') {
      const result = plugin().default
      manager.registerPlugin(result)
    }
    this.setState({ loaded: true })
  }

  render () {
    return (
      <Router>
        <Main extensionManager={manager} />
      </Router>
    )
  }
}

export default App
