import Helmet from 'react-helmet'
import React from 'react'
import Link from 'gatsby-link'
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
          your workshop idea via email to{' '}
          <a href="mailto:conference@pycon.sg">conference@pycon.sg</a> ;-)
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
        tables during day one, please send us an email to &nbsp;
        <a href="mailto:conference@pycon.sg">conference@pycon.sg</a> and
        describe how your workshop would be structured.
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
    </ContentCard>

    <ContentCard>
      <h2>Confirmed Workshops</h2>
      <p>
        Confirmed workshops are now listed on our{' '}
        <Link to="/schedule/">schedule page</Link>.
      </p>
    </ContentCard>
  </div>
)

export default WorkshopsPage
