import React from 'react'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

import {
  getScopedProjects,
  getUnscopedToken
} from '../../api/keystone'

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

class LoginContainer extends React.Component {
  state = {
    username: '',
    password: '',
  }

  handleChange = field => event => this.setState({ [field]: event.target.value })

  logIn = async () => {
    const { username, password } = this.state
    const token = await getUnscopedToken({ username, password })
    const tenants = await getScopedProjects({ token })
    console.log(tenants)
  }

  render () {
    return (
      <LoginForm
        {...this.state}
        handleChange={this.handleChange}
        logIn={this.logIn}
      />
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
