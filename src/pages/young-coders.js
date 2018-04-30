import { Button } from 'reactstrap'
import Helmet from 'react-helmet'
import React from 'react'
import styled from 'styled-components'

import ContentCard from '../components/ContentCard.js'
import ULListStyleNone from '../components/ULListStyleNone.js'

const YoungCodersPage = () => (
  <div className="container">
    <Helmet>
      <title>Young Coders&rsquo; Workshops | PyCon APAC 2018</title>
    </Helmet>

    <ContentCard>
      <h1>Young Coders&rsquo; Workshops</h1>
      <p>
        <b>On 2 Jun 2018</b>, PyCon APAC 2018 will hold a series of Young
        Coders&rsquo; Workshops for students (or children of school going age).
        Targeted at a younger audience aged 18 and below, this aims to enthuse
        the young about the joy of experiential and hands-on learning through
        Python coding.
      </p>
      <p>
        Sessions are conducted by students for students, and currently include:
      </p>
      <ULListStyleNone>
        <li>
          9 am to 12 noon: <b>Introduction to Python</b>
        </li>
        <li>
          9 am to 12 noon: <b>Programming micro:bits using MicroPython</b>
        </li>
        <li>
          9 am to 12 noon: <b>Python web development with Flask</b>
        </li>
        <li>
          1 pm to 4 pm:{' '}
          <b>Implementing a hello world artificial neural network (ANN)</b>
        </li>
        <li>
          1 pm to 4 pm: <b>Solving Project Euler problems in Python</b>
        </li>
        <li>
          1 pm to 4 pm: <b>Your idea here :)</b>
        </li>
      </ULListStyleNone>
    </ContentCard>
    <ContentCard>
      <h1>Attending</h1>
      <p>
        <del>If you are interested in participating, please register at&nbsp;
        <a href="https://tinyurl.com/pyconapac18youngcoders">
          tinyurl.com/pyconapac18youngcoders
        </a>. Registration is open until Friday 18 May 2018 or when slots run
        out. Participation is free (thanks to our sponsors) and parents are
        encouraged to attend with their children.</del>
        Due to overwhelming response, registration is closed. Thank you for your support!
      </p>
      <p>
        If you have a question, please contact{' '}
        <a href="mailto:pyedu@computing.sg">pyedu@computing.sg</a>
      </p>
    </ContentCard>
  </div>
)

export default YoungCodersPage
