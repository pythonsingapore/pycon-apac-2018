import Helmet from "react-helmet";
import React from "react";

import TemplateWrapper from "../layouts";
import ContentCard from "../components/ContentCard.js";
import merlionPng from "../images/merlion.png";

const VenuePage = () => (
  <TemplateWrapper>
    <div className="container">
      <Helmet>
        <title>Venue | PyCon SG 2019</title>
      </Helmet>
      <ContentCard>
        <h1>Venue</h1>
        <p>
          Singapore is located at one of the crossroads of the world. If there
          is one word that best captures Singapore, it is “unique”. Singapore's
          strategic location, excellent facilities, fascinating cultural
          contrasts and tourist attractions contribute to its success as a
          leading destination for both business and pleasure. A dynamic city
          rich in contrast and colour, you'll find a harmonious blend of
          culture, cuisine, arts and architecture here. Brimming with unbridled
          energy, this little dynamo in Southeast Asia embodies the finest of
          both East and West.
        </p>
        <img alt="The Merlion and famous singaporean food" src={merlionPng} />
        <h2 style={{ marginTop: "1em" }}>Republic Polytechnic</h2>
        <p>
          PyCon SG 2019 will return to it's 2012 founding venue: The{" "}
          <a href="https://www.rp.edu.sg/">Republic Polytechnic (RP) campus</a>.
          Completed in 2006, Republic Polytechnic’s 20-hectare Woodlands campus
          has facilities to allow it to cater for up to about 15,000 students,
          as well as residents of the community. It was designed jointly by
          award-winning Japanese architect, Fumihiko Maki and DP Architects.
        </p>
        <h3>Useful Links:</h3>
        <ul>
          <li>
            <a href="https://goo.gl/maps/u6Pxm7pqGNMZsBB8A">
              Republic Polytechnic on Google Maps
            </a>
          </li>
          <li>
            <a href="https://www.rp.edu.sg/our-campus/campus-map">
              Republic Polytechnic campus map
            </a>
          </li>
          <li>
            <a href="https://www.rp.edu.sg/service-excellence/contact-us#e4eb2a3e-ae06-4a20-87ff-1fcdb210680e-1">
              Bus connections to Republic Polytechnic
            </a>
          </li>
        </ul>
        <h2>Getting to Singapore</h2>
        <ul>
          <li>
            <a href="http://yoursingapore.com/">Your Singapore</a> has{" "}
            <a href="http://flights.yoursingapore.com/">flight deals</a> and{" "}
            <a href="http://www.yoursingapore.com/content/traveller/en/plan-your-trip/travel-essentials/visa-customs-legal-regulation.html">
              visa information
            </a>
          </li>
          <li>
            <a href="https://www.visitsingapore.com/travel-guide-tips/getting-around/">
              Public Transport Singapore
            </a>{" "}
            is a one stop guide to public transportation in Singapore
          </li>
        </ul>

        <h2>Getting Around</h2>
        <p>
          Singapore has an excellent network for public transportion. You can
          buy an{" "}
          <a href="http://www.ezlink.com.sg/get-your-ez-link-card/where-the-cards-are-sold">
            EZLink Card
          </a>{" "}
          to make the use of local transportation more convenient.
          <ul>
            <li>
              Buses
              <br /> You can pay via the ezlink card. The buses also accept cash
              when you board, but please note that they don't return the change
              - so coins or smaller notes will be more handy. It's more
              convenient to use an EZlink card. If you leave near a bus stop,
              you can check the arrival of the buses through these apps:{" "}
              <a href="https://www.mytransport.sg/content/mytransport/home/myconcierge/busarrivaltime.html">
                MyTransport.sg
              </a>
              , or SG Buses App ({" "}
              <a href="https://itunes.apple.com/sg/app/sg-buses-singapore-bus-guide-with-arrival-time/id384353741?mt=8">
                iOS
              </a>{" "}
              |{" "}
              <a href="https://play.google.com/store/apps/details?id=com.iridianstudio.sgbuses&hl=en">
                Android
              </a>
              ) .
            </li>
            <li>
              Trains
              <br />
              You can use the ezlink card. Please be cautious with the rules in
              the train stations. Drinking or eating inside the station (amonst
              others) is prohibited and may cause you to get fined. The Train
              System Map can be downloaded{" "}
              <a href="https://www.lta.gov.sg/content/ltaweb/en/public-transport/mrt-and-lrt-trains/train-system-map.html">
                here
              </a>
              .
            </li>
            <li>
              Taxi
              <br />
              If you would like to book a Taxi,{" "}
              <a href="https://www.grab.com/sg/">Grab</a> would be a convenient
              option.
            </li>
          </ul>
        </p>

        <h2>Accommodation</h2>
        <p>
          Singapore offers a wide variety of accommodation types to suit all
          budgets and preferences. They range from backpacker, budget and youth
          hostels to boutique and five-star hotels. To find the perfect
          accommodation for your stay in Singapore, use{" "}
          <a href="https://traveloka.com/">Traveloka.com</a>.
        </p>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default VenuePage;
