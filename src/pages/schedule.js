import Helmet from 'react-helmet'
import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
<<<<<<< HEAD

=======
>>>>>>> Added link to workshop and education summit for Day 1 in the schedules page
import {
  Table,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from 'reactstrap'
import classnames from 'classnames'

import ContentCard from '../components/ContentCard.js'
import Schedule from '../components/Schedule.js'

const commonSchedule = {
  day1: {
    label: 'Day 1',
    opening: [
      {
        time: '8:00am - 8:55am',
        speaker: '',
        title: 'Registration',
        type: 'break',
      },
      {
        time: '9:00am - 10:00am',
        speaker:
          'Jordan Dea Mattson, Site Director, Singapore Engineering Centre at Indeed.com',
        title: 'Opening Keynote',
      },
      {
        time: '10:00am - 10:40am',
        speaker: '',
        title: 'Breakfast',
        type: 'break',
      },
      {
        time: '10:00am - 12:00pm',
        speaker: '',
        title: 'Workshops',
        type: 'break',
        url: '/workshops/',
        urlText: 'Read more about workshops here...',
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 2:23pm',
        speaker: '',
        title: 'Workshops (continued)',
        type: 'break',
      },
      {
        time: '2:30pm - 3:40pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '3:40pm - 4:30pm',
        speaker: '',
        title: 'Workshops (continued) ',
        type: 'break',
      },
      {
        time: '4:30pm - 6:00pm',
        speaker: '',
        title: 'Coding Competition',
        subtitle: 'More info coming soon...',
        type: 'break',
      },
    ],
  },
  day2: {
    label: 'Day 2',
    opening: [
      {
        time: '8:00am - 8:55am',
        speaker: '',
        title: 'Registration',
        type: 'break',
      },
      {
        time: '9:00am - 10:00am',
        speaker: 'Katharine Jarmul, Founder at kjamistan',
        abstract: '',
        title: 'Opening Keynote',
      },
      {
        time: '10:00am - 10:40am',
        speaker: '',
        title: 'Breakfast',
        type: 'break',
      },
    ],
    closing: [
      {
        time: '5:15pm - 5:45pm',
        speaker: 'Dr. Yves Hilpisch, CEO at The Python Quants',
        abstract: '',
        title: 'Closing Keynote',
      },
    ],
  },
  day3: {
    label: 'Day 3',
    opening: [
      {
        time: '9:00am - 10:00am',
        speaker: 'Alan Descoins, CTO at Tryolabs',
        title: 'Opening Keynote',
      },
      {
        time: '10:00am - 10:40am',
        speaker: '',
        title: 'Breakfast',
        type: 'break',
      },
    ],
    closing: [],
  },
}

const tracks = {
  dataScience: {
    tabHeader: 'Track 1: Data Science',
    day2: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Aditthya Ramakrishnan, Founder at Next Tech Lab',
        abstract: 'Ever wanted to make your own virtual assistant that tells witty jokes, engages in philosophical banter and helps automate useful tasks? In this talk, we will break down how to make effective bots that have their own quirky personalities and can be used to create engaging conversational experiences.',
        title: 'Building Siri : AI Powered Chatbots',
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'David Tan, Software Developer at Thoughtworks',
        abstract: 'ML practitioners can have a hard time deploying their models to production, even though continuous & fear-free deployments is a solved problem in software engineering. We will demonstrate how we can apply "continuous delivery" principles to reduce deployment time from weeks/months into <30-minutes',
        title:
          'How to deploy machine learning models to production (frequently and safely)',
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 1:40pm',
        speaker: 'Loveme Felicilda, Data Scientist at Ahrefs',
        abstract: 'The talk will show you how to use Glove-python, an implementation of Stanford\'s Global Vectors algorithm to represent words as numeric values (vectors) to generate word relationships. Word vector representations make mathematical operations on words possible.',
        title: 'GloVe - Python for Word Representation',
      },
      {
        time: '1:45pm - 2:25pm',
        speaker:
          'Kenneth Emeka Odoh, Software Engineer at Apivio Systems / Nuri Telecoms',
        abstract: 'Humans seek to know what the future holds. In order to predict the future, we have to study the past. Time series analysis can provide the right framework for prediction. This talk is focused on forecasting and anomaly detection.',
        title:
          'Tracking the tracker: Time Series Analysis in Python From First Principles',
      },
      {
        time: '2:30pm - 3:40pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '3:45pm - 4:25pm',
        speaker: 'Jeanne Choo',
        abstract: 'Traditional training and testing workflows for machine learning models neglect important features, namely: reproducibility, interpretability, retraining and lifecycle management. This talk explores these ideas, shares latest developments, then implements an end-to-end example.',
        title: 'Better Care and Feeding of Machine Learning Models',
      },
      {
        time: '4:30pm - 5:10pm',
        speaker: 'Loryfel Nunez, Data Scientist at JP Morgan Chase & Co.',
        abstract: 'Natural Language Processing (NLP) is a component of Artificial Intelligence. Knowledge of NLP can make unstructured text data add tremendous value to any application. We will go over basic NLP tasks, techniques and tools. We will end with an NLP app built from open source libraries.',
        title:
          'Teaching Computers ABCs: A Quick Intro to Natural Language Processing',
      },
    ],
    day3: [
      {
        time: '10:45am - 11:25am',
        speaker:
          'Alizishaan Khatri, Machine Learning Engineer at Pivotus Ventures',
        abstract: 'What are you doing to control abusive content on your platform? Can your current solution tell the difference between "f\*\*king awesome" and "f\*\*king loser"? Can it detect racist and sexist content? In this talk, you will learn how to build a deep learning based solution and deploy it as a micro-service.',
        title:
          'Detecting offensive messages using Deep Learning: A micro-service based approach',
      },
      {
        time: '11:30am - 12:00pm',
        speaker:
          'Markku Lepistö, Solutions Architect - APAC and Japan, Google Cloud Platform at Google',
        abstract: 'Everything is about data. Data drives your decisions, your features, and can be your product. But batch processing is too slow - you have to analyze and act in real-time. Apache Beam is a new open source project for unified data processing. Streaming Beam Python pipelines are now here!',
        title:
          'Streaming data processing pipelines with Apache Beam [in Python, naturally!]',
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 2:25pm',
        speaker:
          'Sarthak Deshwal, Associate Software Engineer at Expedia Group',
        abstract: 'Studying the user behaviour on app/website is one of the most hot topics among product companies. Multiple linear regression exactly helps you to find out the most important factors about your user and deliver the most important features to them. We will discuss the process, and the pros and cons of it.',
        title:
          'How to understand user behaviour using Multiple Linear Regression?',
      },
      {
        time: '2:30pm - 4:25pm',
        speaker: '',
        abstract: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '4:30pm - 5:15pm',
        speaker: 'Novia Listiyani Wirhaspati',
        abstract: 'So, you have heard that moments where Deep Reinforcement Learning (DRL) has empowered machines to win games against human. But then, what\'s next? In this talk, we are going to discuss how we implement Proximal Policy Optimization (PPO) - a method in DRL - to solve real-world business problem.',
        title:
          'Implementing Reinforcement Learning for Marketing Channel Optimization with Python',
      },
    ],
  },
  webDevOps: {
    tabHeader: 'Track 2: Web Development / DevOps',
    day2: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Chinab Chugh, Co-founder at Jublia',
        abstract: 'The talk focuses on how a SaaS project can be flexible to the business needs of their clients. It will discuss on a custom structure we have built using Python 3.6 to extend our core technology for client customisations, with emphasis on building rapidly and quick code deployments.',
        title: 'A scalable blueprint for product customization with Python 3 ',
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'Wilson Tjhi, Senior Consultant at ThoughtWorks',
        abstract: 'Threading, futures, coroutines, asyncio, celery, and gevent. What are the differences among these concurrency techniques? This presentation tries to make clear different concurrency models supported by Python and which libraries are best suited for the different problems that each model solves.',
        title:
          'Writing robust, readable, and maintainable concurrent programs in Python',
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 1:40pm',
        speaker: 'Ernst Haagsman, Product Marketing Manager for PyCharm at JetBrains',
        abstract: 'Docker helps make sure that the Django application you develop is exactly the same as the Django application you eventually deploy. In this talk, you will learn how to containerize a Django application, and use docker-compose to connect your Django application to your entire stack.',
        title: 'Dockerizing Django',
      },
      {
        time: '1:45pm - 2:30pm',
        speaker: 'Galuh Sahid, Data Engineer at Midtrans',
        abstract: 'You\'re a data scientist with a machine learning model that you want to show everyone. Do you give your users your Python scripts and tell them to run "python mycoolmodel.py"? Is there a better alternative? How about a web app? The speaker will show you how Flask can be the best fit *pun intended* for this case.',
        title: 'Build a Data-Driven Web App That Everyone Can Use',
      },
      {
        time: '2:30pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '3:45pm - 4:25pm',
        speaker: 'Mohammed A Imran, Senior Security Engineer at Zendesk',
        abstract: 'Security is tough and is even tougher to do in complex environments with lots of dependencies. Microservices architecture eases the pain a bit but brings its own challenges. This talk will showcase how we can leverage DevSecOps techniques to secure python based APIs/Microservices and at scale.',
        title: 'Devil is in the details: Microservices, security and DevOps',
      },
      {
        time: '4:30pm - 5:10pm',
        speaker:
          'Tang Ing Wei, Lead System Engineer at ROKKI Avionics Pte. Ltd.',
        abstract: 'We can tame the concurrency in Python even through the constraint of GIL by using the concept of Communicating Sequential Process (CSP). This is a sysadmin\'s sharing on how to tame the bewilderment among various OS\'s in daily tasks by utilizing Python\'s concurrency libraries and modules.',
        title: 'Taming System with Python: A Sysadmin perspective',
      },
    ],
    day3: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Graham Dumbleton, Author of mod_wsgi, Developer Advocate for OpenShift at Red Hat',
        abstract: 'Using multithreading in Python applications? Interested in complex use cases for decorators and context managers? This talk will describe how the Java programming language "synchronized" keyword, for handling synchronisation in multithread applications, can be implemented in Python.',
        title: 'Deploying Applications using Kubernetes',
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'TBD',
        abstract: '',
        title: '100 Offer Talk',
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 2:25pm',
        speaker: 'Jonathan Reiter, Managing Director at Data Finnovation',
        abstract: 'The talk will be about a testing process for complex dependencies. Consider code driving an external data processor: good tests are hard as so much state never passes through the interpreter.  Our approach leverages containers and Python\'s test and environment control tools to design and build better tests.',
        title: 'Testing Complex Python Dependencies With Docker Containers',
      },
      {
        time: '2:30pm - 3:45pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '3:45pm - 4:30pm',
        speaker:
          'Denys Makogon, Principal Software Development Engineer at Oracle',
        abstract: 'In this talk we will go through the whole serverless thing: from decomposing app and its logic to microservices and further to smaller bits, i.e. functions to defining data flow through functions and building their fault-tolerant pipeline.',
        title:
          'Applying serverless architecture pattern to distributed data processing',
      },
    ],
  },
  others: {
    tabHeader: 'Track 3: Other',
    day2: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Abhishek Pandey',
        abstract: 'When you read about Ethereum smart contract tutorials, most likely, Truffle framework is used as an example. What the speaker wants to showcase is how easy it can be to use Python instead to not just test, but even run your smart contracts, including advanced scenarios like creating blockchain or launching ICO!',
        title: 'Run your ICO using Python',
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'Jonas Obrist, Software Engineer at HDE Inc.',
        abstract: 'Asynchronous networking may seem hard to understand at first, in this talk, the speaker will show this is not the case. In 100 lines of code, he will write a low level async network stack in front of your eyes, explaining how things work as we go. By the end, you should understand how and why async code works!',
        title: 'Artisanal Async Adventures',
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 1:40pm',
        speaker: 'Ram, Director/Co-founder at Zentropy Pvt Ltd',
        abstract: 'Any production application requires good use of design patterns and this talk will be about popular design patterns/choices and their implementation. The talk will also cover basics of metaclasses and be using metaclasses in some design choices practically.',
        title: 'Practical Python Design Patterns',
      },
      {
        time: '1:45pm - 2:25pm',
        speaker: 'Satish Shankar, Data and AI Lead at Manulife',
        abstract: 'Learn the essential cryptographic ingredients necessary to build machine learning & AI systems that can be effective and yet respect your privacy.',
        title:
          'Crypto-AI: A Guide to Building Private and Decentralized AI Systems by Mixing Cryptography, Blockchains and AI.',
      },
      {
        time: '2:30pm - 3:45pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '3:45pm - 4:25pm',
        speaker: 'Terry Yin, Programmer at Odd-e',
        abstract: 'Static analyzers help us find problems in our code. They are like compilers in terms of complexity; they need to know the syntax of target languages. Is it possible to build such tools without comprehensive upfront design? He will share his experience in making such tool in Python over the past 8 years.',
        title: 'Test-Driven Development of a Static Code Analyzer in Python',
      },
      {
        time: '4:30pm - 5:10pm',
        speaker: 'Manabu Terada, Founder and CEO at CMS Communications Inc.',
        abstract: 'The speaker will introduce the new syntax and functions between Python 2.4 and Python 3.6 in this talk. I will also compare the old style to the new style. You will learn the best practices for Python coding and how to perform refactoring your old Python code. You can look at the evolution of Python.',
        title: 'Introduce Syntax and History of Python from 2.4 to 3.6',
      },
    ],
    day3: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Narendran R, Senior Software Consultant at Tarka',
        abstract: 'A good code should use resources efficiently, which means not over utilise them as well as not leaving them idle. Main feature of Python3 is its async capabilities. After learning what concurrency is and why concurrency is not parallelism. We will leverage asyncIO library to design concurrent code.',
        title: 'Concurrency vs Parallelism',
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'Vigneshwer Dhinakaran, Mozilla TechSpeaker',
        abstract: 'Learn to build high performance and memory safe Python extensions using Rust. Discover this and more tips to boost up your Python application.',
        title: 'Pumping up Python modules using Rust',
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 1:40pm',
        speaker: 'Aleksandr Koshkin, Senior Developer at Positive Technologies',
        abstract: 'This time we are going to dig down to the RPython tool chain core - JIT compiler generator. We will examine the very essence of the approach taken by the PyPy team - that is how to quit writing JITted VMs by hand, stop worrying and have fun again.',
        title: 'Inside a PyPy JIT: is that even legal?',
      },
      {
        time: '1:45pm - 2:30pm',
        speaker:
          'Tsung-Hsien Lee, Staff Software Engineer at Toyota Research Institute',
        abstract: 'I will educate the audience on how to solve algorithmic problems commonly asked at interviews, emphasizing the aspects of Python that are the most useful. I will also describe how hiring decisions are made behind-the-scenes, based on my professional experiences at Facebook, Google, and Uber.',
        title: 'Elements of Programming Interviews in Python',
      },
      {
        time: '2:30pm - 3:45pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '3:45pm - 4:25pm',
        speaker: 'TBD',
        abstract: '',
        title: 'TBD',
      },
      {
        time: '4:30pm - 5:15pm',
        speaker: 'Sony Valdez, Python Philippines',
        abstract: 'In less than an hour, we will be making a simple game using pygame. There will be live coding and audience participation. Beginners will be inspired to take up programming. Non-beginner coders will learn the basics of game programming.',
        title: 'Game Programming with Python',
      },
    ],
  },
}

class ConferenceSchedulePage extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    const val = Object.keys(tracks).map(key => {
      return key
    })

    this.state = {
      activeTab: 'dataScience',
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }

  renderSchedule(talks) {
    return talks.map(element => {
      if (element.type === 'break') {
        return (
          <tr key={element.title}>
            <td>
              <Row>
                <Col xs="12" sm="3">
                  {element.time}
                </Col>
                <Col xs="12" sm="9">
                  <b>{element.title}</b>
                </Col>
              </Row>
            </td>
          </tr>
        )
      }

      return (
        <tr key={element.title}>
          <td>
            <Row>
              <Col xs="12" sm="3">
                <p>{element.time}</p>
              </Col>
              <Col xs="12" sm="9">
                <b>{element.title}</b>
                <br />
                <i>by {element.speaker}</i>
                <br />
                <br />
                <span>{element.abstract}</span>
              </Col>
            </Row>
          </td>
        </tr>
      )
    })
  }

  renderTab(day) {
    return (
      <div>
        <Nav tabs>
          {Object.keys(tracks).map(key => {
            return (
              <NavItem key={key}>
                <NavLink
                  key={key}
                  className={classnames({
                    active: this.state.activeTab === key,
                  })}
                  style={{
                    color: this.state.activeTab === key ? '#2a56a2' : '#9eb2da',
                  }}
                  onClick={() => {
                    this.toggle(key)
                  }}
                >
                  <b>{tracks[key].tabHeader}</b>
                </NavLink>
              </NavItem>
            )
          })}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {Object.keys(tracks).map(key => (
            <TabPane tabId={key} key={key}>
              <Schedule talks={tracks[key][day]} />
            </TabPane>
          ))}
        </TabContent>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Conference Schedule | PyCon APAC 2018</title>
        </Helmet>

        <ContentCard>
          <h1>Conference Schedule</h1>
          <Button href="#day1">Day 1</Button>{' '}
          <Button href="#day2">Day 2</Button>{' '}
          <Button href="#day3">Day 3</Button>
          <br />
          <br />
          <div key="day1">
            <h4 id="day1">Day 1</h4>
            <Link to="/workshops/">Workshops at PyCon APAC 2018</Link>
            <br />
            <Link /><Link to="/edu-summit/">Education Summit</Link>
            
          </div>
          {Object.keys(commonSchedule).map(day => {
            return (
              <div key={day}>
                <br />
                <h4 id={day}>{commonSchedule[day].label}</h4>
                <br />
                <Schedule talks={commonSchedule[day].opening} />

                <br />

                {day !== 'day1' && this.renderTab(day)}

                <br />

                {day !== 'day1' && (
                  <Schedule talks={commonSchedule[day].closing} />
                )}
              </div>
            )
          })}
        </ContentCard>
      </div>
    )
  }
}

export default ConferenceSchedulePage
