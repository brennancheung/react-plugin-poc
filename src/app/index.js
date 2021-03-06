import React from 'react'
import ReactDOM from 'react-dom'
import EventEmitter from 'EventEmitter'
import { AppContainer } from 'react-hot-loader'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import {
  SET_THEME,
  SET_TENANTS,
  SET_UNSCOPED_TOKEN
} from './constants'

import './css/app.css'
import App from './App.js'

const emitter = new EventEmitter()
const initialState = {
  theme: 'light',
  eventEmitter: emitter,
}

emitter.on('login', () => { console.log('Login1') })

const reducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_THEME:
      return { ...state, theme: payload }

    case SET_UNSCOPED_TOKEN:
      return { ...state, unscopedToken: payload }

    case SET_TENANTS:
      return { ...state, tenants: payload }

    default:
      return state
  }
}
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App.js', () => {
    setTimeout(() => {
      const NewApp = require('./App.js').default
      render(NewApp)
    }, 1)
  })
}
