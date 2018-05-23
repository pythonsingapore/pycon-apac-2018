import Helmet from 'react-helmet'
import React from 'react'
import { Button } from 'reactstrap'

import SponsorCardContent from '../components/SponsorCardContent.js'
import ContentCard from '../components/ContentCard.js'

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

const SponsorsPage = () => (
  <div className="container">
    <Helmet>
      <title>Sponsors | PyCon APAC 2018</title>
    </Helmet>
    <ContentCard>
      <h1>A Big Thank You To Our Sponsors!</h1>
      <p>
        2018 will be the biggest PyCon we have ever hosted in Singapore. We have
        more keynote speakers, more scheduled talks, more workshops and more
        side-events (EDU-Track and Young Coder's Workshop) than ever before!
      </p>
      <p>
        It goes without saying that this would not have been possible without
        the overwhelming support that we have gotten from our sponsors. Leading
        up to the conference, all of our sponsors have been extremely friendly,
        helpful and enthusiastic about the event and as a direct result of their
        generous support, this year's conference has maintained the ticket
        prices of recent years and is probably one of the most affordable tech
        conferences of this calibre in the region.
      </p>
      <p>
        We do hope that you take some time during our three conference days and
        get to know our sponsors more. Most of them will be present with a
        booth, representing their companies with some of their key-staff, eager
        to answer your questions, have some smalltalk and simply and grow closer
        as a community.
      </p>
    </ContentCard>
    <ContentCard>
      <h2>Platinum Sponsors</h2>

      {/*<SponsorCardContent
        name="Traveloka"
        url="https://www.traveloka.com/"
        image={SponsorTravelokaPng}
        tier="Platinum"
      >
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </SponsorCardContent>
*/}
      <SponsorCardContent
        name="Gandi.net"
        url="https://www.gandi.net/"
        image={SponsorGandiPng}
        tier="Platinum"
      >
        <p className="mt-3">
          Gandi was among the first domain name registrars to offer ".COM" and
          ".NET" and now manages over 2 million domain names with accreditation
          for over 700 different domain name extensions for its customers,
          placing Gandi among the top domain name registrars worldwide. The
          company supports open source initiatives instead of spending money on
          advertisement. In addition Gandi's Corporate service is used by brands
          and companies worldwide to secure their domain names and protect their
          brand.
        </p>
      </SponsorCardContent>

      <SponsorCardContent
        name="HDE Inc."
        url="https://hde.co.jp/"
        image={SponsorHDEPng}
        tier="Platinum"
      >
        <p className="mt-3">
          HDE is one of the first IT ventures in Japan, established 22 years
          ago. Owning over 73% market share in the whole of Japan, HDE is the #1
          cloud-based security provider based in Tokyo, Japan. With over 3.5
          million users in over 4,000 companies, we’ve keenly presented
          ourselves in the global plenary; from expanding our business to global
          plenary, to changing our main language to English and having 20% of
          our employees international. As our business continuously grows and
          expands, we are looking for talented engineers (front-end, back-end,
          data) to join our team in Tokyo.
        </p>
      </SponsorCardContent>
    </ContentCard>
    <ContentCard>
      <h2>Gold Sponsors</h2>

      <SponsorCardContent
        name="Jetbrains"
        url="https://www.jetbrains.com/"
        image={SponsorJetbrainsPng}
        tier="Gold"
        portrait={true}
      >
        <p className="mt-3">
          JetBrains will be attending PyCon APAC! Dmitry Trofimov and Ernst
          Haagsman, PyCharm team lead and product marketing manager, will be
          manning the booth. Drop by and ask us about the newest features, and
          to tell us how you’ve been using PyCharm. If there’s a feature we
          could make that would make your life easier, now is the time to come
          over and let us know.
        </p>
        <p>
          JetBrains delivers intelligent software solutions that make developers
          more productive by simplifying their challenging tasks, automating the
          routine, and helping them adopt the best development practices.
          PyCharm is the Python IDE for Professional Developers by JetBrains
          providing a complete set of tools for productive Python, Web and
          scientific development, available in three editions. The free and
          open-source PyCharm Community Edition is perfect for pure Python
          coding. PyCharm Professional Edition is designed for professional
          Python and Web developers. PyCharm Educational Edition helps novice
          programmers learn programming with Python easily and effectively.
        </p>
      </SponsorCardContent>

      <SponsorCardContent
        name="Zendesk"
        url="https://www.zendesk.com/"
        image={SponsorZendeskPng}
        tier="Gold"
        portrait={true}
      >
        <p className="mt-3">
          Zendesk's unique approach to customer engagement enables companies to
          listen, respond, and delight both their customers and agents in ways
          not possible before. Loved for its simplicity and elegance, Zendesk is
          the easiest and fastest way to provide great customer service, and
          help brands be the company their customers want them to be.
        </p>
        <p>
          Zendesk currently delivers its leading cloud-based customer engagement
          software to more than 119,000 brands around the world. It is easy to
          try, buy, implement, and use, so both companies, their agents and
          customers will start seeing positive results immediately. Put simply,
          the best customer experiences are built with Zendesk. Learn more at
          www.zendesk.com
        </p>
      </SponsorCardContent>

      <SponsorCardContent
        name="Thoughtworks"
        url="https://www.thoughtworks.com/"
        image={SponsorThoughtworksPng}
        tier="Gold"
      >
        <p className="mt-3">
          ThoughtWorks is a global technology consultancy, 5000 people strong
          across 43 offices in 14 countries. We are a collection of passionate
          people who care about technology. At our heart, we are a custom
          software company and a community of designers, strategists and
          industry experts who solve complex problems working with courageous
          executives who have ambitious missions.
        </p>
        <p>
          We think disruptively to address our clients’ toughest challenges
          through empowering technologies to help them succeed, all the while
          seeking to revolutionize the IT industry and create positive social
          change. Our services span software delivery, products, and consulting,
          but we prefer to talk about ideas, opportunities, and how we can help.
          Join us!
        </p>
      </SponsorCardContent>

      <SponsorCardContent
        name="100 Offer"
        url="https://100offer.com/"
        image={Sponsor100OfferPng}
        tier="Silver"
      >
        <p className="mt-3">
          100offer is the easiest way to find data science and developer roles
          at top tech companies. We are a marketplace community that gathers
          star tech talent so that top enterprises can find them and invite them
          for interviews. Candidates get end-to-end support with our talent
          consultant, who helps free of charge.
        </p>
      </SponsorCardContent>
    </ContentCard>
    <ContentCard>
      <h2>Silver Sponsors</h2>

      <SponsorCardContent
        name="Solacetech"
        url="https://www.solacetech.com.sg/"
        image={SponsorSolacetechPng}
        tier="Silver"
        portrait={true}
      >
        <p className="mt-3">
          Solace Tech Pte. Ltd. is an IT training company aspiring to help
          people to learn technology by simple premises: pre-course work before
          the class, and blended learning. We blend classroom and self-paced
          learning sessions to maximize hands-on ability, time flexibility, and
          affordability. Try our Python class with a guarantee: if you are still
          not able to create a simple program, we will give you a free seat to
          join the next class.
        </p>
      </SponsorCardContent>

      <SponsorCardContent
        name="The Artling"
        url="https://www.theartling.com/"
        image={SponsorTheartlingPng}
        tier="Silver"
        portrait={true}
      >
        <p className="mt-3">
          At The Artling, we are passionate about art and feel that there is a
          great deal of undiscovered talent in Asia. We work with some of the
          top galleries and artists in the region and feature their work online
          in order to make their work accessible to the international market. We
          are in essence an online art gallery that features a curated
          collection of artworks, by a select group of emerging artists
          alongside artists who are much more established and exposed in the
          market.
        </p>
        <p>
          The Artling is a proud supporter of the Python community and has been
          using Python since inception. We will continue to do so as we grow and
          aim to disrupt the art discovery and acquisition process, whilst also
          contributing to the cultural landscape in Asia and beyond.
        </p>
      </SponsorCardContent>

      <SponsorCardContent
        name="Jublia"
        url="https://www.jublia.com/"
        image={SponsorJubliaJpg}
        tier="Silver"
      >
        <p className="mt-3">
          Jublia is proud to do our small part within the community to sponsor
          this coming edition of PYCON APAC 2018. Python is the one to rule them
          all in Jublia. She is utilised throughout our organisation and systems
          to deliver a stable, secure and high performance enterprise grade
          platform.
        </p>
        <p>
          <b>Who are we?</b>
        </p>
        <p>
          Jublia is an established global leader in business matching technology
          and event data analytics.
        </p>
        <p>
          Our mission is to empower event organisers to intelligently match
          people and content at their events. At Jublia, we believe in enabling
          people to discover useful content and meet relevant others through
          intelligent matching technologies. Simultaneously, we empower
          organisers with analytics to easily prove that their events are the
          undisputed channel for marketing spend by businesses in terms of ROI.
        </p>
      </SponsorCardContent>

      <SponsorCardContent
        name="Bitlab Studio"
        url="https://www.bitlabstudio.com/"
        image={SponsorBitlabstudioPng}
        tier="Silver"
        portrait={true}
      >
        <p className="mt-3">
          Bitlab Studio (formerly known as Bitmazk) is a Singapore based full
          stack web agency specialized on creating web applications and mobile
          apps built with Python, Django, ReactJS and ReactNative.
        </p>
        <p>
          Since we have sponsored PyCon Sigapore in 2016, our team has grown and
          our focus has shifted more towards mobile apps with ReactNative, while
          Django and GraphQL remain our bread and butter on the backend side of
          things. We are always looking for talented full stack developers in
          the region.
        </p>
      </SponsorCardContent>

      {/*<SponsorCardContent
        name="Acronis"
        url="https://www.acronis.com/"
        image={SponsorAcronisPng}
        tier="Silver"
      >
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </SponsorCardContent>
      */}
    </ContentCard>{' '}
  </div>
)

export default SponsorsPage
