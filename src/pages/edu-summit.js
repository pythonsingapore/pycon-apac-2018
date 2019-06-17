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
    speaker: 'Mr Ivan Zimine',
    job:
      'Fellow human at Odd-e',
    title:
      'Professional Software Development. Can it be taught?',
  },
  {
    time: '9:30am',
    speaker: 'Google',
    job:
      'Google',
    title:
      'CS Outreach Programs',
  },
  {
    time: '10:00am',
    speaker: 'Prof Chris Boesch',
    job: 'Associate Professor at National University of Singapre ALSET',
    title: 'Transferring Python Skills Learned in Game-based Learning Environments over to Real-world Environments',
  },
  {
    time: '10:30am',
    speaker: 'Mr Laurence Putra',
    job: 'Software engineer at PayPal',
    title:
      'Solving operational challenges while teaching',
  },
  {
    time: '11:00am',
    speaker: 'Ms Liu Weiling',
    job:
      'Computing teacher at Jurong Pioneer Junior College',
    title: 'Developing Students’ Computational Thinking Skills through Interest-driven Activities',
  },
  {
    time: '11:30am',
    speaker: 'Dr Oka Kurniawan',
    job: 'Senior Lecturer at Singapore University of Technology and Design',
    title: 'Can we use Games or Gamification to help students learn programming?',
  },
  {
    time: '12:00pm',
    title: 'Group Photo & Lunch',
    subtitle:
      'Please network! :)',
  },
  {
    time: '1:00pm',
    title: 'Lightning Talks',
    subtitle: '(limited slots available)',
    talks: [
      {
        title:
          'Some student misconceptions on Python programming',
        speaker: 'Dr Norman Lee',
        job: 'Senior Lecturer at Singapore University of Technology and Design',
      },
      {
        title:
          'Making Python our Digital Mother Tongue',
        speaker: 'Mr S S Goh',
        job: 'App Developer at Softpack Microsystems Pte Ltd',
      },
      {
        title:
          'Programming Education in Taiwan',
        speaker: 'Mr Noah Chen',
        job: 'Program Manager at FOSSASIA',
      },     
      {
        title:
          'Data visualisation with Orange',
        speaker: 'Ms Drishti Jain',
        job: 'Computer Engineer at heart',
      },
      {
        title:
          'Lessons Learnt from Teaching NLP',
        speaker: 'Ms Tan Liling',
        job: 'Research Scientist at Rakuten Institute of Technology',
      },          
    ],
  },
  {
    time: '1:30pm',
    speaker: 'Mr Rishabh Anand',
    job: 'Student at National Junior College',
    title: 'Democratising Data Science and Public AI Education: A student\'s perspective',
  },
  {
    time: '2:00pm',
    speaker: 'Dr Chen Weiqiang',
    job: 'Lecturer at Eunoia Junior College',
    title: 'Using Google Colab for Data Science/AI education and Kaggle competitions',
  },
  {
    time: '2:30pm',
    speaker: 'Dr Melvin Zhang',
    job:
      'Computational Thinkerer',
    title: 'Project Malmo with malmopy',
  },
  {
    time: '3:00pm',
    speaker: 'Mr Tamim Shahriar',
    job:
      'Engineering Manager, Grab, author of bestselling children programming books in Bangladesh',
    title:
      'Teaching Programming the Hard Way - Writing Books',
  },
  {
    time: '3:30pm',
    speaker: 'Timothy Liu Kaihui',
    job: 'Student Researcher at Singapore University of Technology and Design',
    title: 'OpenSUTD',
  },
  {
    time: '4:00pm',
    speaker: 'AI Singapore',
    job: 'AI Singapore',
    title: 'AI for Students',
  },    
  {
    time: '4:30pm',
    speaker: 'Prof Leong Hon Wai',
    job: 'Associate Professor at National University of Singapore, School of Computing',
    title: 'Conversation with Prof Leong',
  },
  {
    time: '5:00pm',
    speaker: '',
    job: 'x',
    title: 'Lucky Draw & Closing',
  },
]

const EduSummitPage = () => (
  <div className="container">
    <Helmet>
      <title>Education Summit | PyCon SG 2019</title>
    </Helmet>

    <ContentCard>
      <h1>Education Summit at Google</h1>
      <p>
        On Tuesday 25 June 2019, PyCon SG 2019 will hold an Education Summit, a gathering of educators focused on bringing computational thinking and coding literacy, through Python, to the classroom and the community. We invite passionate educators to join the discussion, share insights, learn things and build networks! We are looking for educators from various domains: authors, schools, tertiary institutions, non-profit community-based programmes, and government.
      </p>
    </ContentCard>
    <ContentCard>
      <h1>Schedule</h1>
      <!--p>The finalised schedule will be up by end May. We will have an exciting line-up of speakers from academia and industry with topics on Python in Singapore schools case studies, data science / AI / cybersecurity education and more. Stay tuned!</p>
      <p>Current speakers: AI Singapore, BuildingBloCS, Eunoia Junior College, Grab Engineering, Nanyang Polytechnic, NUS ALSET, PayPal, The Intelligent Warehouse, {'<you can be here>'}. :)</p>
      <p>If you would like to propose a regular or lightning talk for the Education Summit, please register at <a href="https://tinyurl.com/pyconsg19edu">https://tinyurl.com/pyconsg19edu</a> latest by Friday 17 May 2019 and we will get in touch asap!</p-->
    </ContentCard>
    <ContentCard>
      <h1>Attending</h1>
      <!--p>If you are interested in participating in the Education Summit, please register at <a href="https://tinyurl.com/pyconsg19edu">https://tinyurl.com/pyconsg19edu</a>. Registration is open until Friday, 14 June 2019 or when slots run out. Participation in the Education Summit is free but as this is an invite-only for-educators event, only eligible participants will be confirmed via email.</p-->
      <p>Registration is closed. For queries, please contact <a href="mailto:pyedu@computing.sg">pyedu@computing.sg</a></p>
    </ContentCard>
  </div>
)

export default EduSummitPage
