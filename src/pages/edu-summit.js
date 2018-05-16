import { Button } from 'reactstrap'
import Helmet from 'react-helmet'
import React from 'react'
import styled from 'styled-components'

import ContentCard from '../components/ContentCard.js'
import ULListStyleNone from '../components/ULListStyleNone.js'
import Schedule from '../components/Schedule.js'

const talks = [
  {
    time: '8:00am',
    speaker: '',
    title: 'Registration & Breakfast',
    type: 'break',
  },
  {
    time: '8:50am',
    speaker: 'Dr Liew Beng Keat',
    job: 'Deputy Director at Republic Polytechnic, BDFL PyCon APAC',
    title: 'Opening',
  },
  {
    time: '9:00am',
    speaker: 'Mr Lee Tsung-Hsien',
    job:
      'Staff Software Engineer at Toyota Research Institute, co-author of Elements of Programming Interviews in C++/Java/Python',
    title:
      'Learning programming and problem solving through solving algorithm problems',
  },
  {
    time: '9:30am',
    speaker: 'Mr Dean Ang Ngee Keng',
    job:
      'Senior Computing Teacher at School of Science and Technology, Singapore',
    title:
      'from python import magic - The Magic of Teaching Python using Python',
  },
  {
    time: '10:00am',
    speaker: 'Mr Calvin Heng',
    job: 'Computing teacher at Zhonghua Secondary School',
    title: 'Computing @ Zhonghua Secondary',
  },
  {
    time: '10:30am',
    speaker: 'Mr V Surya',
    job: 'Computing teacher at Jurong West Secondary School',
    title:
      'From Coders to Raiders, using Repl.it - A Story-based Approach to Teaching Python',
  },
  {
    time: '11:00am',
    speaker: 'Prof Ben Leong',
    job:
      'Associate Professor at National University of Singapore, Director at MOE Experimental Systems & Technology Lab',
    title: 'Teaching Python to Working Adults',
  },
  {
    time: '11:30am',
    speaker: 'Dr Norman Lee',
    job: 'Senior Lecturer at Singapore University of Technology and Design',
    title: 'Digital World Evolved - Machine Learning Powered',
  },
  {
    time: '12:00pm',
    title: 'Group Photo & Lunch & Networking',
    subtitle:
      'with Prof Leong Hon Wai, Associate Professor at National University of Singapore School of Computing',
  },
  {
    time: '1:00pm',
    title: 'Lightning Talks',
    subtitle: '(slots available)',
    talks: [
      {
        title:
          '2D Challenge – Pedagogy for Multidisciplinary Computing Assignment',
        speaker: 'Dr Oka Kurniawan',
        job: 'Senior Lecturer at Singapore University of Technology and Design',
      },
      {
        title:
          'Teaching AI Concepts with Python and Project Malmo',
        speaker: 'Dr Melvin Zhang',
        job: 'Computational Thinkerer at Computational Thinkerers',
      },    
    ],
  },
  {
    time: '1:30pm',
    speaker: 'Ms Juliana Ung',
    job: 'Founder and educator at LCCL Coding Academy',
    title: 'Growth in a Coding Classroom: A Mindset Perspective',
  },
  {
    time: '2:00pm',
    speaker: 'Dr Chen Weiqiang',
    job: 'Lecturer at Eunoia Junior College',
    title: 'Experiences in developing students for coding, data science and artificial intelligence',
  },
  {
    time: '2:30pm',
    speaker: 'Mr Praveen Patil',
    job:
      'Physics Lecturer at GSS Belgaum, maintainer of SPOSH Code2Learn repository',
    title: 'Python for Experiential Learning in STEAM',
  },
  {
    time: '3:00pm',
    speaker: 'Mr Tamim Shahriar',
    job:
      'Engineering Manager, Grab, author of bestselling children programming books in Bangladesh',
    title:
      'Python vs C - Experience in implementing data structures and algorithms',
  },
  {
    time: '3:30pm',
    speaker: 'Mr Alvin Ho',
    job: 'CoderDojo @ Nee Soon East Community Club',
    title: 'CoderDojo @ SG',
  },
  {
    time: '4:00pm',
    speaker: '',
    job: '',
    title: 'Panel Discussion & AUA (Ask Us Anything)',
  },
  {
    time: '5:00pm',
    speaker: '',
    job: '',
    title: 'Lucky Draw & Closing',
  },
]

const EduSummitPage = () => (
  <div className="container">
    <Helmet>
      <title>Education Summit | PyCon APAC 2018</title>
    </Helmet>

    <ContentCard>
      <h1>Education Summit @LT15, NUS School of Computing</h1>
      <p>
        On <b>31 May 2018</b>, PyCon APAC 2018 will hold an Education Summit, a
        gathering of educators focused on bringing computational thinking and
        coding literacy, through Python, to the classroom and the community. We
        invite passionate educators to join the discussion, share insights,
        learn things and build networks! We are looking for educators from
        various domains: authors, schools, tertiary institutions, non-profit
        community-based programmes, and government.
      </p>
    </ContentCard>
    <ContentCard>
      <h1>Schedule</h1>
      <Schedule talks={talks} />
    </ContentCard>
    <ContentCard>
      <h1>Attending</h1>
      <p>
        If you are interested in participating in the Education Summit, please
        register at&nbsp;
        <a href="https://tinyurl.com/pyconapac18edusummit">
          tinyurl.com/pyconapac18edusummit
        </a>. Registration is open untill Friday, 18 May 2018 or when slots run
        out. Participation in the Education Summit is free (thanks to our
        sponsors) but as this is an invite-only for-educators event, only
        eligible participants will be confirmed via email. If you have a
        question, please contact{' '}
        <a href="mailto:pyedu@computing.sg">pyedu@computing.sg</a>
      </p>
    </ContentCard>
  </div>
)

export default EduSummitPage
