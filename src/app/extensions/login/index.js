import React from 'react'
// import PropTypes from 'prop-types'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

import { connect } from 'react-redux'

import {
  login
} from '../../actions/keystone'

const paperStyle = { padding: '2em' }
const LoginForm = ({ username, password, handleChange, logIn }) => (
  <div>
    <Paper style={paperStyle}>
      <Typography type="headline">Log in</Typography>
      <br />
      <TextField
        label="Username"
        value={username}
        onChange={handleChange('username')}
        fullWidth
      />
      <br />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={handleChange('password')}
        fullWidth
      />
      <br />
      <br />
      <Button raised color="primary" onClick={logIn}>Log In</Button>
    </Paper>
  </div>
)

@connect(
  state => ({
    eventEmitter: state.eventEmitter,
    unscopedToken: state.unscopedToken,
  })
)
class LoginContainer extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = field => event => this.setState({ [field]: event.target.value })

  logIn = async () => {
    const { username, password } = this.state
    const { eventEmitter, dispatch } = this.props
    await dispatch(login({ username, password }))
    eventEmitter.emit('login')
  }

  render () {
    return (
      <div>
        <LoginForm
          {...this.state}
          handleChange={this.handleChange}
          logIn={this.logIn}
        />
        Unscoped token: {this.props.unscopedToken}
      </div>
    )
  }
}

const extension = {
  name: 'login',
  pages: [
    {
      name: 'Login',
      link: '/login',
      component: LoginContainer,
    }
  ]
}

export default extension
