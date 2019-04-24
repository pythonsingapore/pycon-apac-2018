import { Button } from 'reactstrap'
import Helmet from 'react-helmet'
import React from 'react'
import styled from 'styled-components'

import ContentCard from '../components/ContentCard.js'
import ULListStyleNone from '../components/ULListStyleNone.js'

const YoungCodersPage = () => (
  <div className="container">
    <Helmet>
      <title>Young Coders&rsquo; Workshops | PyCon SG 2019</title>
    </Helmet>

    <ContentCard>
      <h1>Young Coders&rsquo; Workshops</h1>
      <p>
        From April 2019 in collaboration with <a href="https://buildingblocs.github.io/2019/">BuildingBloCS</a>,
        PyCon SG 2019 will hold a series of free Young Coders' Workshops for
        students (or children of school going age) at various venues. Targeted
        at a younger audience aged 18 and below, this aims to enthuse the
        young about the joy of experiential and hands-on learning through Python
        coding.
      </p>
      <p>
        Sessions are conducted by students for students, and currently include:
      </p>
      <ul>
        <li><a href="#competitive-programming">Kickstarting Competitive Programming!</a></li>
        <li><a href="#cyber-security">Experiential Introduction to Cyber Security</a></li>
        <li><a href="#minecraft-ai">Learn AI by playing Minecraft</a></li>
        <li><a href="#ai-datacamp">AI for Students: Learn data science and machine learning with DataCamp</a></li>
        <li><a href="#the-girl-code">Learn Python with TheGirlCode (for female students only)</a></li>
        <li>Introduction to drone programming with Python (to be updated)</li>
        <li>Introduction to IoT with Python (to be updated)</li>
        <li>Introduction to Python (to be updated)</li>
        <li>Programming micro:bits using MicroPython (to be updated)</li>
        <li>Python web development with Flask (to be updated)</li>
      </ul>
      <p>Check back this page as we will be updating new workshops contents. If you would like to propose a workshop topic and/or is able to run one at your school, let us know by filling up <a href="https://tinyurl.com/bbcs19pyconsg4u">https://tinyurl.com/bbcs19pyconsg4u</a>!</p>
      <p>You may also be interested in our <a href="https://youtu.be/7H7mvU1JLOU">Introductory machine learning with Python workshop recorded with FOSSASIA Academy</a>. :) </p>
    </ContentCard>
    <ContentCard>
      <h1>Attending</h1>
      <p>If you are interested in participating, please sign up at the respective workshops registration links. Registration typically closes by Wednesdays of the workshop week or when slots run out. Participation is free and parents are encouraged to attend with their children!</p>
      <p>If you have a question, please contact <a href="mailto:pyedu@computing.sg">pyedu@computing.sg</a></p>
    </ContentCard>
    <ContentCard>
      <h2 id="competitive-programming">Workshop: Kickstarting Competitive Programming!</h2>
      <p>
        <b>Date:</b> Sat 20 Apr 2019 or Sat 4 May 2019 or Sat 18 May 2019<br />
        <b>Time:</b> 9:00 am - 11:00 am<br />
        <b>Venue:</b> Dunman High School Computer Lab S1<br />
      </p>

      <p>Participants will learn useful algorithms and implement them in Python to solve interesting and challenging competitive programming tasks. This workshop will kickstart students on their competitive programming journey to solve beginner level tasks in the <a href="https://codingcompetitions.withgoogle.com/kickstart">Google Kickstart Competition</a>!</p>

      <p>Outstanding participants will also be invited to attend a 10-session advanced algorithmic training course (valued at $1000) by NUS School of Computing from May 2019 at highly subsidised rates in preparation for NOI 2020. [Terms and conditions apply - For non-past NOI medallists only and priority given to students currently studying Computing in Singapore schools.] Outstanding performers in NOI will get a chance to represent Singapore in IOI 2010 which Singapore will be hosting.</p>

      <p>Bonus: <a href="https://cpbook.net/">Competitive Programming book</a> for outstanding participants!</p>

      <p>[Note that Round B of Google Kickstart will happen on Sun 21 Apr 7 - 10 am SG time]</p>

      <p>
        [Note that Round C of Google Kickstart will happen on Sun 26 May 5 - 8 pm SG time]
        See <a href="https://codingcompetitions.withgoogle.com/kickstart/schedule">https://codingcompetitions.withgoogle.com/kickstart/schedule</a>
      </p>

      <p>Participants may also choose to dial in using ClassDo.com to join the virtual room.</p>

      <p>
        <b>20 Apr 2019 Signup:</b> <a href="https://tinyurl.com/bbcs19kickstart20apr">https://tinyurl.com/bbcs19kickstart20apr</a><br />
        <b>4 May 2019 Signup:</b> <a href="https://tinyurl.com/bbcs19kickstart4may">https://tinyurl.com/bbcs19kickstart4may</a><br />
        <b>18 May 2019 Signup:</b> <a href="https://tinyurl.com/bbcs19kickstart18may">https://tinyurl.com/bbcs19kickstart18may</a><br />
      </p>
    </ContentCard>

    <ContentCard>
      <h2 id="cyber-security">Workshop: Experiential Introduction to Cyber Security</h2>
      <p>
        <b>Date:</b> Sat 11 May 2019<br />
        <b>Time:</b> 9 am - 12 noon<br />
        <b>Venue:</b> Hwa Chong Institution Computer Lab (JC E306)<br />
      </p>

      <p>Participants will get a taste of the use of Computing in the field of cybersecurity through practical hands-on experience in this mini-CTF workshop! A fun and engaging workshop organised by students from Hwa Chong Institution in collaboration with BuildingBloCS 2019 just for YOU!</p>

      <p>This workshop is open to secondary school students who are interested to find about more about cyber security, or simply just want to have fun in the cyber world! Get ready to immerse yourself in the cyber world, learn cyber security skills right away and conquer the cyber monster together with like-minded peers! (Don't worry, no physical fighting is involved.) Life is precious, so do not miss this opportunity to prove yourself to be a true cyber security warrior!</p>

      <p>Certification after the course as a cyber security warrior and food for replenishment after the battle will be provided, hence please do help your cyber leaders sign up! Sign ups close at the end of April, so do not miss the opportunity! If you have any queries, do contact <a href="mailto:141560a@student.hci.edu.sg!">141560a@student.hci.edu.sg</a>!</p>

      <p>
        <b>Sign up:</b> <a href="https://tinyurl.com/bbcs19cybersecurity11may">https://tinyurl.com/bbcs19cybersecurity11may</a>
      </p>
    </ContentCard>

    <ContentCard>
      <h2 id="minecraft-ai">Workshop: Learn AI by playing Minecraft</h2>
      <p>
        <b>Date:</b> Sat 11 May 2019<br />
        <b>Time:</b> 9 am - 11 am<br />
        <b>Venue:</b> Dunman High School Computer Lab S1
      </p>

      <p>Project Malmo is a sophisticated AI experimentation platform built on top of Minecraft, and designed to support fundamental research in artificial intelligence. Participants can now learn introductory AI using Python by playing Minecraft (for free)! :)</p>

      <p>
        <b>Sign up:</b> <a href="https://tinyurl.com/bbcs19minecraft11may">https://tinyurl.com/bbcs19minecraft11may</a>
      </p>
    </ContentCard>

    <ContentCard>
      <h2 id="ai-datacamp">Workshop: AI for Students: Learn data science and machine learning with DataCamp</h2>
      <p>
        <b>Date:</b> Sat 18 May 2019 or Sat 1 Jun 2019<br />
        <b>Time:</b> 8.30 - 11.30 am<br />
        <b>Venue:</b> Dunman High School Computer Lab S3
      </p>

      <p>At this introductory workshop, participants will begin their data science and machine learning journey by completing courses on DataCamp.com. Participants will also get up to 6 months of premium access to all paid courses on DataCamp and earn industry certification by completing courses of their choice. They can also collaborate and work on projects which will be featured on BuildingBloCS. Upon course completion, they can also continue to refresh and practise their skills with the mobile practice app and earn XP!</p>

      <p>This workshop is with support from <a href="https://www.aisingapore.org">AI Singapore</a> under the <a href="https://www.aisingapore.org/industryinnovation/ai4s/">AI for Students programme</a>. T-shirts will be given to participants who have successfully completed at least one course on DataCamp.</p>

      <p>
        <b>18 May 2019 Signup:</b> <a href="https://tinyurl.com/bbcs19ai4s18may">https://tinyurl.com/bbcs19ai4s18may</a><br />
        <b>1 Jun 2019 Signup:</b> <a href="https://tinyurl.com/bbcs19ai4s1jun">https://tinyurl.com/bbcs19ai4s1jun</a>
      </p>
    </ContentCard>

    <ContentCard>
      <h2 id="the-girl-code">Workshop: Learn Python with TheGirlCode (women only)</h2>
      <p>
        <b>Date:</b> Sat preferred<br />
        <b>Time:</b> 8.30 am - 11.30 am<br />
        <b>Venue:</b> Computer Lab at your school<br />
        <b>Contact:</b> Japnit Kaur Ahuja at japnit.ahuja@gmail.com
      </p>

      <p>
        <a href="http://thegirlcode.co/">The Girl Code</a><br />
        Code With Confidence
      </p>

      <b>OVERVIEW</b>
      <p>
        Only 11% of programmers in the world are female. The obvious question that comes to mind is - why? Why is there such a huge gender gap in this field? Why aren’t more women programming? The problem is a lack of confidence. Entering a male-dominated field like Computer Science can be intimidating. Furthermore, a lack of female role models in this field only serves to exacerbate this mindset - they’ve started believing that they can’t code. But, there’s a solution to every problem, and, at The Girl Code, we've come up with a way to address this issue. We plan to host specially designed workshops to address this problem. In the workshops, we will introduce students to programming concepts through the language Python. The students will form a tight-knit community, which would act as a safe haven for girls to share absolutely anything they wish to-reiterating a sense of belonging and positivity.
      </p>

      <b>WORKSHOPS</b>
      <p>The workshop will start off with some form of public speaking, fun group acting improvisations, and games through which we aim to make the students feel comfortable and confident in their skin, and inspire teamwork capability in them. There will also be a keynote speaker - an inspirational woman in the field of programming. Our main focus will be on programming with trivia quizzes, conceptual lectures and acquaint them with our platform <a href="https://learn.thegirlcode.co/login">http://learn.thegirlcode.co</a></p>

      <b>The workshop is free!</b>
      <ul>
        <li>The school only needs to provide a computer lab.</li>
        <li>The number of participants should be between 30 to 40, from primary 6 to secondary 4.</li>
        <li>We will provide mentors: every 5 students will have 1 mentor.</li>
        <li>Suggested duration of the workshops: 6 to 8 hours.</li>
        <li>The workshops can be split up into 2-3 hour sessions spread over 2-3 days.</li>
        <li>Students will be awarded a certificate at the end of the workshop, certifying their proficiency in Python.</li>
      </ul>

      <b>CURRICULUM</b>
      <ol>
        <li>Basic Introduction to programming</li>
        <li>Introduction to logic gates (and, or and not)</li>
        <li>Loops</li>
        <li>Strings</li>
        <li>Lists</li>
        <li>Functions</li>
      </ol>
    </ContentCard>

    <ContentCard>
      <h2 id="google-vision">Workshop: Google Vision Kit with Python</h2>
      <p>
        <b>Date:</b> Fri 31 May 2019<br />
        <b>Time:</b> 2 pm - 5 pm<br />
        <b>Venue:</b> Nanyang Polytechnic, Block L, L532
      </p>

      <p>Using Google Vision Kit with Python, we introduce students to the world of artificial intelligence through a fun, interesting and hands-on way. Google Vision Kit lets students build their own intelligent camera that can see and recognize objects using machine learning, which can be applied widely. Students will be paired into groups of 3 and allocated a Vision Kit.</p>

      <p>At the end of the workshop, students should have an idea of what is AI and how AI can be beneficial and solve many real-life issues.</p>

      <p>This workshop is open to secondary school students who are keen to learn, some knowledge of Python programming language would be a bonus.</p>

      <p>
        <b>Sign up:</b> <a href="https://tinyurl.com/bbcs19vision31may">https://tinyurl.com/bbcs19vision31may</a>
      </p>
    </ContentCard>

  </div>
)

export default YoungCodersPage
