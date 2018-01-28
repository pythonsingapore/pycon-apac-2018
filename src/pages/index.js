import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Button } from 'reactstrap'

import headerJpg from '../images/header.jpg'
import ContentCard from '../components/ContentCard'

const IndexPage = () => (
  <div>
    <Helmet title="PyCon APAC 2018" />
    <img src={headerJpg} style={{ width: '100%' }} />
    <div className="container">
      <ContentCard className="text-center">
        <h1>Call For Proposals</h1>
        <p>
          The time has come! PyCon APAC needs you! We are now reaching out to
          the community, asking for submissions for proposals for talks,
          lightning talks and workshops.
        </p>
        <p>
          If you would like to help to make this conference a success, please
          click the button below and send us your proposal.
        </p>
        <a href="https://www.papercall.io/pycon-apac-2018" target="_blank">
          <Button color="primary" size="lg">
            Submit Your Talk Proposal!
          </Button>
        </a>
        <p className="text-muted mt-3">
          Quick! The deadline for proposals is April 1st.
        </p>
      </ContentCard>
    </div>
  </div>
)

export default IndexPage
