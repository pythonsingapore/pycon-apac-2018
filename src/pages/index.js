import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <div>
    <Helmet title="PyCon APAC 2018" />
    <h1>PyCon APAC 2018</h1>
    <div className="card">
      <div className="card-body">
        <p>
          <b>Conference:</b>
          <br />
          May 31st - June 2nd
        </p>
        <p>
          <b>Venue:</b>
          <br />
          National University of Singapore / School of Computing
        </p>
      </div>
    </div>
  </div>
)

export default IndexPage
