import React from 'react'

const Instances = () => <h1>This is the Instances page</h1>

const extension = {
  name: 'instances',
  pages: [
    {
      name: 'Instances',
      link: '/instances',
      component: Instances
    }
  ]
}

export default extension
