import React from "react";
import { Row, Col } from "reactstrap";

import Sponsor from "../components/Sponsor";

import SponsorDatarobotPng from "../images/sponsor-datarobot.png";
import SponsorMicrosoftPng from "../images/sponsor-microsoft.png";
import SponsorDataikuPng from "../images/sponsor-dataiku.png";
import SponsorFiremarkPng from "../images/sponsor-firemark.png";
import SponsorRedHatPng from "../images/sponsor-redhat.png";
import SponsorPortPng from "../images/sponsor-port.png";
import SponsorTwilioPng from "../images/sponsor-twilio.png";
import SponsorElasticJpg from "../images/sponsor-elastic.jpg";
import SponsorDBS from "../images/sponsor-dbs.jpg";
import SponsorBitlabstudioPng from "../images/sponsor-bitlabstudio.png";
import SponsorJubliaJpg from "../images/sponsor-jublia.jpg";
import SponsorTheartlingPng from "../images/sponsor-theartling.png";
import SponsorTravelokaPng from "../images/sponsor-traveloka.png";

const Sponsors = () => (
  <div className="container">
    <div className="text-center">
      <h1 className="mt-5">Platinum Sponsors</h1>
      <hr />
      <Row>
        <Col sm="2" />
        <Col sm="4">
          <Sponsor
            name="DBS"
            url="https://dbs.com/"
            image={SponsorDBS}
            tier="Platinum"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Traveloka"
            url="https://traveloka.com/"
            image={SponsorTravelokaPng}
            tier="Platinum"
          />
        </Col>
      </Row>
      <h1 className="mt-5">Gold Sponsors</h1>
      <hr />
      <Row>
        <Col sm="4">
          <Sponsor
            name="RedHat OpenShift"
            url="https://openshift.com/"
            image={SponsorRedHatPng}
            tier="Gold"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Firemark"
            url="https://firemarklabs.com.au/"
            image={SponsorFiremarkPng}
            tier="Gold"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Dataiku"
            url="https://dataiku.com/"
            image={SponsorDataikuPng}
            tier="Gold"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="2" />
        <Col sm="4">
          <Sponsor
            name="Microsoft"
            url="https://microsoft.com/"
            image={SponsorMicrosoftPng}
            tier="Gold"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="DataRobot"
            url="https://www.datarobot.com/sg/"
            image={SponsorDatarobotPng}
            tier="Gold"
          />
        </Col>
      </Row>
      <h1 className="mt-5">Silver Sponsors</h1>
      <hr />
      <Row>
        <Col sm="4">
          <Sponsor
            name="Elastic"
            url="https://elastic.co/"
            image={SponsorElasticJpg}
            tier="Silver"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Twilio"
            url="https://twilio.com/"
            image={SponsorTwilioPng}
            tier="Silver"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Port Education"
            url="https://port.education/"
            image={SponsorPortPng}
            tier="Silver"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="4" />
        <Col sm="4">
          <Sponsor
            name="Jublia"
            url="https://jublia.com/"
            image={SponsorJubliaJpg}
            tier="Silver"
          />
        </Col>
      </Row>

      <h1 className="mt-5">Bronze Sponsors</h1>
      <hr />
      <Row>
        <Col sm="2" />
        <Col sm="4">
          <Sponsor
            name="The Artling"
            url="https://theartling.com/"
            image={SponsorTheartlingPng}
            tier="Silver"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Bitlab Studio"
            url="https://bitlabstudio.com/"
            image={SponsorBitlabstudioPng}
            tier="Silver"
          />
        </Col>
      </Row>
    </div>
  </div>
);

export default Sponsors;
