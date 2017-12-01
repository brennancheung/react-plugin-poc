import React from 'react'
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'

import loadScript from '../../util/loadScript'

const paperStyle = {
  padding: '2em',
}

class PluginLoader extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      url: ''
    }
  }

  handleTextFieldChange = (event) => {
    this.setState({ url: event.target.value })
  }

  loadPlugin = () => {
    loadScript(this.state.url)
  }

  render () {
    return (
      <div>
        <Paper style={paperStyle}>
          <Typography type="headline">Plugin Loader</Typography>
          <br />
          <Typography type="subheading">Enter the URL of a plugin to load</Typography>
          <br />
          <TextField
            label="Plugin URL"
            value={this.state.url}
            onChange={this.handleTextFieldChange}
            fullWidth
          />
          <br />
          <br />
          <Button raised color="primary" onClick={this.loadPlugin}>Load Plugin</Button>
        </Paper>
      </div>
    )
  }
}

const extension = {
  name: 'pluginLoader',
  pages: [
    {
      name: 'Plugin Loader',
      link: '/loader',
      component: PluginLoader,
    }
  ]
}

export default extension
