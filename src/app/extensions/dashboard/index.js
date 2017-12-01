import React from 'react'
import Typography from 'material-ui/Typography'

const Dashboard = () => <Typography type="headline">This is the Dashboard page</Typography>

const extension = {
  name: 'dashboard',
  pages: [
    {
      name: 'Dashboard',
      link: '/',
      exactMatch: true,
      component: Dashboard,
    }
  ]
}

export default extension
