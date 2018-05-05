import Helmet from 'react-helmet'
import React from 'react'

import { Table, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import ContentCard from '../components/ContentCard.js'

const commonSchedule = {
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
        title: 'Opening Keynote'
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
        title: 'Closing Keynote'
      },
    ],
  },
  day3: {
    label: 'Day 3',
    opening: [
      {
        time: '9:00am - 10:00am',
        speaker: 'Alan Descoins, CTO at Tryolabs',
        title: 'Opening Keynote'
      },
      {
        time: '10:00am - 10:40am',
        speaker: '',
        title: 'Breakfast',
        type: 'break',
      },
    ],
    closing: [
    ],
  }
}

const tracks = {
  'dataScience': {
    tabHeader: 'Track 1: Data Science',
    day2: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Aditthya Ramakrishnan, Founder at Next Tech Lab',
        title: 'Building Siri : AI Powered Chatbots',
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'David Tan',
        title: 'How to deploy machine learning models to production (frequently and safely)',
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
        title: 'GloVe - Python for Word Representation'
      },
      { 
        time: '1:45pm - 2:25pm',
        speaker: 'Kenneth Emeka Odoh, Software Engineer at Apivio Systems / Nuri Telecoms',
        title: 'Tracking the tracker: Time Series Analysis in Python From First Principles'
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
        title: 'Better Care and Feeding of Machine Learning Models'
      },
      {
        time: '4:30pm - 5:10pm',
        speaker: 'Loryfel Nunez, Data Scientist at JP Morgan Chase & Co.',
        title: 'Teaching Computers ABCs: A Quick Intro to Natural Language Processing'
      },
    ],
    day3: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Alizishaan Khatri, Machine Learning Engineer at Pivotus Ventures',
        title: 'Detecting offensive messages using Deep Learning: A micro-service based approach'
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'Markku Lepistö, Solutions Architect - APAC and Japan, Google Cloud Platform at Google',
        title: 'Streaming data processing pipelines with Apache Beam [in Python, naturally!]'
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 2:25pm',        
        speaker: 'Sarthak Deshwal, Associate Software Engineer at Expedia Group',
        title: 'How to understand user behaviour using Multiple Linear Regression?'
      },
      {
        time: '2:30pm - 4:25pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '4:30pm - 5:15pm',
        speaker: 'Novia Listiyani Wirhaspati',
        title: 'Implementing Reinforcement Learning for Marketing Channel Optimization with Python'
      },
    ]
  },
  'webDevOps': {
    tabHeader: 'Track 2: Web Development / DevOps',
    day2: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Chinab Chugh',
        title: 'A scalable blueprint for product customization with Python 3 '
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'Wilson Tjhi',
        title: 'Writing robust, readable, and maintainable concurrent programs in Python'
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 1:40pm',
        speaker: 'Ernst Haagsman',
        title: 'Dockerizing Django'
      },
      {
        time: '1:45pm - 2:30pm',
        speaker: 'Galuh Sahid, Data Engineer at Midtrans',
        title: 'Build a Data-Driven Web App That Everyone Can Use'
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
        title: 'Devil is in the details: Microservices, security and DevOps'
      },
      {
        time: '4:30pm - 5:10pm',
        speaker: 'Tang Ing Wei, Lead System Engineer at ROKKI Avionics Pte. Ltd.',
        title: 'Taming System with Python: A Sysadmin perspective'
      },
    ],
    day3: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Graham Dumbleton',
        title: 'Deploying Applications using Kubernetes'
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'TBD',
        title: '100 Offer Talk'
      },
      {
        time: '12:00pm - 1:00pm',
        speaker: '',
        title: 'Lunch',
        type: 'break',
      },
      {
        time: '1:00pm - 2:25pm',
        speaker: 'Jonathan Reiter',
        title: 'Testing Complex Python Dependencies With Docker Containers'
      },
      {
        time: '2:30pm - 3:45pm',
        speaker: '',
        title: 'Tea Break',
        type: 'break',
      },
      {
        time: '3:45pm - 4:30pm',
        speaker: 'Denys Makogon, Principal Software Development Engineer at Oracle',
        title: 'Applying serverless architecture pattern to distributed data processing'
      },
    ]
  },
  'others': {
    tabHeader: 'Track 3: Other',
    day2: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Abhishek Pandey',
        title: 'Run your ICO using Python'
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'Jonas Obrist, Software Engineer at HDE Inc.',
        title: 'Artisanal Async Adventures'
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
        title: 'Practical Python Design Patterns'
      },
      {
        time: '1:45pm - 2:25pm',
        speaker: 'Satish Shankar, Data and AI Lead at Manulife',
        title: 'Crypto-AI: A Guide to Building Private and Decentralized AI Systems by Mixing Cryptography, Blockchains and AI.'
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
        title: 'Test-Driven Development of a Static Code Analyzer in Python'
      },
      {
        time: '4:30pm - 5:10pm',
        speaker: 'Manabu Terada',
        title: 'Introduce syntax and history of Python from 2.4 to 3.6'
      },
    ],
    day3: [
      {
        time: '10:45am - 11:25am',
        speaker: 'Narendran R, Senior Software Consultant at Tarka',
        title: 'Concurrency vs Parallelism'
      },
      {
        time: '11:30am - 12:00pm',
        speaker: 'Vigneshwer Dhinakaran, Mozilla TechSpeaker',
        title: 'Pumping up Python modules using Rust'
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
        title: 'Inside a PyPy JIT: is that even legal?'
      },
      {
        time: '1:45pm - 2:30pm',
        speaker: 'Tsung-Hsien Lee, Staff Software Engineer at Toyota Research Institute',
        title: 'Elements of Programming Interviews in Python'
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
        title: 'TBD'
      },
      {
        time: '4:30pm - 5:15pm',
        speaker: 'Sony Valdez, Python Philippines',
        title: 'Game Programming with Python'
      },      
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

  renderSchedule(talks) {
    return talks.map((element) => {

      if (element.type === 'break') {
        return (
          <tr>
            <td>
              <Row>
                <Col sm='3'>
                  {element.time}
                </Col>
                <Col sm='9'>
                  <b>{element.title}</b>
                </Col>
              </Row>
            </td>
          </tr>
        );
      }
      
      return (
        <tr>
          <td>
            <Row>  
              <Col sm='3'>
                {element.time}
              </Col>
              <Col sm='9'>
                <b>{element.title}</b>
                <br />
                <i>by {element.speaker}</i>
              </Col>
            </Row>
          </td>
        </tr>
      );
      }                  
    )
  }

  renderTab(day) {
    return (
      <div>
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
              this.renderSchedule(tracks[key][day])
            }
            </tbody>
            </Table>
          </TabPane>
        )
      }    
    </TabContent>
    </div>
    );
  }

  render() {
    return (
      <div className='container'>
        <Helmet>
          <title>Conference Schedule | PyCon APAC 2018</title>
        </Helmet>
        
        <ContentCard>
          <h1>Conference Schedule</h1>

          <Button href='#day2'>Day 2</Button> <Button href='#day3'>Day 3</Button>
          
          {
            Object.keys(commonSchedule).map(day => {
              return (
                <div>
                  <br />
                  <Card body>
                    <h4 id={day}>{commonSchedule[day].label}</h4>
                    <br />
                    <Table striped>
                      <tbody>
                      {this.renderSchedule(commonSchedule[day].opening)}
                      </tbody>
                    </Table>

                    <br />
                    
                      {this.renderTab(day)}

                    <br />

                    <Table striped>
                      <tbody>
                      {this.renderSchedule(commonSchedule[day].closing)}
                      </tbody>
                    </Table>
                  </Card>
                </div>
              )
            })
          }  
        </ContentCard>
      </div>
    )
  }
}

export default ConferenceSchedulePage;