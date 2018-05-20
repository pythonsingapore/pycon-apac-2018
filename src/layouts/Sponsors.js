import React from 'react'
import { Row, Col } from 'reactstrap'

import ContentCard from '../components/ContentCard'
import Sponsor from '../components/Sponsor'

import SponsorAcronisPng from '../images/sponsor-acronis.png'
import SponsorBitlabstudioPng from '../images/sponsor-bitlabstudio.png'
import SponsorGandiPng from '../images/sponsor-gandi.png'
import SponsorHDEPng from '../images/sponsor-hde.png'
import SponsorJetbrainsPng from '../images/sponsor-jetbrains.png'
import SponsorJubliaJpg from '../images/sponsor-jublia.jpg'
import SponsorSolacetechPng from '../images/sponsor-solacetech.png'
import SponsorTheartlingPng from '../images/sponsor-theartling.png'
import SponsorThoughtworksPng from '../images/sponsor-thoughtworks.png'
import SponsorTravelokaPng from '../images/sponsor-traveloka.png'
import SponsorZendeskPng from '../images/sponsor-zendesk.png'
import Sponsor100OfferPng from '../images/sponsor-100offer.png'

const Sponsors = () => (
  <div className="container">
    <div className="text-center">
      <h1 className="mt-5">Platinum Sponsors</h1>
      <hr />
      <Row>
        <Col sm="6">
          <Sponsor
            name="Traveloka"
            url="https://www.traveloka.com/"
            image={SponsorTravelokaPng}
            tier="Platinum"
          />
        </Col>
        <Col sm="6">
          <Sponsor
            name="Gandi.net"
            url="https://www.gandi.net/"
            image={SponsorGandiPng}
            tier="Platinum"
          />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col sm="4">
          <Sponsor
            name="HDE Inc."
            url="https://hde.co.jp/"
            image={SponsorHDEPng}
            tier="Platinum"
          />
        </Col>
      </Row>
      <h1 className="mt-5">Gold Sponsors</h1>
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
        <Col sm="4">
          <Sponsor
            name="Zendesk"
            url="https://www.zendesk.com/"
            image={SponsorZendeskPng}
            tier="Gold"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Thoughtworks"
            url="https://www.thoughtworks.com/"
            image={SponsorThoughtworksPng}
            tier="Gold"
          />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col sm="4">
          <Sponsor
            name="100 Offer"
            url="https://100offer.com/"
            image={Sponsor100OfferPng}
            tier="Silver"
          />
        </Col>
      </Row>
      <h1 className="mt-5">Silver Sponsors</h1>
      <hr />
      <Row>
        <Col sm="4">
          <Sponsor
            name="Solacetech"
            url="https://www.solacetech.com.sg/"
            image={SponsorSolacetechPng}
            tier="Silver"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="The Artling"
            url="https://www.theartling.com/"
            image={SponsorTheartlingPng}
            tier="Silver"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Jublia"
            url="https://www.jublia.com/"
            image={SponsorJubliaJpg}
            tier="Silver"
          />
        </Col>
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col sm="4">
          <Sponsor
            name="Bitlab Studio"
            url="https://www.bitlabstudio.com/"
            image={SponsorBitlabstudioPng}
            tier="Silver"
          />
        </Col>
        <Col sm="4">
          <Sponsor
            name="Acronis"
            url="https://www.acronis.com/"
            image={SponsorAcronisPng}
            tier="Silver"
          />
        </Col>
      </Row>
    </div>
  </div>
)

export default Sponsors
