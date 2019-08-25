import Helmet from "react-helmet";
import React from "react";
import Link from "gatsby-link";

import ContentCard from "../components/ContentCard.js";
import TemplateWrapper from "../layouts";
import TemporarySchedule from "../components/TemporarySchedule";

const ConferencePage = props => (
    <TemplateWrapper>
        <div className="container">
            <Helmet>
                <title>Talks & Speakers | PyCon SG 2019</title>
            </Helmet>
            <ContentCard>
                <h1>Our Speakers</h1>
                <p>
                    We would like to express our gratitude towards all speakers
                    who have replied to our CFP and volunteered to share their
                    knowledge and Python experience with the local community!
                </p>
                <p>
                    Those of you who could not be selected this year, we hope
                    to see you as attendees and encourage you to submit again
                    next year. All proposals that have been submitted were
                    really good! The local Python community is growing fast.
                </p>
                <TemporarySchedule />
            </ContentCard>
        </div>
    </TemplateWrapper>
);

export default ConferencePage;
