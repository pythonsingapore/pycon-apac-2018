import Helmet from 'react-helmet'
import React from 'react'

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>Page Not Found | PyCon APAC 2018</title>
    </Helmet>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
