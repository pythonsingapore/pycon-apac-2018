import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Button } from 'reactstrap'

import ContentCard from '../components/ContentCard'
import KeynoteSpeakerCard from '../components/KeynoteSpeakerCard'

import headerJpg from '../images/header.jpg'
import KeynoteAlanJpg from '../images/keynoteAlan.jpg'
import KeynoteIvesJpg from '../images/keynoteYves.jpg'
import KeynoteKatharineJpg from '../images/keynoteKatharine.jpg'
import KeynoteRadimJpg from '../images/keynoteRadim.jpg'

const IndexPage = () => (
  <div>
    <Helmet title="PyCon APAC 2018" />
    <img src={headerJpg} style={{ width: '100%' }} />
    <div className="container">
      <ContentCard className="text-center">
        <h1>Ticket Sales Are Open!</h1>
        <p>
          If you would like to attend the conference, you may now do so on our
          event page at eventnook.com:
        </p>
        <a href="https://www.eventnook.com/event/pyconapac2018" target="_blank">
          <Button color="primary" size="lg">
            Get Your Ticket Now!
          </Button>
        </a>
        <p className="text-muted mt-3">
          Note: Tickets are available until May 28 or as long as stocks last. We
          have no door rate on the event day, so please get your ticket in
          advance.
        </p>
      </ContentCard>

      <ContentCard className="text-center">
        <h1>Call For Proposals Closed</h1>
        <p>
          We would like to thank more than 120 awesome Python community members
          from all over the world to take the time and submit a proposal! This
          conference would not be possible without your invaluable contribution.
        </p>
        <p>
          As our venue only has limited space, we were not able to accept all
          proposals. If your proposal has not been selected, we hope you will
          submit a new proposal next year and of course we hope to meet you at
          the conference as an attendee never the less :)
        </p>
      </ContentCard>
      <ContentCard className="text-center">
        <h1>Meet Our Keynote Speakers!</h1>
      </ContentCard>

      <KeynoteSpeakerCard
        speakerImage={KeynoteKatharineJpg}
        speakerName="Katharine Jarmul"
      >
        <div>
          <p>
            Katharine Jarmul is a pythonista and founder of&nbsp;
            <a href="http://kjamistan.com">Kjamistan</a>, a data science and
            machine learning consulting company in Berlin, Germany. She has been
            using Python since 2008 to solve and create problems. She helped
            form the first PyLadies chapter in Los Angeles in 2010, and
            co-authored an O'Reilly book along with several video courses on
            Python and data. She enjoys following the latest developments in
            machine learning, security, natural language processing and workflow
            automation infrastructure and is generally chatty and crabby on
            Twitter, where you can keep up with her latest shenanigans (<a href="https://twitter.com/kjam">
              @kjam
            </a>).
          </p>
        </div>
      </KeynoteSpeakerCard>

      <KeynoteSpeakerCard
        speakerImage={KeynoteAlanJpg}
        speakerName="Alan Descoins"
      >
        <div>
          <p>
            Alan Descoins is the CTO of{' '}
            <a href="https://tryolabs.com/">Tryolabs</a>. He holds a Computer
            Engineering degree and has +7 years of experience doing consultancy
            for companies in Silicon Valley, mostly focused on developing robust
            backends, scalable infrastructures and Machine Learning based
            algorithms, using the Python stack. Currently, he acts as the main
            consultant for every project Tryolabs does, and is an active member
            of the R&D team. Alan is a Python expert with deep understanding of
            Machine Learning related technologies.
          </p>
        </div>
      </KeynoteSpeakerCard>

      <KeynoteSpeakerCard
        speakerImage={KeynoteIvesJpg}
        speakerName="Dr. Yves J. Hilpisch"
      >
        <div>
          <p>
            Dr. Yves J. Hilpisch is founder and managing partner of{' '}
            <a href="http://tpq.io">The Python Quants</a>, a group focusing on
            the use of open source technologies for financial data science,
            artificial intelligence, algorithmic trading and computational
            finance. He is the author of the books
          </p>
          <ul>
            <li>
              Python for Finance (O'Reilly, 2014), * Derivatives Analytics with
              Python (Wiley, 2015)
            </li>
            <li>Derivatives Analytics with Python (Wiley, 2015)</li>
            <li>Listed Volatility and Variance Derivatives (Wiley, 2017)</li>
          </ul>
          <p>
            Yves lectures on computational finance at the{' '}
            <a href="http://cqf.com">CQF Program</a>, on algorithmic trading at
            the <a href="http://www.quantinsti.com">EPAT Program</a>
            and on data science at{' '}
            <a href="http://htwsaar.de">
              htw saar University of Applied Sciences
            </a>. He is also the director of the first online training program
            leading to a{' '}
            <a href="http://certificate.tpq.io">
              University Certificate in Python for Algorithmic Trading
            </a>. Yves has written the financial analytics library{' '}
            <a href="http://dx-analytics.com">DX Analytics</a> and organizes
            meetups, conferences and bootcamps about Python for quantitative
            finance in London and New York. He has given keynote speeches at
            technology conferences in the United States, Europe and Asia.
          </p>
        </div>
      </KeynoteSpeakerCard>
    </div>
  </div>
)

export default IndexPage
