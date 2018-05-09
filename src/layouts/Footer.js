import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import bg1Jpg from '../images/bg1.jpg'

const FooterP = styled.p`
  color: #afafaf;
`

const FooterSpan = styled.span`
  color: #afafaf;
  fontsize: 10pt;
`

const FooterA = styled.a`
  color: #afafaf;
  fontsize: 10pt;
  &:hover {
    color: white;
  }
  & > a {
    color: #afafaf;
    fontsize: 10pt;
    &:hover {
      color: white;
    }
  }
`

const FooterHR = styled.p`
  width: 100%;
  bordertop: 1px solid #afafaf;
`

const Footer = () => (
  <div
    className="mt-5"
    style={{
      backgroundImage: `url(${bg1Jpg})`,
      color: '#dfdfdf',
      padding: '1em',
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <p>
            <b>About</b>
          </p>
          <p>
            <FooterSpan>
              PyCon APAC is a conference about the programming language Python.
              It is a community effort driven by the members of the Python User
              Group Singapore.
            </FooterSpan>
          </p>
        </div>
        <div className="col-sm-3">
          <FooterHR className="d-sm-none" />
          <p>
            <b>When & Where</b>
          </p>
          <p>
            When:<br />
            <FooterSpan>May 31st - June 2nd 2018</FooterSpan>
            <br />
            <br />
            Where:<br />
            <FooterSpan>
              National University of Singapore Computing 1 (COM1) / Level 2<br />
              13 Computing Drive Singapore 117417
            </FooterSpan>
          </p>
        </div>
        <div className="col-sm-3">
          <FooterHR className="d-sm-none" />
          <p>
            <b>Latest News</b>
          </p>
          <p>
            <FooterA>
              <Link to="/news/edu-summit/">
                Education Summit and Young Coders&rsquo; Workshops at PyCon APAC
                2018
              </Link>
            </FooterA>
            <br />
            <br />
            <FooterA>
              <Link to="/news/tickets/">Early Bird Ticket Sales Open Now!</Link>
            </FooterA>
            <br />
            <br />
            <FooterA>
              <Link to="/news/hello-world/">Hello World!</Link>
            </FooterA>
          </p>
        </div>
        <div className="col-sm-3">
          <FooterHR className="d-sm-none" />
          <p>
            <b>Get Social</b>
          </p>
          <p>
            <FooterA href="https://twitter.com/pyconsg">Twitter</FooterA>
            <br />
            <FooterA href="https://www.facebook.com/groups/pythonsg/">
              Facebook
            </FooterA>
            <br />
            <FooterA href="https://groups.google.com/forum/#%21forum/pythonsg">
              Mailing List
            </FooterA>
            <br />
            <FooterA href="mailto:conference@pycon.sg">Email</FooterA>
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
