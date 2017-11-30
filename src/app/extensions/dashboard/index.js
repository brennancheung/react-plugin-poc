import React from 'react'

const Dashboard = () => <h1>This is the Dashboard page</h1>

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
