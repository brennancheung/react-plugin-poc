import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import './css/app.css'

import App from './components/App.js'
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App.js', () => {
    setTimeout(() => {
      const NewApp = require('./components/App.js').default
      render(NewApp)
    }, 1)
  })
}
