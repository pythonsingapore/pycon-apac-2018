import Helmet from "react-helmet";
import React from "react";
import { Button } from "reactstrap";

import TemplateWrapper from "../layouts";
import SponsorCardContent from "../components/SponsorCardContent.js";
import ContentCard from "../components/ContentCard.js";

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

const SponsorsPage = () => (
  <TemplateWrapper>
    <div className="container">
      <Helmet>
        <title>Sponsors | PyCon SG 2019</title>
      </Helmet>
      <ContentCard>
        <h1>A Big Thank You To Our Sponsors!</h1>
        <p>
          Every year, PyCon Singapore is run purely by volunteers under the
          umbrella of the Python User Group Singapore, which is a non-profit
          society. As the Python gets more and more popular and the local
          community steadily grows, organizing the conference becomes more
          challenging every year.
        </p>
        <p>
          If it wasn't for our sponsors, many of them supporting PyCon for
          several years in a row, this conference would simply not be possible
          at this scale and quality. Leading up to the conference, all of our
          sponsors have been extremely friendly, helpful and enthusiastic about
          the event and as a direct result of their generous support.
        </p>
        <p>
          We do hope that you take some time during our two conference days and
          get to know our sponsors more. Most of them will be present with a
          booth, representing their companies with some of their key-staff,
          eager to answer your questions, have some smalltalk and simply and
          grow closer as a community.
        </p>
      </ContentCard>
      <ContentCard>
        <h2>Platinum Sponsors</h2>

        <SponsorCardContent
          name="DBS"
          url="https://www.dbs.com/"
          image={SponsorDBS}
          tier="Platinum"
        >
          <p>
            DBS is a leading financial services group in Asia with a presence in
            18 markets. Headquartered and listed in Singapore, DBS is in the
            three key Asian axes of growth: Greater China, Southeast Asia and
            South Asia. The bank’s “AA-” and “Aa1” credit ratings are among the
            highest in the world.
          </p>

          <p>
            Recognised for its global leadership, DBS has been named “
            <a href="https://www.dbs.com/newsroom/DBS_named_Worlds_Best_Bank_by_Euromoney_magazine">
              World’s Best Bank
            </a>
            ” by Euromoney, “
            <a href="https://www.dbs.com/newsroom/DBS_named_Global_Bank_of_the_Year">
              Global Bank of the Year
            </a>
            ” by The Banker and “
            <a href="https://www.dbs.com/newsroom/DBS_named_Best_Bank_in_the_World">
              Best Bank in the World
            </a>
            ” by Global Finance. The bank is at the forefront of leveraging
            digital technology to shape the future of banking, having been named
            “
            <a href="https://www.dbs.com/newsroom/DBS_named_worlds_best_digital_bank">
              World’s Best Digital Bank
            </a>
            ” by Euromoney. In addition, DBS has been accorded the “
            <a href="https://www.dbs.com/newsroom/DBS_named_Asias_Safest_Bank_for_10th_consecutive_year">
              Safest Bank in Asia
            </a>
            ” award by Global Finance for ten consecutive years from 2009 to
            2018.
          </p>

          <p>
            For more information, please visit{" "}
            <a href="https://www.dbs.com/">dbs.com</a>.
          </p>
        </SponsorCardContent>

        <SponsorCardContent
          name="Traveloka"
          url="https://www.traveloka.com/"
          image={SponsorTravelokaPng}
          tier="Platinum"
        >
          <p className="mt-3">
            Traveloka is Southeast Asia’s leading online travel and mobility
            company, rapidly expanding its commanding Indonesian presence into
            the rest of SouthEast Asia and beyond. Traveloka is known by its
            customers for enabling mobility, empowering travel, and creating
            moments that bring loved ones together and propel them across the
            globe.
          </p>
          <p>
            At its heart, Traveloka aims to be a world-class technology and data
            organization with first-rate products and its widely-recognized
            contributions and investments in technology and people. The
            technology and data teams are responsible together for the design,
            development, and operations of the integrated human-machine systems
            running the core business, decisions systems, and various functions
            at Traveloka.
          </p>
          <p>
            Founded in 2012 in jakarta by ex-Silicon Valley engineers, Traveloka
            is now operating in 7 countries and has tech centres in Jakarta,
            Singapore, and Bangalore and stays true to its roots of innovating
            and experimenting with new endeavours that will create impacts in
            the lives of our customers, and the markets and industries we touch.
          </p>
          <p>
            For more information, please visit{" "}
            <a href="https://www.traveloka.com/">traveloka.com</a>.
          </p>
        </SponsorCardContent>
      </ContentCard>
      <ContentCard>
        <h2>Gold Sponsors</h2>
        <SponsorCardContent
          name="Firemark"
          url="https://firemarklabs.com.au/"
          image={SponsorFiremarkPng}
          tier="Gold"
        >
          <p>
            At Firemark, we make your world a safer place. We do this by shaking
            up the industry with disruptive technologies that challenge the
            norm. Our experimental nature means we discover ways to
            problem-solve using the latest products and solutions, accelerating
            the launch of new start-ups and ground-breaking businesses into the
            competitive market, fast. ​
          </p>
          ​
          <p>
            We build small, lean teams that are both nimble and cross
            functional, but we know it can take two (and sometimes more) to
            tango. By harnessing the power of industry pioneers and the
            innovation ecosystem, we’re successful in making the world a safer
            place.​
          </p>
          <p>
            Find out more at{" "}
            <a href="https://firemarklabs.com.au/">firemark.com</a>
          </p>
        </SponsorCardContent>
        <SponsorCardContent
          name="Dataiku"
          url="https://dataiku.com/"
          image={SponsorDataikuPng}
          tier="Gold"
        >
          <p>
            Dataiku is the centralized data platform that moves businesses along
            their data journey from analytics at scale to enterprise AI. As a
            company, Dataiku believes that the most advanced, competitive, and
            truly data-driven companies engrain a culture of working with data
            throughout the enterprise instead of siloing it into a specific team
            or role. To make this a reality, Dataiku provides one simple UI for
            data wrangling, mining, visualization, machine learning, and
            deployment based on a collaborative and team-based user interface
            accessible to anyone on a data team, from data scientist to beginner
            analyst.
          </p>

          <p>
            Start by connecting to your existing infrastructure (Dataiku pushes
            computation in your existing SQL, or Spark infrastructure) to
            provide centralized, controlled access to all types and formats of
            raw data. From there, users - from experts to data explorers - can
            work in the tools the know best, whether that’s using interactive
            Python, R, SQL, or a visual user interface for code-free data
            wrangling and machine learning.
          </p>

          <p>
            Teams scale with Dataiku because it provides the structure and
            stability necessary for long-term success while also remaining
            flexible to allow for change and agility around ever-shifting
            technological trends in the industry. Dataiku serves not only as a
            repository of best practices to ensure continuity and consistency
            across everyone working with data at the company, but also
            enterprise-level security, data governance, change management, and
            advanced monitoring features.
          </p>

          <p>
            Dataiku also provides shortcuts to machine learning and AI
            deployment/management, allowing any business to go from raw data to
            prototyping/sandbox to production easily. Quickly package a whole
            workflow, optionally including data and models, as a single
            deployable and reproducible package, and automate your deployments
            as part of a larger production strategy or run all your data
            scenarios. Dataiku provides for fully staged deployment models from
            dev to test to pre production to production, all within a single UI.
          </p>

          <p>
            Customers such as GE, Unilever, BNP Paribas, Fox Network Group,
            Sephora, Santander, and many more trust Dataiku to scale their data
            insights.
          </p>

          <p>
            Dataiku was founded in 2013 by Florian Douetteau (CEO), Marc Batty
            (CSO), Clément Sténac (CTO), and Thomas Cabrol (CPO). In 2018,
            Dataiku tripled their revenue and doubled in size, employing more
            than 250 people between its headquarters in New York and offices in
            Paris, London, and Sydney.
          </p>

          <p>
            Learn more on <a href="http://www.dataiku.com">dataiku.com</a>
          </p>
        </SponsorCardContent>
        <SponsorCardContent
          name="Microsoft"
          url="https://microsoft.com/"
          image={SponsorMicrosoftPng}
          tier="Gold"
        >
          <p>
            Microsoft is the leading platform and company for the mobile-first,
            cloud-first world, and its mission is to empower every person and
            every organization on the planet to achieve more.
          </p>
          <p>
            Find out more about Microsoft Azure at{" "}
            <a href="https://www.azure.microsoft.com">azure.microsoft.com</a>
          </p>
        </SponsorCardContent>
        <SponsorCardContent
          name="DataRobot"
          url="https://www.datarobot.com/sg/"
          image={SponsorDatarobotPng}
          tier="Gold"
        >
          <p>
            DataRobot is the leader in enterprise AI and the category creator
            and leader in{" "}
            <a href="https://www.datarobot.com/platform/what-is-automated-machine-learning/">
              automated machine learning
            </a>
            . Organizations worldwide use DataRobot to empower the teams they
            already have in place to rapidly build and deploy machine learning
            models and create advanced AI applications. With a library of
            hundreds of the most powerful open source machine learning
            algorithms, the DataRobot platform encapsulates every best practice
            and safeguard to accelerate and scale data science capabilities
            while maximizing transparency, accuracy, and collaboration.
          </p>
          <p>
            By making data scientists more productive and enabling the
            democratization of data science, DataRobot helps organizations
            transform into AI-driven enterprises. With offices around the globe,
            DataRobot is backed by $225 million in funding from top-tier firms,
            including New Enterprise Associates, Sapphire Ventures, Meritech,
            and DFJ. For more information, visit our website, and join the
            conversation on <a href="https://twitter.com/DataRobot">Twitter</a>{" "}
            and{" "}
            <a href="https://www.linkedin.com/company/datarobot/">LinkedIn</a>.
          </p>
          <p>
            Find out more at{" "}
            <a href="https://www.datarobot.com/">datarobot.com</a>
          </p>
        </SponsorCardContent>
        <SponsorCardContent
          name="RedHat OpenShift"
          url="https://openshift.com/"
          image={SponsorRedHatPng}
          tier="Gold"
        >
          <p>More info coming soon...</p>
          <p>
            Find out more at{" "}
            <a href="https://www.openshift.com">openshift.com</a>
          </p>
        </SponsorCardContent>
      </ContentCard>
      <ContentCard>
        <h2>Silver Sponsors</h2>
        <SponsorCardContent
          name="Elastic"
          url="https://elastic.co/"
          image={SponsorElasticJpg}
          tier="Silver"
        >
          <p>
            From search for life on Mars to finding the best sushi in our
            neighbourhood, Elastic, the creator of Elasticsearch, Kibana, Beats
            and Logstash, provides open source and commercial solutions designed
            to search, analyze, and visualize data. Since its founding in 2012,
            there have been more than 350 million cumulative downloads of
            Elastic software. The Elastic community is 100,000 members strong.
          </p>

          <p>
            Find out more at <a href="https://elastic.co">elastic.co</a>.
          </p>
        </SponsorCardContent>
        <SponsorCardContent
          name="Twilio"
          url="https://twilio.com/"
          image={SponsorTwilioPng}
          tier="Silver"
        >
          <p>
            Twilio powers the future of business communications. Enabling
            phones, VoIP, and messaging to be embedded into web, desktop, and
            mobile software.
          </p>

          <p>
            Millions of developers around the world have used Twilio to unlock
            the magic of communications to improve any human experience.
          </p>

          <p>
            Twilio has democratized communications channels like voice, text,
            chat, video, and email by virtualizing the world’s communications
            infrastructure through APIs that are simple enough for any developer
            to use, yet robust enough to power the world’s most demanding
            applications.
          </p>

          <p>
            By making communications a part of every software developer’s
            toolkit, Twilio is enabling innovators across every industry — from
            emerging leaders to the world’s largest organizations — to reinvent
            how companies engage with their customers.
          </p>
          <p>
            Find out more at <a href="https://twilio.com">twilio.com</a>
          </p>
        </SponsorCardContent>
        <SponsorCardContent
          name="Port Education"
          url="https://port.education/"
          image={SponsorPortPng}
          tier="Silver"
        >
          <p>More info coming soon.</p>
          <p>
            Find out more at <a href="https://port.education">port.education</a>
          </p>
        </SponsorCardContent>

        <SponsorCardContent
          name="Jublia"
          url="https://www.jublia.com/"
          image={SponsorJubliaJpg}
          tier="Silver"
        >
          <p>
            Jublia is the leader in smart matchmaking and event data analytics
            at B2B events. Headquartered in Singapore, their team of roughly 25
            talented individuals works with event organizers from every single
            continent of the world as well as have innovated alongside 13 of the
            Global Top 20 Exhibition Organisers.
          </p>

          <p>
            Jublia specialises in matching people and content to create
            successful business matching and effective content discovery at
            events. They do this through a data-driven approach built on the
            foundation of an intelligent recommendations platform. They are
            proud to be a 100% Python-driven startup as they continue to build
            their product ecosystem on top of the latest developments of this
            beautiful language.
          </p>
          <p>
            Find out more at <a href="https://jublia.com">jublia.com</a>
          </p>
        </SponsorCardContent>
      </ContentCard>
      <ContentCard>
        <h2>Bronze Sponsors</h2>

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
            top galleries and artists in the region and feature their work
            online in order to make their work accessible to the international
            market. We are in essence an online art gallery that features a
            curated collection of artworks, by a select group of emerging
            artists alongside artists who are much more established and exposed
            in the market.
          </p>
          <p>
            The Artling is a proud supporter of the Python community and has
            been using Python since inception. We will continue to do so as we
            grow and aim to disrupt the art discovery and acquisition process,
            whilst also contributing to the cultural landscape in Asia and
            beyond.
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
            Since we have sponsored PyCon Sigapore in 2016, our team has grown
            and our focus has shifted more towards mobile apps with ReactNative,
            while Django and GraphQL remain our bread and butter on the backend
            side of things. We are always looking for talented full stack
            developers in the region.
          </p>
        </SponsorCardContent>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default SponsorsPage;
