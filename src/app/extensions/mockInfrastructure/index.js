import React from 'react'
import Typography from 'material-ui/Typography'

const Infrastructure = () => <Typography type="headline">This is the Infrastructure page</Typography>

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
