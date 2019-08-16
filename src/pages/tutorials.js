import Helmet from "react-helmet";
import React from "react";

import TemplateWrapper from "../layouts";
import ContentCard from "../components/ContentCard.js";
import Tutorial from "../components/Tutorial.js";

const TutorialsPage = () => (
  <TemplateWrapper>
    <div className="container">
      <Helmet>
        <title>Tutorials | PyCon SG 2019</title>
      </Helmet>

      <ContentCard>
        <h1>PyCon Singapore 2019 Tutorials</h1>
        <p>
          This year, PyCon Singapore features six exciting tutorials! As in
          previous years, these tutorials are not part of the main conference.
          This means, if you would like to attend these tutorials, you need to
          purchase a separate ticket for each tutorial that you want to attend.
        </p>
        <p>
          Each tutorial will run about three hours with a thirty minute tea
          break in between. At noon, we will serve buffet lunch for all
          participants.
        </p>
        <p>
          We run three tutorials in parallel, so you can purchase up to two
          tutorial tickets: One for the morning session, and one for the
          afternoon session.
        </p>
        <p>
          <a
            href="https://eventnook.com/event/pyconsingapore2019/"
            className="btn btn-primary"
          >
            Purchase Your Tutorial Tickets Now
          </a>
        </p>
      </ContentCard>

      <ContentCard>
        <h2>Morning Tutorials</h2>
        <p>Morning tutorials run from 10am to 1pm on Saturday, October 12.</p>
        <hr />
        <Tutorial
          speaker="Hui Xiang Chua"
          title="Webscraping Using Selenium, Beautifulsoup and APIs"
        >
          <p>
            Webscraping is particularly useful when we would like to extract
            data off the web into formats that are suitable for analysis.
          </p>
          <p>
            In this tutorial, we will make use of libraries such as Selenium and
            BeautifulSoup as well as APIs to perform webscraping.
          </p>
          <p>
            Participants should be at least familiar with the basics of Python
            programming. The tutorial is fully hands-on and requires
            participants to bring their own laptops.
          </p>
        </Tutorial>

        <Tutorial
          speaker="Yue Lin Choong"
          title="Developing Arcade Games with Python"
        >
          <p>In this tutorial, we will dive into the popular PyGame library.</p>
          <p>First we will learn about basic arcade game architecture:</p>
          <ul>
            <li>Game loops</li>
            <li>Game stats</li>
            <li>Game objects</li>
            <li>Game play</li>
          </ul>
          <p>Then we will actually implement a Typing Tutor Game</p>
          <ul>
            <li>Game logic</li>
            <li>User actions</li>
            <li>Falling words</li>
            <li>Cityline</li>
          </ul>
          <p>
            In the end, we will have a complete project and will discuss
            possible next steps.
          </p>
        </Tutorial>

        <Tutorial
          speaker="Timothy Liu"
          title="Optimizing Deep Learning Training Performance in TensorFlow"
        >
          <p>
            This workshop will be an introduction to using TensorFlow 2.0 and
            how to optimize your model training for speed without sacrificing
            quality.
          </p>

          <p>
            It would be good if attendees have some Python and Machine Learning
            awareness, but this workshop will be suitable for beginners as well.
            However, this will not be a “Introduction to Machine Learning
            Theory” workshop.
          </p>

          <p>
            Participants are required to bring their own laptop with a web
            browser.
          </p>

          <p>
            Slides and code examples will be made available during and after the
            workshop.
          </p>

          <p>A. Introductory section (~1h)</p>
          <ul>
            <li>Brief introduction to Deep Learning</li>

            <li>
              Brief introduction to tf.keras as the new high-level API in
              TensorFlow 2.0
            </li>

            <li>Introduce hardware accelerators such as GPU and TPU</li>

            <li>
              Basic tips on improve training performance, including better input
              pipelining with tf.data
            </li>

            <li>Code sample (Colab/Jupyter notebook)</li>

            <li>1st half Q&A</li>
          </ul>

          <p>B. Improve TF performance with XLA (~30 min)</p>
          <ul>
            <li>Introduce XLA (Accelerated Linear Algebra)</li>
            <li>Code sample (XLA with tf.keras in TF 2.0)</li>
          </ul>

          <p>C. Improve TF performance with mixed precision (~30 min)</p>

          <ul>
            <li>Introduce the idea of mixed precision</li>

            <li>
              Introduce the Automatic Mixed Precision (AMP) feature in TF 1.14
              and TF 2.0
            </li>

            <li>Code sample (AMP with tf.keras in TF 2.0)</li>
          </ul>

          <p>D. Putting everything together (~30 min)</p>

          <ul>
            <li>
              Demonstrate how to use tf.data, XLA and AMP to create highly
              optimized deep learning training pipelines to train models faster
            </li>

            <li>Code sample (Colab notebook)</li>

            <li>Efficient Distributed Training with Horovod</li>

            <li>final Q&A</li>
          </ul>
        </Tutorial>
      </ContentCard>

      <ContentCard>
        <h2>Afternoon Tutorials</h2>
        <p>Afternoon tutorials run from 2pm to 5pm on Saturday, October 12.</p>
        <hr />
        <Tutorial
          speaker="Carine-Belle + Yonatan"
          title="Building a Blockchain in Python"
        >
          <p>
            We will build a working blockchain with all the basic functionality,
            and deploy our own currency, pyconCoin - from scratch.
          </p>

          <p>
            Let’s take a complicated topic, break it up into simple building
            blocks, and connect the dots in our favorite way - by implementing
            them in Python.
          </p>

          <p>
            It's incredibly cool to see how easy it is to create things that
            sound relatively complex.
          </p>

          <p>No understanding in blockchain is needed for this talk.</p>
        </Tutorial>
        <Tutorial
          speaker="Graham Dumpleton"
          title="Kubernetes and Best Practices for Using Containers"
        >
          <p>
            This will be a workshop in two parts. The first part of the workshop
            will step you through the fundamentals of deploying applications to
            Kubernetes. The second part of the workshop will go through best
            practices for building container images for deployment to both
            Kubernetes and other container runtimes such as Docker.
          </p>

          <p>
            In the Kubernetes part of the workshop it will cover key Kubernetes
            features such as deployments, services, routing, logging,
            configuration, debugging etc, plus linking together applications,
            such as using a database with a front end web application.
          </p>

          <p>
            In the second part of the workshop on building container images, it
            will cover best practices such as not running as root, being able to
            run as any user ID and how to setup file system permissions
            correctly, use of Python virtual environments, dealing with web
            servers/applications that don't reap child processes correctly, how
            to configure applications, how to ensure that a base container image
            is extendable and various other topics.
          </p>

          <p>
            In both parts of the workshop, web applications used as examples
            will be implemented in Python. When building the container image,
            Python web applications will be deployed using mod_wsgi-express but
            discussion of other methods for hosting Python web applications will
            also be discussed.
          </p>

          <p>
            For the workshop, an online hosted environment will be provided for
            attendees to use. Attendees will require a laptop to work with,
            using Chrome or Firefox browsers, but will not need to install
            anything locally. Everything will be done through the web browser
            using the hosted environment provided. Wifi access to the internet
            will be required.
          </p>
        </Tutorial>
        <Tutorial speaker="BuildingBloCS students" title="Drone Programming with Tello EDU">
          <p>
            Computing students from BuildingBloCS schools bring to you an 
            introductory programmng course to use Python to connect and
            and control a Tello EDU drone using User Datagram Protocol (UDP), 
            and learn about computational thinking concepts such as decomposition,
            abstraction, pattern recognition and algorithm design.
          </p>
          
          <p>Participants should have basic familiarity with Python i.e. 
          variables, data types, conditionals, loops, arrays and functions. 
          There is a limit of 40 participants. Tello EDU drones will be provided 
          on a pair sharing basis. This is a BYOD workshop.
          </p>  
        </Tutorial>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default TutorialsPage;
