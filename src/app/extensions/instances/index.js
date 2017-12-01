import React from 'react'
import Typography from 'material-ui/Typography'

const Instances = () => <Typography type="headline">This is the Instances page</Typography>

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
