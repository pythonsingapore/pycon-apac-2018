import React from "react";

import { Table } from "reactstrap";

const TalkItem = props => {
  const { title, author } = props;
  return (
    <tr>
      <td>
        <b>{title}</b>
        <br />
        <em>by {author}</em>
      </td>
    </tr>
  );
};

const TemporarySchedule = props => {
  return (
    <div>
      <h3>Accepted Talks</h3>
      <Table striped>
        <tbody>
          <TalkItem
            author="Graham Dumpleton"
            title="Building an interactive training environment using JupyterHub"
          />
          <TalkItem
            author="Yohei Onishi"
            title="Building an analytics data pipeline using Airflow and PySpark"
          />
          <TalkItem
            author="Saurabh Hirani"
            title="The curious case of slow/fast grequests code"
          />
          <TalkItem
            author="Tanay Tummalapalli"
            title="Stream processing fundamentals with Apache Beam"
          />
          <TalkItem
            author="Christianto"
            title="Value investing using Python and Pandas"
          />
          <TalkItem author="William Mckee" title="Processing art with Python" />
          <TalkItem
            author="Takanori Suzuki"
            title="Automate the boring stuff with Slackbot"
          />
          <TalkItem
            author="Aravind Putrevu"
            title="Faster Python apps with open source APM"
          />
          <TalkItem
            author="Novia L Wirhaspati"
            title="When uncertainty matters: Stochastic programming for inventory models with Python"
          />
          <TalkItem
            author="Liling Tan"
            title="Transfer Learning in Natural Language Processing (NLP)"
          />
        </tbody>
      </Table>
    </div>
  );
};

export default TemporarySchedule;
