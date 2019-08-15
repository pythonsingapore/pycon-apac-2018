import React from "react";
import { Row, Col } from "reactstrap";

import Sponsor from "../components/Sponsor";

import SponsorAcronisPng from "../images/sponsor-acronis.png";
import SponsorBitlabstudioPng from "../images/sponsor-bitlabstudio.png";
import SponsorGandiPng from "../images/sponsor-gandi.png";
import SponsorHDEPng from "../images/sponsor-hde.png";
import SponsorJetbrainsPng from "../images/sponsor-jetbrains.png";
import SponsorJubliaJpg from "../images/sponsor-jublia.jpg";
import SponsorSolacetechPng from "../images/sponsor-solacetech.png";
import SponsorTheartlingPng from "../images/sponsor-theartling.png";
import SponsorThoughtworksPng from "../images/sponsor-thoughtworks.png";
import SponsorTravelokaPng from "../images/sponsor-traveloka.png";
import SponsorZendeskPng from "../images/sponsor-zendesk.png";
import Sponsor100OfferPng from "../images/sponsor-100offer.png";

const Sponsors = () => (
  <div className="container">
    <div className="text-center">
      <h1 className="mt-5">Platinum Sponsors</h1>
      <hr />
      <Row>
        <Col sm="4" />
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
