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
      <h2>Speakers (to-date)</h2>
      <ULListStyleNone>
        <li>
          <b>Prof Ben Leong</b>,<br /> Associate Professor at National
          University of Singapore, Director at MOE Experimental Systems &
          Technology Lab
        </li>
        <li>
          <b>Prof Bimlesh Wadhwa</b>,<br /> Senior Lecturer & Assistant Dean
          (Student Life) at National University of Singapore School of Computing
        </li>
        <li>
          <b>Prof Chris Boesch</b>,<br /> Deputy Director, Institute for
          Application of Learning Science and Educational Technology (ALSET)
        </li>
        <li>
          <b>Mr Gi Soong Chee</b>,<br /> Computing teacher, Dunman High School,
          organiser of PyCon SG/APAC Education Summit
        </li>
        <li>
          <b>Mr Ivan Zimine</b>,<br /> Fellow human at Odd-e, Initiator of PyCon
          SG Education Summit
        </li>
        <li>
          <b>Mr Lee Tsung-Hsien</b>,<br /> Staff Software Engineer at Toyota
          Research Institute, co-author of Elements of Programming Interviews in
          C++/Java/Python
        </li>
        <li>
          <b>Prof Leong Hon Wai</b>,<br /> Associate Professor at National
          University of Singapore School of Computing
        </li>
        <li>
          <b>Dr Liew Beng Keat</b>,<br /> Assistant Director at Republic
          Polytechnic, BDFL PyCon APAC
        </li>
        <li>
          <b>Mr Praveen Patil</b>,<br /> Physics Lecturer at GSS Belgaum,
          maintainer of SPOSH Code2Learn repository
        </li>
        <li>
          <b>Mr Tamim Shahriar</b>,<br /> Engineering Manager, Grab, author of
          best selling programming books in Bangladesh
        </li>
        <li>
          <b>You can be here :)</b>
        </li>
      </ULListStyleNone>
    </ContentCard>
    <ContentCard>
      <h1>Schedule</h1>
      <p>
        We will publish the exact schedule for this Education Summit here, later
        in April.
      </p>
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
