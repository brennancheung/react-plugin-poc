import React from 'react'

const Images = () => <h1>This is the Images page</h1>

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
