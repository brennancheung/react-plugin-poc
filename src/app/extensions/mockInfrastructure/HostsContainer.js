import React from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import AppBar from 'material-ui/AppBar'
import Button from 'material-ui/Button'
import Toolbar from 'material-ui/Toolbar'
import RefreshIcon from 'material-ui-icons/refresh'

import Panel from '../../components/common/Panel'
import SearchBar from '../../components/common/SearchBar'
import UnauthorizedHostsTable from './UnauthorizedHostsTable'

const Spacer = () => (<div style={{ minWidth: '1rem' }} />)

const mockUnauthorizedHosts = [
  { hostname: 'kubernetes-master1', ipAddress: '172.16.0.188', os: 'Ubuntu 14.04 trusty' }
]

@withStyles(theme => {
  return {
    toolBar: {
      backgroundColor: theme.palette.common.faintBlack,
      justifyContent: 'space-between'
    }
  }
})
@connect(state => ({
  unauthorizedHosts: mockUnauthorizedHosts,
}))
class HostsContainer extends React.Component {
  authorizeHost = (hostname) => () => {
    console.log(`authorize ${hostname}`)
  }

  render () {
    const { classes } = this.props
    return (
      <Panel>
        <AppBar position="static" color="inherit">
          <Toolbar className={classes.toolBar}>
            <Typography type="subheading" color="inherit">Newly added hosts</Typography>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <SearchBar />
              <Spacer />
              <Button>
                <RefreshIcon />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <UnauthorizedHostsTable
          hosts={this.props.unauthorizedHosts}
          authorizeHost={this.authorizeHost}
        />
      </Panel>
    )
  }
}

export default HostsContainer
