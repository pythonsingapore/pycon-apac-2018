import React from "react";
import { Row, Col } from "reactstrap";

import Sponsor from "../components/Sponsor";

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
      {/* <h1 className="mt-5">Gold Sponsors</h1>
      <hr />
      <Row>
        <Col sm="4">
          <Sponsor
            name="Jetbrains"
            url="https://www.jetbrains.com/"
            image={SponsorJetbrainsPng}
            tier="Gold"
            portrait={true}
          />
        </Col>
      </Row> */}
      <h1 className="mt-5">Silver Sponsors</h1>
      <hr />
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
