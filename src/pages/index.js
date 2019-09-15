import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import styled from "styled-components";

import { Table } from "reactstrap";
import ContentCard from "../components/ContentCard";
import TemplateWrapper from "../layouts";
import PyConBanner from "../../static/pycon_singapore_2019-v5-small.jpg";
import Laurence from "../../static/speakers/laurence.jpg";
import WanTing from "../../static/speakers/wan-ting-poh.jpg";
import Rich from "../../static/speakers/Rich-Jones.jpg";

export const SpeakerImage = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 100px;
`;

export const Content = styled.div`
  width: 100%;
  padding: 2em;
  @media (max-width: 575px) {
    text-align: left;
  }
`;

export const KeynoteItem = props => {
  const { children, image, author, occupation, company } = props;
  return (
    <tr>
      <td>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0 0 100px" }}>
            <Content>
              <SpeakerImage
                style={{
                  display: "inline-block",
                  backgroundImage: `url(${image})`
                }}
              />
            </Content>
          </div>
          <div style={{ flex: "1 1 auto", marginLeft: "1em" }}>
            <div
              style={{ height: "100%", display: "flex", alignItems: "center" }}
            >
              <Content>
                <h3>{author}</h3>
                <em>
                  {occupation} at {company}
                </em>
              </Content>
            </div>
          </div>
        </div>
        <div>
          <hr />
          <Content>{children}</Content>
        </div>
      </td>
    </tr>
  );
};

const IndexPage = () => (
  <TemplateWrapper>
    <Helmet title="PyCon SG 2019" />
    <div>
      <img src={PyConBanner} style={{ width: "100%" }} />
    </div>
    <div className="container">
      <ContentCard className="text-center">
        <h1>Ticket & Tutorial Sales Are Open</h1>
        <p>
          PyCon Singapore 2019 is happening from Thursday to Saturday on October
          10 - October 12 2019 at Republic Polytechnic!
        </p>
        <a
          className="btn btn-primary"
          href="https://www.eventnook.com/event/pyconsingapore2019/"
        >
          Get Your Tickets Now
        </a>
      </ContentCard>

      <ContentCard className="text-center">
        <h1>Meet our Keynote Speakers</h1>

        <Table striped>
          <tbody className="text-left">
            <KeynoteItem
              author="Laurence Liew"
              bio="Asd"
              image={Laurence}
              occupation="Director for AI Industry Innovation"
              company="AI Singapore"
            >
              <p>
                Laurence is the Director for AI Industry Innovation at AI
                Singapore and is driving the adoption of AI by the Singapore
                ecosystem through the 100 Experiments and AI Apprenticeship
                programmes.
              </p>
              <p>
                A visionary and serial technopreneur, Laurence identified and
                introduced Singapore's enterprises to:
              </p>

              <ul>
                <li>
                  Linux and open source in 1999, by being the first RED HAT
                  partner and authorized training centre in Asia Pacific
                </li>
                <li>
                  High Performance Computing (HPC) Cluster in 2001, by building
                  A- STAR’s IHPC first compute cluster (most of the initial HPC
                  clusters in NUS, NTU, SMU were built by Laurence and his team)
                </li>
                <li>
                  Grid Computing in 2003, by building and operating Singapore's
                  first Grid platform - IDA's National Grid Pilot Platform
                </li>
                <li>
                  Cloud Computing in 2007, by architecting both the Cloud
                  business and technology for then Singapore Computer Systems'
                  Alatum Cloud (now owned by Singtel)
                </li>
                <li>
                  Open Source Analytics in 2011, by building Revolution
                  Analytics Inc business in Asia and R&D team in Singapore.
                  Revolution Analytics was acquired by Microsoft in 2015.
                </li>
              </ul>
              <p>
                Laurence graduated from National University of Singapore (NUS)
                with First Class Honours in Engineering and holds a Masters in
                Knowledge Engineering from NUS.
              </p>
            </KeynoteItem>
          </tbody>
        </Table>
      </ContentCard>

      <ContentCard className="text-center">
        <Table striped>
          <tbody className="text-left">
            <KeynoteItem
              author="Wan Ting Poh"
              image={WanTing}
              occupation="Director Data Science, Asia Pacific"
              company="Alliance"
            >
              <p>
                Wan Ting is Allianz’s Director Data Science for Asia Pacific.
                She is responsible for leading and developing a team of data
                scientists in the region, with the primary aim to drive
                innovation, deliver end-to-end data science services, and
                continue the digitalisation of the Allianz business.
              </p>

              <p>
                Wan Ting also holds the parallel role of Chief Data Scientist at
                FinOS Technology, a wholly-owned subsidiary of Allianz, which is
                focused on increasing access to financial services for the
                underbanked and underinsured.
              </p>

              <p>
                Between 2017 and 2019, Wan Ting held the office of Managing
                Director of Girls in Tech Singapore – a non-profit organization
                that empowers, educates and engages girls and women who are
                passionate in technology. Wan Ting’s leadership expanded the
                organization’s community, positively impacted more than 700
                participants, and substantially increased working capital for
                the group – efforts which ensures the Singapore chapter remains
                relevant, viable and sustainable.
              </p>

              <p>
                A strong believer that technology can drive the world to be a
                better place, Wan Ting recognizes the importance of diversity in
                the digital age and strives towards the day where everyone is
                empowered in STEM.
              </p>

              <p>
                Wan Ting holds a Master degree in statistics and a Bachelor
                degree in Computational Biology, both from the National
                University of Singapore.
              </p>
            </KeynoteItem>
          </tbody>
        </Table>
      </ContentCard>

      <ContentCard className="text-center">
        <Table striped>
          <tbody className="text-left">
            <KeynoteItem
              author="Rich Jones"
              image={Rich}
              occupation="Founder"
              company="Gun.io and Author of Zappa"
            >
              <p>
                Rich Jones is a prolific open source software developer,
                archetypal hacker-nomad, founder of the bespoke talent agency
                Gun.io, and the author of Zappa, Python's serverless framework.
              </p>

              <p>
                Started three years ago, Zappa was the first project which
                allowed developers to build and deploy complex event-driven web
                applications to AWS Lambda, allowing for infinite elasticity and
                massively reduced operations burdens. Zappa is now used in
                production by thousands of top companies all around the world,
                helping them save millions of dollars on operations costs.
              </p>

              <p>
                In addition to his open source work, he has provided consulting
                services for dozens of startups, and was most recently a cloud
                architect and software developer at the Childhood Cancer Data
                Lab, where he was responsible for the architecture, application
                development and operations of a system which processed petabytes
                of genetic data in order to accelerate the the use of artificial
                intelligence in the hunt for cures of rare cancers.
              </p>

              <p>
                Rich is known for his fast-paced, wide-ranging and informative
                talks. He has spoken at DjangoCon, the Chaos Communication
                Congress, Full Stack Fest and many other conferences across four
                continents and a dozen countries. In his free time he enjoys
                skateboarding, trap music and scotch whiskey.
              </p>
            </KeynoteItem>
          </tbody>
        </Table>
      </ContentCard>

      <ContentCard className="text-center">
        <h1>Talks & Speakers</h1>
        <p>
          Have a look at our <Link to="conference">Talks & Speakers</Link> page
          to learn more about the wide range of topics that will be covered at
          this year's PyCon Singapore.
        </p>
      </ContentCard>
      <ContentCard className="text-center">
        <h1>Tutorials at PyCon SG 2019</h1>
        <p>
          This year we are offering six{" "}
          <Link to="tutorials">awesome tutorials</Link>. Tickets for tutorials
          can be purchased seperately from conference tickets.
        </p>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default IndexPage;
