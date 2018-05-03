import Helmet from 'react-helmet'
import React from 'react'

import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ContentCard from '../components/ContentCard.js'

const tracks = {
  'dataScience': {
    tabHeader: 'Data Science',
    talks: [
      {
        speaker: "Novia Listiyani Wirhaspati",
        title: "Implementing Reinforcement Learning for Marketing Channel Optimization with Python"
      },
      {
        speaker: "David Tan",
        title: "How to deploy machine learning models to production (frequently and safely)"
      },
      {
        speaker: "Loveme Felicilda",
        title: "GloVe-Python for Word Representation"
      },
      {
        speaker: "Jeanne Choo",
        title: "Better Care and Feeding of Machine Learning Models"
      },
      {
        speaker: "Alizishaan Khatri",
        title: "Detecting offensive messages using Deep Learning: A micro-service based approach"
      },
      {
        speaker: "Aditthya",
        title: "Building Siri : AI Powered Chatbots"
      },
      {
        speaker: "Kenneth Emeka Odoh",
        title: "Tracking the tracker: Time Series Analysis in Python From First Principles"
      },
      {
          speaker: "Markku Lepisto",
          title: "Streaming data processing pipelines with Apache Beam [in Python, naturally!]"
      },
      {
          speaker: "Sarthak Deshwal",
          title: "How to understand user behaviour using Multiple Linear Regression?"
      },
      {
          speaker: "João Moura",
          title: "Unboxing Data Science"
      },
      {
          speaker: "Satish Shankar",
          title: "Crypto-AI: A Guide to Building Private and Decentralized AI Systems by Mixing Cryptography, Blockchains and AI."
      },
      {
          speaker: "Loryfel Nunez",
          title: "Teaching Computers ABCs: A Quick Intro to Natural Language Processing"
      },
    ]
  },
  'webDevOps': {
    tabHeader: 'Web Development / DevOps',
    talks: [
      {
        speaker: "Chinab Chugh",
        title: "A scalable blueprint for product customization with Python 3 "
      },
      {
        speaker: "Ernst Haagsman",
        title: "Dockerizing Django"
      },
      {
        speaker: "Galuh Sahid",
        title: "Build a Data-Driven Web App That Everyone Can Use"
      },
      {
        speaker: "Jonas Obrist",
        title: "Artisanal Async Adventures"
      },
      {
        speaker: "Denys Makogon",
        title: "Applying serverless architecture pattern to distributed data processing"
      },
      {
        speaker: "Wilson Tjhi",
        title: "Writing robust, readable, and maintainable concurrent programs in Python"
      },
      {
        speaker: "Tang Ing Wei",
        title: "Taming System with Python: A Sysadmin perspective"
      },
      {
        speaker: "Mohammed A Imran",
        title: "Devil is in the details: Microservices, security and DevOps"
      },
      {
        speaker: "Graham Dumbleton",
        title: "Deploying Applications using Kubernetes"
      },
      {
        speaker: "Julie Qiu",
        title: "Strategies to Edit Production Data"
      },
      {
        speaker: "Jonathan Reiter",
        title: "Testing Complex Python Dependencies With Docker Containers"
      }  
    ]
  },
  'others': {
    tabHeader: 'Other Topics',
    talks: [
      {
        speaker: "MrValdez",
        title: "Game Programming with Python"
      },
      {
        speaker: "Ram",
        title: "Practical Python Design Patterns"
      },
      {
        speaker: "Terry Yin",
        title: "Test-Driven Development of a Static Code Analyzer in Python"
      },
      {
        speaker: "Narendran R",
        title: "Concurrency vs Parallelism"
      },
      {
        speaker: "Vigneshwer Dhinakaran",
        title: "Pumping up Python modules using Rust"
      },
      {
        speaker: "Tsung-Hsien Lee",
        title: "Elements of Programming Interviews in Python"
      },
      {
        speaker: "Manabu TERADA",
        title: "Introduce syntax and history of Python from 2.4 to 3.6"
      }
    ]
  },
  
};

class ConferenceSchedulePage extends React.Component {

  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);

    const val = Object.keys(tracks).map((key) => {
      return key;
    });

    console.log(val);
    this.state = {
      activeTab: 'dataScience',
    }
  }
  
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Conference Schedule | PyCon APAC 2018</title>
        </Helmet>
        
        <ContentCard>
          <h1>Conference Schedule</h1>
          <br />
          <Nav tabs>
            {
              Object.keys(tracks).map((key) => {
                return (
                <NavItem>
                  <NavLink
                    key={key}
                    className={classnames({ active: this.state.activeTab ===  key})}
                    onClick={() => { this.toggle(key); }}
                  >
                  <b>{tracks[key].tabHeader}</b>
                  </NavLink>
                </NavItem>);
              })
            }
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            {
              Object.keys(tracks).map((key) => 
                <TabPane tabId={key}>
                  <Table striped>
                  <tbody>
                  <br />
                  {
                    tracks[key].talks.map((element) => {
                      return (
                        <tr>
                          <td sm="12">
                            <b>{element.title}</b>
                            <br />
                            <i>by {element.speaker}</i>
                          </td>
                        </tr>
                      );
                      }                  
                    )
                  }
                  </tbody>
                  </Table>
                </TabPane>
              )
            }    
          </TabContent>
        </ContentCard>
      </div>
    )
  }
}

export default ConferenceSchedulePage;