import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import Header from './Header.js'
import Footer from './Footer.js'
import bootstrapMinCss from './bootstrap.min.css'
import indexCss from './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>PyCon APAC 2018</title>
    </Helmet>
    <Header />
    <div className="container">{children()}</div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
