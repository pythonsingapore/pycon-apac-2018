import Helmet from "react-helmet";
import React from "react";
import Link from "gatsby-link";

import ContentCard from "../components/ContentCard.js";
import TemplateWrapper from "../layouts";
import TemporarySchedule from "../components/TemporarySchedule";

const EventPage = props => (
  <TemplateWrapper>
    <div className="container">
      <Helmet>
        <title>Event | PyCon SG 2019</title>
      </Helmet>
      <ContentCard>
        <h1>Event</h1>
        <p>
          Welcome to PyCon Singapore 2019! If you intend to attend this
          conference as a speaker or as an attendee, please take one moment and
          read our <Link to="/code-of-conduct/">Code of Conduct</Link>.
        </p>
        <h2>PyCon Singapore 2019 Schedule</h2>
        <p>
          We are still accepting more proposals for talks and tutorials. Our
          final schedule will be published here about two weeks before the
          conference.
        </p>
        <p>
          In the meantime, you can find all accepted talks and tutorials listed
          here:
        </p>

        <TemporarySchedule />

        <h2>Past Events</h2>
        <p>
          Traditionally, the Python User Group organizes an EDU Summit and Young
          Coder's Workshops together with PyCon. This year, these two events
          already took place in June:
        </p>
        <ul>
          <li>
            <Link to="/edu-summit/">Education Summit</Link>
          </li>
          <li>
            <Link to="/young-coders/">Young Coders&rsquo; Workshops</Link>
          </li>
        </ul>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default EventPage;
