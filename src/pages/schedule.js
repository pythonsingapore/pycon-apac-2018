import Helmet from 'react-helmet'
import React from 'react'

import ContentCard from '../components/ContentCard.js'
import ULListStyleNone from '../components/ULListStyleNone.js'

const SchedulePage = () => (
  <div className="container">
    <Helmet>
      <title>Schedule | PyCon APAC 2018</title>
    </Helmet>
    <ContentCard>
      <h1>Conference Schedule</h1>
      <p>
        Soon, you will find the exact schedule for PyCon APAC 2018 on this page.
        We are still accepting/rejecting some late talk proposals, so we are not
        able to finalise the schedule at this point in time, until then you can
        find the preliminary list of speakers and talks on this page.
      </p>
    </ContentCard>
    <ContentCard>
      <h2>Data Science</h2>
      <ULListStyleNone style={{ maxWidth: '800px' }}>
        <li>
          <b>
            Implementing Reinforcement Learning for Marketing Channel
            Optimization with Python
          </b>
          <br />
          <i>by Novia Listiyani Wirhaspati</i>
        </li>
        <li>
          <b>
            How to deploy machine learning models to production (frequently and
            safely)
          </b>
          <br />
          <i>by David Tan</i>
        </li>
        <li>
          <b>GloVe-Python for Word Representation</b>
          <br />
          <i>by Loveme Felicilda</i>
        </li>
        <li>
          <b>
            Crypto-AI: A Guide to Building Private and Decentralized AI Systems
            by Mixing Cryptography, Blockchains and AI.
          </b>
          <br />
          <i>by Satish Shankar</i>
        </li>
        <li>
          <b>
            Tracking the tracker: Time Series Analysis in Python From First
            Principles
          </b>
          <br />
          <i>by Kenneth Emeka Odoh</i>
        </li>
        <li>
          <b>
            Teaching Computers ABCs: A Quick Intro to Natural Language
            Processing
          </b>
          <br />
          <i>by Loryfel Nunez</i>
        </li>
        <li>
          <b>Better Care and Feeding of Machine Learning Models</b>
          <br />
          <i>by Jeanne Choo</i>
        </li>
        <li>
          <b>
            Detecting offensive messages using Deep Learning: A micro-service
            based approach
          </b>
          <br />
          <i>by Alizishaan Khatri</i>
        </li>
        <li>
          <b>
            Streaming data processing pipelines with Apache Beam [in Python,
            naturally!]
          </b>
          <br />
          <i>by Markku Lepisto</i>
        </li>
        <li>
          <b>
            How to understand user behaviour using Multiple Linear Regression?
          </b>
          <br />
          <i>by Sarthak Deshwal</i>
        </li>
        <li>
          <b>Building Siri : AI Powered Chatbots</b>
          <br />
          <i>by Aditthya</i>
        </li>
      </ULListStyleNone>
    </ContentCard>

    <ContentCard>
      <h2>Web Development / DevOps</h2>
      <ULListStyleNone style={{ maxWidth: '800px' }}>
        <li>
          <b>A scalable blueprint for product customization with Python 3</b>
          <br />
          <i>by Chinab Chugh</i>
        </li>
        <li>
          <b>Dockerizing Django</b>
          <br />
          <i>by Ernst Haagsman</i>
        </li>
        <li>
          <b>Build a Data-Driven Web App That Everyone Can Use</b>
          <br />
          <i>by Galuh Sahid</i>
        </li>
        <li>
          <b>Taming System with Python: A Sysadmin perspective</b>
          <br />
          <i>by Tang Ing Wei</i>
        </li>
        <li>
          <b>Devil is in the details: Microservices, security and DevOps</b>
          <br />
          <i>by Mohammed A Imran</i>
        </li>
        <li>
          <b>
            Applying serverless architecture pattern to distributed data
            processing
          </b>
          <br />
          <i>by Denys Makogon</i>
        </li>
        <li>
          <b>Deploying Applications using Kubernetes</b>
          <br />
          <i>by Graham Dumbleton</i>
        </li>
      </ULListStyleNone>
    </ContentCard>
    <ContentCard>
      <h2>Other Topics</h2>
      <ULListStyleNone style={{ maxWidth: '800px' }}>
        <li>
          <b>Game Programming with Python</b>
          <br />
          <i>by MrValdez</i>
        </li>
        <li>
          <b>Artisanal Async Adventuresa</b>
          <br />
          <i>by Jonas Obrist</i>
        </li>
        <li>
          <b>
            Writing robust, readable, and maintainable concurrent programs in
            Python
          </b>
          <br />
          <i>by Wilson Tjhi</i>
        </li>
        <li>
          <b>Practical Python Design Patterns</b>
          <br />
          <i>by Ram</i>
        </li>
        <li>
          <b>Test-Driven Development of a Static Code Analyzer in Python</b>
          <br />
          <i>by Terry Yin</i>
        </li>
        <li>
          <b>Run your ICO using Python</b>
          <br />
          <i>by Abhishek Pandey</i>
        </li>
        <li>
          <b>Concurrency vs Parallelism</b>
          <br />
          <i>by Narendran R</i>
        </li>
        <li>
          <b>Pumping up Python modules using Rust</b>
          <br />
          <i>by Vigneshwer Dhinakaran</i>
        </li>
        <li>
          <b>Elements of Programming Interviews in Python</b>
          <br />
          <i>by Tsung-Hsien Lee</i>
        </li>
        <li>
          <b>Introduce syntax and history of Python from 2.4 to 3.6</b>
          <br />
          <i>by Manabu TERADA</i>
        </li>
      </ULListStyleNone>
    </ContentCard>
  </div>
)

export default SchedulePage
