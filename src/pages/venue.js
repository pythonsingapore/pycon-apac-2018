import Helmet from 'react-helmet'
import React from 'react'

import ContentCard from '../components/ContentCard.js'

const VenuePage = () => (
  <div className="container">
    <Helmet>
      <title>Venue | PyCon APAC 2018</title>
    </Helmet>
    <ContentCard>
      <h1>Venue</h1>
      <p>
        Singapore is located at one of the crossroads of the world. If there is
        one word that best captures Singapore, it is “unique”. Singapore's
        strategic location, excellent facilities, fascinating cultural contrasts
        and tourist attractions contribute to its success as a leading
        destination for both business and pleasure. A dynamic city rich in
        contrast and colour, you'll find a harmonious blend of culture, cuisine,
        arts and architecture here. Brimming with unbridled energy, this little
        dynamo in Southeast Asia embodies the finest of both East and West.
      </p>
      <img alt="The Merlion and famous singaporean food" src={merlionPng} />
      <h2>National University of Singapore</h2>
      <p>
        PyCon APAC 2018 will be held at the National University of Singapore,
        School of Computing.
      </p>
      <p>
        Established in 1998, NUS School of Computing provides a stimulating
        environment that amalgamates the best of educational traditions, drawing
        its faculty staff of 200 from leading universities ranging from the Ivy
        League to Oxbridge.
      </p>
      <p>
        The School, which is a fully fledged faculty within the National
        University of Singapore, has about 2,000 students, a quarter of them
        pursuing graduate studies. Since its early days as the only university
        department in Singapore that produced computing talent for the
        workforce, NUS School of Computing has produced a trail of distinguished
        alumni, including the chief executives and technology architects of
        multinationals and government agencies.
      </p>
      <h2>Getting to Singapore</h2>
      <ul>
        <li>
          <a href="http://yoursingapore.com/">Your Singapore</a> has{' '}
          <a href="http://flights.yoursingapore.com/">flight deals</a> and{' '}
          <a href="http://www.yoursingapore.com/content/traveller/en/plan-your-trip/travel-essentials/visa-customs-legal-regulation.html">
            visa information
          </a>
        </li>
        <li>
          <a href="http://www.publictransport.sg/publish/ptp/en.html">
            Public Transport Singapore
          </a>{' '}
          is a one stop guide to public transportation in Singapore
        </li>
      </ul>

      <h2>Getting a Local Sim Card</h2>
      <p>
        These are the main telcos in Singapore:
        <ul>
          <li>
            <a href="https://www.singtel.com/personal/i/phones-plans/mobile/prepaid/hitouristsimcards">
              Singtel (available in Changi Airport)
            </a>
          </li>
          <li>
            <a href="http://www.starhub.com/personal/mobile/travel-roam/visiting-singapore.html">
              Starthub (available in Changi Airport)
            </a>
          </li>
          <li>
            <a href="https://www.m1.com.sg/personal/roamingandinternationalcalls/visitingsingapore">
              M1 (not available in Changi Airport)
            </a>
          </li>
        </ul>
        You can buy a sim card when you reach Singapore or{' '}
        <a href="https://www.changirecommends.com/deals.aspx?cid=26&t=depart#!9_1_0_0">
          online
        </a>{' '}
        and collect it when you reach the airport. Outside the airport, you can
        get the sim card in any 7-eleven Outlet or Post Office. Stores in Little
        India and Sim Lim Square are known to sell sim cards at a cheaper rate.
        For more extensive information, you can read more{' '}
        <a href="http://prepaid-data-sim-card.wikia.com/wiki/Singapore">here</a>.
      </p>

      <h2>Getting Around</h2>
      <p>
        Singapore has an excellent network for public transportion. You can buy
        an{' '}
        <a href="http://www.ezlink.com.sg/get-your-ez-link-card/where-the-cards-are-sold">
          EZLink Card
        </a>{' '}
        to make the use of local transportation more convenient.
        <ul>
          <li>Buses</li>
          You can pay via the ezlink card. The buses also accept cash when you
          board, but please note that they don't return the change - so coins or
          smaller notes will be more handy. It's more convenient to use an
          EZlink card. If you leave near a bus stop, you can check the arrival
          of the buses through these apps:{' '}
          <a href="https://www.mytransport.sg/content/mytransport/home/myconcierge/busarrivaltime.html">
            MyTransport.sg
          </a>, or SG Buses App ({' '}
          <a href="https://itunes.apple.com/sg/app/sg-buses-singapore-bus-guide-with-arrival-time/id384353741?mt=8">
            iOS
          </a>{' '}
          |{' '}
          <a href="https://play.google.com/store/apps/details?id=com.iridianstudio.sgbuses&hl=en">
            Android
          </a>) .
          <li>Trains</li>
          You can use the ezlink card. Please be cautious with the rules in the
          train stations. Drinking or eating inside the station (amonst others)
          is prohibited and may cause you to get fined. The Train System Map can
          be downloaded{' '}
          <a href="https://www.lta.gov.sg/content/ltaweb/en/public-transport/mrt-and-lrt-trains/train-system-map.html">
            here
          </a>.
        </ul>
        For navigating, you can check the following apps for directions.
        <ul>
          <li>
            <a href="https://www.google.com.sg/maps">Google Maps</a>
          </li>
          <li>
            <a href="https://mapsconnect.apple.com/">Apple Maps</a>
          </li>
          <li>
            <a href="https://gothere.sg/maps">Gothere.sg</a>
          </li>
        </ul>
        <a href="https://www.uber.com/en-SG/">Uber</a> and{' '}
        <a href="https://www.grab.com/sg/">Grab</a> can also be used to get
        around the city.
      </p>

      <h2>Getting to National University of Singapore</h2>
      <p>
        You may wish to view travel directions on NUS,{' '}
        <a href="http://www.comp.nus.edu.sg/maps/location.html">
          School of Computing
        </a>.
      </p>
      <h2>Public Transportation</h2>
      <h3>If you are taking the bus...</h3>
      <p>
        <b>Option 1:</b>
        <br />
        Take bus services 95 or 151 towards the direction of Kent Ridge campus<br />
        Alight at the bus stop outside Central Library (Bus stop 16181)<br />
        Take the internal shuttle bus A1 or B or D2 from the same bus stop<br />
        Alight at the third bus stop after the one at Central Library, located
        at Carpark 13<br />
        <br />
        <b>Option 2:</b>
        <br />
        Alternatively, take bus service nos. 10, 33, 95, 151, 189, 200 to the
        Kent Ridge Bus Interchange.<br />
        Walk along the covered linkway from the interchange and cross the road
        to the bus stop outside LT13<br />
        Take internal shuttle bus service A1 or B or D2 and alight at the 2nd
        bus stop located at Carpark 13
      </p>
      <h3>If you are taking the MRT...</h3>
      <p>
        <b>From Bouna Vista MRT Station (EW21/CC22):</b>
        <br />
        Take Exit B from the station and cross North Buona Vista Road<br />
        Take bus service 95 from bus stop 11369 (Opposite Bouna Vista Station)<br />
        Alight at the bus stop outside Central Library (Bus stop 16181)<br />
        Take the internal shuttle bus A1 or B or D2 from the same bus stop<br />
        Alight at the third bus stop after the one at Central Library<br />
      </p>
      <p>
        <b>From Clementi MRT Station (EW23):</b>
        <br />
        Take Exit A from the station and walk to the bus interchange behind
        Clementi Mall<br />
        Take bus service 96<br />
        Alight at the bus stop outside Central Library (Bus stop 16181)<br />
        Take the internal shuttle bus A1 or B or D2 from the same bus stop<br />
        Alight at the third bus stop after the one at Central Library<br />
      </p>
      <p>
        <b>From Kent Ridge MRT Station (CC24):</b>
        <br />
        Take Exit A from the station and walk to the bus stop directly in front
        of the exit<br />
        Take internal shuttle bus service A1 from bus stop 18331 (Kent Ridge
        Station)<br />
        Alight at the ninth bus stop located at Carpark 13
      </p>
      <h3>Car / Taxi</h3>
      <p>
        We strongly recommend to all conference attendees to take public
        transport as there are limited parking slots on campus. If you are
        taking a taxi, the following address should be given to the driver:
      </p>
      <p>
        National University of Singapore<br />
        Computing 1<br />
        13 Computing Drive<br />
        Singapore 117417
      </p>

      <h2>Accommodation</h2>
      <p>
        Singapore offers a wide variety of accommodation types to suit all
        budgets and preferences. They range from backpacker, budget and youth
        hostels to boutique and five-star hotels. To find the perfect
        accommodation for your stay in Singapore, use{' '}
        <a href="http://accomodation.yoursingapore.com/">
          Your Singapore Accommodation Search
        </a>{' '}
        or{' '}
        <a href="http://www.hotelscombined.com/City/Singapore.htm">
          HotelsCombined
        </a>. All accommodation categories listed in this website will provide
        full information such as rates, contact details and facilities. Location
        map and fact sheets are also provided for your easy reference.
      </p>

      <h3>Pricey</h3>
      <ul>
        <li>
          <a href="http://www.raffles.com/EN_RA/Property/RHS/">Raffles Hotel</a>,
          1 Beach Road, Singapore
        </li>
        <li>
          <a href="http://www.swissotel.com/EN/Destinations/Singapore/Swissotel+The+Stamford/Hotel%20Home/Hotel%20Home">
            Swissotel the Stamford
          </a>, 2 Stamford Road Singapore 178882
        </li>
        <li>
          <a href="http://www.swissotel.com/EN/Destinations/Singapore/Swissotel+Merchant+Court/Hotel+Home/Hotel+Description">
            Swissotel Merchant Court
          </a>, 20 Merchant Road Singapore 058281
        </li>
        <li>
          <a href="http://www.meritus-hotels.com/hotelresort/marinamandarin/marinamandarin.htm">
            Marina Mandarin Hotel
          </a>, 6 Raffles Boulevard Marina Square, Singapore 039594
        </li>
      </ul>

      <h3>Mid-range</h3>
      <ul>
        <li>
          <a href="http://www.ytchotels.com.sg/sp-ytcexcel/index.cfm?id=0D0DD56E-F206-A174-35275B30385EEA0C">
            Peninsular Excelsior Hotel
          </a>, 5 Coleman Street Singapore 179805
        </li>
        <li>
          <a href="http://www.parkhotelgroup.com/">
            Grand Plaza Park Hotel City Hall
          </a>, 10 Coleman Street, Singapore
        </li>
        <li>
          <a href="http://www.carlton.com.sg/">Carlton Hotel</a>, 76 Bras Basah
          Road, Singapore 189558
        </li>
      </ul>

      <h3>Low-range</h3>
      <ul>
        <li>
          <a href="http://www.royalqueens.com.sg/">Hotel Royal at Queens</a>, 12
          Queen Street Singapore 188553
        </li>
        <li>
          <a href="http://www.allsonhotelsingapore.com/">Allson Hotel</a>, 101
          Victoria Street, Singapore 188018
        </li>
        <li>
          <a href="http://www.parkview.com.sg/">Park View Hotel</a>, 81 Beach
          Road, Singapore 189692
        </li>
      </ul>

      <h3>Homey</h3>
      <p>
        <ul>
          <li>
            <a href="AirBnB listings">AirBnB listings for Singapore</a>
          </li>
          Before booking yourself a place in AirBnB, please read through the
          legality around it{' '}
          <a href="https://www.airbnb.com.sg/help/article/858/singapore">
            here
          </a>.
        </ul>
      </p>
    </ContentCard>
  </div>
)

export default VenuePage
