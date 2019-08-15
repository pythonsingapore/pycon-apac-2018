import Helmet from "react-helmet";
import React from "react";

import TemplateWrapper from "../layouts";
import ContentCard from "../components/ContentCard.js";
import Tutorial from "../components/Tutorial.js";

const TutorialsPage = () => (
  <TemplateWrapper>
    <div className="container">
      <Helmet>
        <title>Tutorials | PyCon SG 2019</title>
      </Helmet>

      <ContentCard>
        <h1>PyCon Singapore 2019 Tutorials</h1>
        <p>
          This year, PyCon Singapore features six exciting tutorials! As in
          previous years, these tutorials are not part of the main conference.
          This means, if you would like to attend these tutorials, you need to
          purchase a separate ticket for each tutorial that you want to attend.
        </p>
        <p>
          Each tutorial will run about three hours with a thirty minute tea
          break in between. At noon, we will serve buffet lunch for all
          participants.
        </p>
        <p>
          We run three tutorials in parallel, so you can purchase up to two
          tutorial tickets: One for the morning session, and one for the
          afternoon session.
        </p>
        <p>
          <a
            href="https://eventnook.com/event/pyconsingapore2019/"
            className="btn btn-primary"
          >
            Purchase Your Tutorial Tickets Now
          </a>
        </p>
      </ContentCard>

      <ContentCard>
        <h2>Morning Tutorials</h2>
        <p>Morning tutorials run from 10am to 1pm on Saturday, October 12.</p>
        <hr />
        <Tutorial
          speaker="Carine-Belle + Yonatan"
          title="Building a Blockchain in Python"
        >
          More info coming soon...
        </Tutorial>
        <Tutorial
          speaker="Yue Lin Choong"
          title="Developing Arcade Games with Python"
        >
          More info coming soon...
        </Tutorial>
        <Tutorial
          speaker="Timothy Liu"
          title="Optimizing Deep Learning Training Performance in TensorFlow"
        >
          More info coming soon...
        </Tutorial>
      </ContentCard>

      <ContentCard>
        <h2>Afternoon Tutorials</h2>
        <p>Afternoon tutorials run from 2pm to 5pm on Saturday, October 12.</p>
        <hr />
        <Tutorial
          speaker="Graham Dumpleton"
          title="Kubernetes and Best Practices for Using Containers"
        >
          More info coming soon...
        </Tutorial>
        <Tutorial
          speaker="Hui Xiang Chua"
          title="Webscraping Using Selenium, Beautifulsoup and APIs"
        >
          More info coming soon...
        </Tutorial>
        <Tutorial speaker="Mr. Gi" title="Drone Programming with Tello EDU">
          More info coming soon...
        </Tutorial>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default TutorialsPage;
