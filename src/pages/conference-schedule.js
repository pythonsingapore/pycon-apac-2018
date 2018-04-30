import Helmet from 'react-helmet'
import React from 'react'

import ContentCard from '../components/ContentCard.js'

const ConferenceSchedulePage = () => (
  <div className="container">
    <Helmet>
      <title>Conference Schedule | PyCon APAC 2018</title>
    </Helmet>
    <ContentCard>
      <h1>Conference Schedule</h1>
      <p>TODO: Put in similar schedule like AWS Summit has</p>
    </ContentCard>
  </div>
)

export default ConferenceSchedulePage
