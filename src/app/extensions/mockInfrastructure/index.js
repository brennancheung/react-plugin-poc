import React from 'react'
// import Grid from 'material-ui/Grid'
import Tabs, { Tab } from 'material-ui/Tabs'
// import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'
import HostsContainer from './HostsContainer'

const TabContainer = ({ children }) => (<div style={{ paddingTop: '1rem' }}>{children}</div>)

const mapStateToProps = (state, ownProps) => ({
  data: {}
})
@withStyles({
  fullWidth: { width: '100%', padding: '0' }
})
@connect(mapStateToProps)
class Infrastructure extends React.Component {
  state = {
    selectedTab: 'hosts'
  }

  setTab = (event, value) => this.setState({ selectedTab: value })

  render () {
    const { selectedTab } = this.state
    const { classes } = this.props
    return (
      <div className={classes.fullWidth}>
        <Tabs
          value={selectedTab}
          onChange={this.setTab}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Hosts" value="hosts" className={classes.fullWidth} />
          <Tab label="Host Aggregates" value="hostAggregates" />
        </Tabs>
        {selectedTab === 'hosts' && <TabContainer><HostsContainer /></TabContainer>}
        {selectedTab === 'hostAggregates' && <TabContainer>Host Aggregates</TabContainer>}
      </div>
    )
  }
}

const extension = {
  name: 'infrastructure',
  pages: [
    {
      name: 'Infrastructure',
      link: '/infrastructure',
      exactMatch: true,
      component: Infrastructure,
    }
  ]
}

export default extension
