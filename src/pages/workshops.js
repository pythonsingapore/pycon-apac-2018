import Helmet from 'react-helmet'
import React from 'react'
import { Button } from 'reactstrap'

import ContentCard from '../components/ContentCard.js'
import ULListStyleNone from '../components/ULListStyleNone.js'

const WorkshopsPage = () => (
  <div className="container">
    <Helmet>
      <title>Workshops | PyCon APAC 2018</title>
    </Helmet>

    <ContentCard>
      <h1>Workshops at PyCon APAC 2018</h1>
      <p>
        In the past years, PyCon APAC and PyCon Singapore have always been
        two-day events with one day of workshops that could be booked at
        additional cost. This year, we would like to try something new and
        actually turn PyCon APAC 2018 into a three-day event.
      </p>
      <p>
        <b>
          <i>tl;dr:</i> We need workshop conductors for day one, please submit
          your workshop idea{' '}
          <a href="https://www.papercall.io/pycon-apac-2018">here</a> ;-)
        </b>
      </p>
    </ContentCard>
    <ContentCard>
      <h2>How it works</h2>
      <p>
        This year, there will be no strict schedule on the first day of the
        conference. Instead, after the opening keynote, you are encouraged to
        walk around the venue and join tables that host topics that you are
        interested in.
      </p>
      <p>
        We are aiming to host 10-15 tables that will be spread out throughout
        the venue. Each table will be hosted by someone from the local Python
        community who is an expert in a certain topic. As an attendee, you may
        join any table at any time and you will find simple instructions that
        will allow you to embark on a 20-30 minutes journey of learning and get
        your feet wet by trying out a new Python library. If you get stuck while
        following the instructions, the table-host will be there to help you
        out.
      </p>
      <p>
        We will list all topics here prior to the conference, so you will know
        in advance which topics will be covered and each topic will list
        prerequisites, if any, so that you have a chance to prepare your laptop
        in advance.
      </p>
      <p>
        The Python community has always been a very welcoming and friendly
        community and with this initiative, we hope to give all of our
        attendees, especially young ones, first-timers, non-coders and everyone
        else a good glimpse of the many many things that can be achieved with
        the Python programming language, in an accessible and engaging way.
      </p>
    </ContentCard>
    <ContentCard>
      <h2>We need your help</h2>
      <p>
        As you can imagine, curating 10-15 good mini-tutorials is no easy task.
        We need your help to make this happen! If you have good knowledge about
        any popular Python library and if you would like to host one of our
        tables during day one, please submit your workshop idea at our papercall
        site and make sure that you select "Workshop" as the talk type.
      </p>
      <p>
        <b>What makes a good workshop?</b> You need to design your workshop in
        such a way so that people can follow your instructions at their own
        pace, because people will join and leave your table at random times, so
        you will not be able to give spoken instructions to a set audience.
        Ideally, you would create a github repository with a README.md and let
        people follow the instructions in that README.md and ask questions
        whenever questions arise. You should test-run your own workshop and make
        sure that an attendee can finish the entire workshop in 20-45 minutes.
      </p>
      <p>
        Some people might not know anything about your library, so you should
        have a little demo at hand that shows what can be done with your library
        and also what people will create when they follow your workshop.
        Finally, you need to feel comfortable to debug issues on people's
        machines, as this would be your main task during the day.
      </p>
      <p>
        If you feel extra confident, you could also create a second README.md
        for users that are already more advanced, but this would be the icing on
        the cake ;)
      </p>
      <a
        class="btn btn-primary"
        href="https://www.papercall.io/pycon-apac-2018"
      >
        <Button color="primary" size="lg">
          Submit Your Workshop Proposal Now
        </Button>
      </a>
    </ContentCard>
    <ContentCard>
      <h2>Workshop Ideas</h2>
      <p>
        If you love this idea but you are not sure what topics would be
        suitable, we have listed a few ideas that came up during our own
        brainstorming sessions. If you think that you could handle any of these
        topics and become a host, please submit your workshop proposal at
        Papercall!!
      </p>
      <p>
        Of course, this list is in no way exhaustive. The Python ecosystem is
        huge, and any introduction to any moderately well known library would be
        very welcome! Be creative and if you have any questions, please don't
        hesitate to reach out to us via{' '}
        <a href="mailto:conference@pycon.sg">conference@pycon.sg</a>
      </p>
      <ul>
        <li>
          Getting Up To Speed With Python (how to install Python and a good,
          free IDE with some plugins)
        </li>
        <li>
          Text Wrangling with Python (Reading text files, list of common text
          modules. Using regular expressions, using flashtext to do dictionary
          matching. Textmining using nltk: POS tagging and build you own phrase
          extractor with regexparser. Coding-decoding issues. )
        </li>
        <li>
          Dataframe manipulation with Pandas. Real examples of data wrangling
          done by analysts.
        </li>
        <li>
          Multiprocessing/Parallelize code. When to do it, how to do it, do we
          even need map reduce?
        </li>
        <li>
          The "Science" of Data. How we look at data and how each type of data
          is used in data science. Write your own convenient scripts to identify
          different types of data!
        </li>
        <li>
          Beginner's guide to PyTest - Learn to create unit test, integration
          test and other form of test cases using PyTest to write better python
          applications.
        </li>
        <li>
          Introduction to Sphinx - Learn to create your own project
          documentation with Sphinx.
        </li>
        <li>
          Data visualization with Dash - Create easy to use dashboard using Dash
          to visualize data.
        </li>
        <li>
          Building Alexa Skills with Python and Flask - Learn to develop your
          very own Alexa Skills onto Alexa-enabled devices using Python.
        </li>
        <li>Introduction to JupyterLab</li>
        <li>Introduction to iPython Notebook</li>
        <li>Introduction to Fabric</li>
      </ul>
    </ContentCard>

    <ContentCard>
      <h2>Confirmed Workshops</h2>
      <ULListStyleNone>
        <li>
          <b>Your first Django website with cookiecutter-django</b>
          <br />
          <i>by Liuyang Wan</i>
        </li>
      </ULListStyleNone>
    </ContentCard>
  </div>
)

export default WorkshopsPage
