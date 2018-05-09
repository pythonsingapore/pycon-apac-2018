import { Button } from 'reactstrap'
import Helmet from 'react-helmet'
import React from 'react'
import styled from 'styled-components'

import ContentCard from '../components/ContentCard.js'
import ULListStyleNone from '../components/ULListStyleNone.js'

const EduSummitPage = () => (
  <div className="container">
    <Helmet>
      <title>Education Summit | PyCon APAC 2018</title>
    </Helmet>

    <ContentCard>
      <h1>Education Summit</h1>
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
      <h1>Schedule (to-date) @LT15, NUS School of Computing</h1>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Session</th>     
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08:00AM</td>                
            <td>
               <p>Registration & Breakfast</p>
            </td>
          </tr>
          <tr>
            <td>08:50AM</td>                
            <td>
               <p><b>Opening</b><br />
                 <i>Dr Liew Beng Keat</i>, Deputy Director at Republic Polytechnic, BDFL PyCon APAC</p>
            </td>
          </tr>
          <tr>
            <td>09:00AM</td>                
            <td>
               <p><b>Learning programming and problem solving through solving algorithm problems</b><br />
	               <i>Mr Lee Tsung-Hsien</i>, Staff Software Engineer at Toyota Research Institute, co-author 
	               of Elements of Programming Interviews in C++/Java/Python</p>
            </td>
          </tr>
          <tr>
            <td>09:30AM</td>                
            <td>
               <p><b>from python import magic<br />
                 The magic of teaching Python using Python</b><br />
                 <i>Mr Dean Ang Ngee Keng</i>, Senior Computing Teacher at School of Science and 
	               Technology, Singapore</p>
            </td>
          </tr>
          <tr>
            <td>10:00AM</td>                
            <td>
               <p><b>Computing @ Zhonghua Secondary</b><br />
                 <i>Mr Calvin Heng</i>, Computing teacher at Zhonghua Secondary School</p>
            </td>
          </tr> 
          <tr>
            <td>10:30AM</td>                
            <td>
               <p><b>From Coders to Raiders, using Repl.it - A Story-based Approach to Teaching Python</b><br />
                 <i>Mr V Surya</i>, Computing teacher at Jurong West Secondary School</p>
            </td>
          </tr>  
          <tr>
            <td>11:00AM</td>                
            <td>
               <p><b>Teaching Python to Working Adults</b><br />
                 <i>Prof Ben Leong</i>, Associate Professor at National University of Singapore, Director at MOE Experimental Systems & Technology Lab</p>
            </td>
          </tr>
          <tr>
            <td>11:30AM</td>                
            <td>
               <p><b>Digital World Evolved - Machine Learning Powered</b><br />
                 <i>Dr Norman Lee</i>, Senior Lecturer at Singapore University of Technology and Design</p>
            </td>
          </tr>	
          <tr>
            <td>12:00PM</td>                
            <td>
               <p><b>Group Photo & Lunch & Networking</b><br />
                 with <i>Prof Leong Hon Wai</i>, Associate Professor at National University of Singapore School of Computing</p>
            </td>
          </tr>		
          <tr>
            <td>01:00PM</td>                
            <td>
               <p><b>Lightning Talks</b><br />
		 <b>2D Challenge - Pedagogy for Multidisciplinary Computing Assignment</b><br />
                 <i>Dr Oka Kurniawan</i>, Senior Lecturer at Singapore University of Technology and Design
                 <br /><br />
	         (Slots available)
            </p>
            </td>
          </tr>	
          <tr>
            <td>01:30PM</td>                
            <td>
               <p><b>Growth in a Coding Classroom: A Mindset Perspective</b><br />
                 <i>Ms Juliana Ung</i>, Founder and educator at LCCL Coding Academy</p>
            </td>
          </tr>
          <tr>
            <td>02:00PM</td>                
            <td>
               <p><b><del>Python @ Nanyang Polytechnic</b><br />
                 <i>Mr Lee Chit Boon</i>, Senior lecturer at Nanyang Polytechnic School of IT</del></p>
            </td>
          </tr>
          <tr>
            <td>02:30PM</td>                
            <td>
               <p><b>Python for Experiential Learning in STEAM</b><br />
                 <i>Mr Praveen Patil</i>, Physics Lecturer at GSS Belgaum, maintainer of SPOSH 
	               Code2Learn repository</p>
            </td>
          </tr>
          <tr>
            <td>03:00PM</td>                
            <td>
               <p><b>Python vs C - Experience in implementin class="row"g data structures and algorithms</b><br />
                 <i>Mr Tamim Shahriar</i>, Engineering Manager, Grab, author of bestselling children 
	               programming books in Bangladesh</p>
            </td>
          </tr>
          <tr>
            <td>03:30PM</td>                
            <td>
               <p><b>CoderDojo @ SG</b><br />
                 <i>Mr Alvin Ho</i>, CoderDojo @ Nee Soon East Community Club</p>
            </td>
          </tr>
          <tr>
            <td>04:00PM</td>                
            <td>
               <p><b>Panel Discussion & AUA (Ask Us Anything)</b><br /></p>
            </td>
          </tr>
          <tr>
            <td>05:00PM</td>                
            <td>
               <p><b>Lucky Draw & Closing</b><br /></p>
            </td>
          </tr>
        </tbody>
      </table>
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
