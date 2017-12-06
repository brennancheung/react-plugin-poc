import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'

import Navbar from './components/Navbar'

@withRouter
@connect(state => ({ theme: state.theme }))
class Main extends React.Component {
  render () {
    const theme = createMuiTheme({
      palette: {
        type: this.props.theme,
      }
    })

    const { extensionManager } = this.props
    const { getNavLinks, RouteMatcher } = extensionManager

    return (
      <MuiThemeProvider theme={theme}>
        <Navbar links={getNavLinks()} component={<RouteMatcher />} />
      </MuiThemeProvider>
    )
  }
}

export default Main
