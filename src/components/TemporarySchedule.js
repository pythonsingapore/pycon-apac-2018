import React from "react";
import styled from 'styled-components'

import { Table, Row, Col } from "reactstrap";
import Mengi from '../../static/speakers/Mengyi-Yuan.jpg'
import Keith from '../../static/speakers/Keith-Rozario.jpg'
import Novia from '../../static/speakers/Novia-Listiyani.jpg'
import Christianto from '../../static/speakers/Christianto-Kurniawan.jpg'
import Aravind from '../../static/speakers/Aravind-Putrevu.jpg'
import Phil from '../../static/speakers/Phil-Nash.jpg'
import Ben from "../../static/speakers/Ben-Sadeghi.jpg"
import Graham from '../../static/speakers/Graham-Dumpleton.jpg'
import Liling from '../../static/speakers/Liling-Tan.jpg'
import MaxWang from "../../static/speakers/max-wang.jpg"
import Takanori from '../../static/speakers/Takanori-Suzuki.jpg'
import Vaibhav from '../../static/speakers/Vaibhav-Srivastav.jpg'
import Yohei from '../../static/speakers/Yohei-Onishi.jpg'
import Saurabh from '../../static/speakers/Saurabh-Hirani.jpg'
import Tanay from '../../static/speakers/Tanay-Tummalapalli.jpg'
import William from '../../static/speakers/William-Mckee.jpg'
import Thu from '../../static/speakers/Thu-Ya-Kyaw.jpg'

const SpeakerImage = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: center;
  border-radius: 100px;
`

const Content = styled.div`
  width: 100%;
  @media(max-width:575px) {
    text-align: center;
  }
`

const TalkItem = props => {
  const { image, title, author, occupation, company } = props;
  return (
    <tr>
      <td>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: '0 0 100px' }}>
            <Content>
              <SpeakerImage style={{ display: 'inline-block', backgroundImage: `url(${image})` }} />
            </Content>
          </div>
          <div style={{ flex: '1 1 auto', marginLeft: '1em' }}>
            <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
              <Content>
                <b>{title}</b><br />
                <em>by {author}, {occupation}</em>
                {company &&
                  <em> at {company}</em>
                }
              </Content>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

const TemporarySchedule = props => {
  return (
    <div>
      <Table striped>
        <tbody>
          <TalkItem
            author="Max Wang"
            title="Machine Learning Model Development and Operation in DBS"
            image={MaxWang}
            occupation="Data Scientist"
            company="DBS"
          />
          <TalkItem
            author="Aravind Putrevu"
            title="Faster Python apps with open source APM"
            occupation="Developer Advocate"
            company="Elastic"
            image={Aravind}
          />
          <TalkItem
            author="Phil Nash"
            title="2FA, WTF?"
            occupation="Developer Evangelist"
            company="Twilio"
            image={Phil}
          />
          <TalkItem
            author="Graham Dumpleton"
            title="Building an interactive training environment using JupyterHub"
            occupation="Developer Advocate for OpenShift"
            company="Red Hat"
            image={Graham}
          />
          <TalkItem
            author="Yohei Onishi"
            title="Building an analytics data pipeline using Airflow and PySpark"
            occupation="Data Engineer"
            image={Yohei}
          />
          <TalkItem
            author="Takanori Suzuki"
            title="Automate the boring stuff with Slackbot"
            occupation="Vice Chair of PyCon JP Committee, Director"
            company="BeProud Inc."
            image={Takanori}
          />
          <TalkItem
            author="Liling Tan"
            title="Transfer Learning in Natural Language Processing (NLP)"
            occupation="Research Scientist"
            image={Liling}
          />
          <TalkItem
            author="Vaibhav Srivastav"
            title="Demystifying Time Series Forecasting using Python"
            occupation="Data Scientist"
            company="Deloitte Consulting LLP"
            image={Vaibhav}
          />

          <TalkItem
            author="Ben Sadeghi"
            title="Koalas: Pandas API on Apache Spark "
            occupation="Solutions Architect"
            company="Databricks"
            image={Ben}
          />
          <TalkItem
            author="Saurabh Hirani"
            title="The curious case of slow/fast grequests code"
            occupation="Principal Devops Engineer"
            company="Autodesk"
            image={Saurabh}
          />
          <TalkItem
            author="Tanay Tummalapalli"
            title="Stream processing fundamentals with Apache Beam"
            occupation="Student"
            image={Tanay}
          />
          <TalkItem
            author="William Mckee"
            title="Processing art with Python"
            occupation="Artist / API Developer"
            image={William}
          />
          <TalkItem
            author="Thu Ya Kyaw"
            title="Demystifying RPA with Python and tagUI"
            occupation="Developer Evangelist"
            image={Thu}
          />
          <TalkItem
            author="Novia L Wirhaspati"
            title="When uncertainty matters: Stochastic programming for inventory models with Python"
            occupation="Data Scientist"
            image={Novia}
          />
          <TalkItem
            author="Christianto"
            title="Value investing using Python and Pandas"
            occupation="Engineer"
            company="Solacetech"
            image={Christianto}
          />
          <TalkItem
            author="Keith Rozario"
            title="Python on AWS Lambda"
            occupation="IT Architect"
            image={Keith}
          />
          <TalkItem
            author="Mengi Yuan"
            title="Scaling product support with Python at WhatsApp"
            occupation="Solutions Engineer"
            image={Mengi}
          />

        </tbody>
      </Table>
    </div>
  );
};

export default TemporarySchedule;
