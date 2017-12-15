import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'

@connect(state => ({ eventEmitter: state.eventEmitter, state }))
class OpenStack extends React.Component {
  componentDidMount () {
    const { eventEmitter } = this.props
    console.log('OpenStack mounted')
    console.log('-------------')
    console.log(eventEmitter)
    console.log('=============')
    eventEmitter.on('login', () => {
      console.log('Detected login event from another plugin')
    })
  }

  render () {
    return null
  }
}

const extension = {
  name: 'openstack',
  pages: [
  ],
  eventHandlerComponent: OpenStack,
}

export default extension
