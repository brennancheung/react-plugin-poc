import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from './components/Navbar'

import manager from './PluginManager'

import dashboardExtension from './extensions/dashboard'
import imagesExtension from './extensions/images'
import instancesExtension from './extensions/instances'

function loadScript (url) {
  return new Promise(function (resolve, reject) {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

const { getNavLinks, RouteMatcher } = manager

manager.registerPlugin(dashboardExtension)
manager.registerPlugin(imagesExtension)
manager.registerPlugin(instancesExtension)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  // The external extension will have access to this method to pass the
  // extension object into the existing core app.
  define = (pluginObj) => {
    manager.registerPlugin(pluginObj)
    this.setState({ loaded: true })
  }

  componentDidMount () {
    window.define = this.define
    setTimeout(() => { loadScript('http://www.brennancheung.com/extensions/foo.js') }, 2000)
    setTimeout(() => { loadScript('http://www.brennancheung.com/extensions/bar.js') }, 4000)
  }

  render () {
    return (
      <Router>
        <Navbar links={getNavLinks()} component={<RouteMatcher />} />
      </Router>
    )
  }
}

export default App
