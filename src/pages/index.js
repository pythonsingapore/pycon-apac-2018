import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import headerJpg from '../images/header.jpg'

const IndexPage = () => (
  <div>
    <Helmet title="PyCon APAC 2018" />
    <img src={headerJpg} style={{width: '100%'}} />
    <div className="container">
    </div>
  </div>
)

export default IndexPage
