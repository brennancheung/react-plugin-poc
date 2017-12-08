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
import HostsTable from './HostsTable'

const Spacer = () => (<div style={{ minWidth: '1rem' }} />)

const mockUnauthorizedHosts = [
  { hostname: 'kubernetes-master1', ipAddress: '172.16.0.188', os: 'Ubuntu 14.04 trusty' }
]

const mockHosts = [
  {
    hostname: 'barney.platform9.sys',
    status: 'connected',
    ipAddresses: [
      { ip: '10.9.0.6', interface: 'eth0.9' },
    ],
    compute: {
      used: { used: 7.5, available: 10.8 },
      allocated: { allocated: 79.2, percent: 733 },
    },
    memory: {
      used: { used: 44.5, available: 94.4 },
      allocated: { allocated: 65.5, percent: 69 },
    },
    storage: {
      used: { used: 277, available: 491 },
      allocated: { allocated: 360, percent: 73 },
    },
    runningInstances: {
      allTenants: 36,
      currentTenant: 32,
    },
    assignedRoles: [ 'Hypervisor', 'Telemetry' ],
    availabilityZone: ''
  }
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
  hosts: mockHosts,
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

        <br />
        <br />
        <br />

        <HostsTable
          hosts={this.props.hosts}
        />
      </Panel>
    )
  }
}

export default HostsContainer
