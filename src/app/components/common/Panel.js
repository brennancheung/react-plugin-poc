import React from 'react'
import { withStyles } from 'material-ui/styles'

@withStyles({ content: { width: '100%' } })
class Panel extends React.Component {
  render () {
    const { classes, children } = this.props
    return (
      <div className={classes.content}>
        {children}
      </div>
    )
  }
}
export default Panel
