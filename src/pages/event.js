import Helmet from 'react-helmet'
import React from 'react'
import Link from 'gatsby-link'

import ContentCard from '../components/ContentCard.js'


const EventPage = props => (
  <div className="container">
    <Helmet>
      <title>Event | PyCon SG 2019</title>
    </Helmet>
    <ContentCard>
      <h1>Event</h1>
      <ul>
        <li><Link to="/edu-summit/">Education Summit</Link></li>
        <li><Link to="/young-coders/">Young Coders&rsquo; Workshops</Link></li>
        <li><Link to="/code-of-conduct/">Code of Conduct</Link></li>
      </ul>
    </ContentCard>
  </div>
)

export default EventPage
