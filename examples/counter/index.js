import React from 'react'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

const paperStyle = {
  padding: '2em',
}

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount () {
    const tick = () => { this.setState({ count: this.state.count + 1 }) }
    setInterval(tick, 1000)
  }

  render () {
    return (
      <div>
        <Paper style={paperStyle}>
          <Typography type="headline">Counter Example</Typography>
          <br />
          <Typography type="headline">{this.state.count}</Typography>
        </Paper>
      </div>
    )
  }
}

const extension = {
  name: 'counter',
  pages: [
    {
      name: 'Counter Example',
      link: '/counter',
      component: Counter,
    }
  ]
}

export default extension
