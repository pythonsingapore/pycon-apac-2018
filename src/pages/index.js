import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import ContentCard from "../components/ContentCard";
import TemplateWrapper from "../layouts";

const IndexPage = () => (
  <TemplateWrapper>
    <Helmet title="PyCon SG 2019" />
    <div className="container">
      <ContentCard className="text-center">
        <h1>Save The Date!</h1>
        <p>
          The planning for PyCon Singapore 2019 has begun! We are aiming to hold
          the conference from
          <br /> Thursday to Saturday on <b>October 10 - October 12 2019</b>.
        </p>
      </ContentCard>

      <ContentCard>
        <h1>EDU Summit & Young Coder's Workshops</h1>
        <p>
          While the conference itself will be in October, our usual annual
          events "<Link to="/edu-summit">EDU Summit</Link>" and "
          <Link to="/young-coders">Young Coder's Workshops</Link>" will take
          place in April, May and June. Please visit the{" "}
          <Link to="/event">Event</Link> page to learn more!
        </p>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default IndexPage;
