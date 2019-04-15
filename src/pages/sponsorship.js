import Helmet from 'react-helmet'
import React from 'react'
import { Button } from 'reactstrap'

import ContentCard from '../components/ContentCard.js'
import merlionPng from '../images/merlion.png'

const SponsorshipPage = () => (
  <div className="container">
    <Helmet>
      <title>Sponsorship | PyCon SG 2019</title>
    </Helmet>

    <ContentCard>
      <h1>Sponsorship</h1>
      <p>
        PyCon APAC 2018 would like to invite sponsors to support the efforts and
        financial resources required to run the conference.
      </p>
      <p>
        By sponsoring PyCon APAC 2018, you will be providing invaluable support
        to the establishment of an important Free and Open Source Software
        Community Conference.
      </p>
      <p>
        In order to ensure a successful conference the community needs to
        address a wide range of logistical and organisational challenges. PyCon
        attendees sometimes require assistance with expenses especially student
        attendees, and sponsorship enables us to support those who would
        otherwise be unable to attend.
      </p>
      <p>
        The attendees of PyCon Singapore will include professional developers
        from large enterprises and smaller firms as well as people from
        academia. Delegates come to present their latest developments, get
        feedback from their peers, discuss future directions and actually sit
        down and work together on improving their software.
      </p>
      <p>
        With Python already becoming a major enterprise programming language and
        platform, sponsoring PyCon APAC 2018 is an excellent opportunity to
        demonstrate industry leadership in this part of the world.
      </p>
    </ContentCard>

    <ContentCard>
      <h2>Platinum Sponsor</h2>
      <ul>
        <li>
          Sponsorship amount: <b>S$5,000</b>
        </li>
        <li>Large company logo on banner in the conference venue</li>
        <li>Exposure as Platinum sponsor on the PyCon APAC 2018 website</li>
        <li>Company name on press releases and pre-event mailings</li>
        <li>Booth in the reception/exhibition area</li>
        <li>Large tote bag insert (to be provided by sponsor)*</li>
        <li>3 conference passes</li>
      </ul>
    </ContentCard>

    <ContentCard>
      <h2>Gold Sponsor</h2>
      <ul>
        <li>
          Sponsorship amount: <b>S$3,000</b>
        </li>
        <li>Medium company logo on banner in the conference venue</li>
        <li>Exposure as Gold sponsor on the PyCon APAC 2018 website</li>
        <li>Company name on press releases and pre-event mailings</li>
        <li>Booth in the reception/exhibition area</li>
        <li>Small tote bag insert (to be provided by sponsor)*</li>
        <li>2 conference passes</li>
      </ul>
    </ContentCard>

    <ContentCard>
      <h2>Silver Sponsor</h2>
      <ul>
        <li>
          Sponsorship amount: <b>S$1,000</b>
        </li>
        <li>Small company logo on banner in the conference venue</li>
        <li>Exposure as Silver sponsor on the PyCon APAC 2018 website</li>
        <li>1 conference pass</li>
      </ul>
    </ContentCard>

    <ContentCard>
      <h2>Media Sponsorship</h2>
      <ul>
        <li>
          Sponsorship amount: <b>At Cost</b>
        </li>
        <li>Supports video recording and editing for PyCon APAC 2018</li>
        <li>Sponsor logo splash at beginning of every video</li>
        <li>2 conference passes</li>
      </ul>
    </ContentCard>

    <ContentCard>
      <h2>Sponsorship Prospectus</h2>
      <p>
        For more information, please download our sponsorship prospectus or
        reach out to us directly via email at{' '}
        <a href="mailto:conference@pycon.sg">conference@pycon.sg</a>
      </p>
      <a
        class="btn btn-primary"
        href="/pdf/PyCon_APAC_Singapore_2018_Sponsorship_Prospectus.pdf"
      >
        <Button color="primary" size="lg">
          Download Sponsorship Prospectus
        </Button>
      </a>
    </ContentCard>
  </div>
)

export default SponsorshipPage
