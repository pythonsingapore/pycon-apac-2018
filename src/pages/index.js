import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

import ContentCard from "../components/ContentCard";
import TemplateWrapper from "../layouts";
import PyConBanner from "../../static/pycon_singapore_2019-v5-small.jpg";

const IndexPage = () => (
  <TemplateWrapper>
    <Helmet title="PyCon SG 2019" />
    <div>
      <img src={PyConBanner} style={{ width: "100%" }} />
    </div>
    <div className="container">
      <ContentCard className="text-center">
        <h1>Early Bird Ticket Sales Are Open</h1>
        <p>
          PyCon Singapore 2019 is happening from Thursday to Saturday on October
          10 - October 12 2019 at Republic Polytechnic!
        </p>
        <a
          className="btn btn-primary"
          href="https://www.eventnook.com/event/pyconsingapore2019/"
        >
          Get Your Ticket Now
        </a>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default IndexPage;
