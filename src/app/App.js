import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

// import loadScript from './util/loadScript'

import Navbar from './components/Navbar'

import manager from './PluginManager'

import dashboardExtension from './extensions/dashboard'
import imagesExtension from './extensions/images'
import instancesExtension from './extensions/instances'
import pluginLoaderExtension from './extensions/pluginLoader'
import mockInfrastructureExtension from './extensions/mockInfrastructure'

const { getNavLinks, RouteMatcher } = manager

manager.registerPlugin(dashboardExtension)
manager.registerPlugin(imagesExtension)
manager.registerPlugin(instancesExtension)
manager.registerPlugin(pluginLoaderExtension)
manager.registerPlugin(mockInfrastructureExtension)

const theme = createMuiTheme({
  palette: {
    type: 'light'
  }
})

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
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

  componentDidMount () {
    window.define = this.define
    // setTimeout(() => { loadScript('http://www.brennancheung.com/extensions/foo.js') }, 6000)
  }

  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <Navbar links={getNavLinks()} component={<RouteMatcher />} />
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App
