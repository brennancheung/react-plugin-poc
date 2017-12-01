import React from 'react'
import Typography from 'material-ui/Typography'

const Images = () => <Typography type="headline">This is the Images page</Typography>

const extension = {
  name: 'images',
  pages: [
    {
      name: 'Images',
      link: '/images',
      component: Images
    }
  ]
}

export default extension
