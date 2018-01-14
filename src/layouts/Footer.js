import React from 'react'
import Link from 'gatsby-link'
import glamorous from 'glamorous'

import bg1Jpg from '../images/bg1.jpg'

const FooterP = glamorous.p({
  color: '#AFAFAF',
})

const FooterSpan = glamorous.span({
  color: '#AFAFAF',
  fontSize: '10pt',
})

const FooterA = glamorous.a({
  color: '#AFAFAF',
  fontSize: '10pt',
  ':hover': {
    color: 'white',
  },
})

const FooterHR = glamorous.p({
  width: '100%',
  borderTop: '1px solid #AFAFAF',
})

const Footer = () => (
  <div
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
