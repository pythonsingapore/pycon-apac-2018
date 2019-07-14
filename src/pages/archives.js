import Helmet from "react-helmet";
import React from "react";

import ContentCard from "../components/ContentCard.js";
import TemplateWrapper from "../layouts";

const ArchivePage = () => (
  <TemplateWrapper>
    <div className="container">
      <Helmet>
        <title>Archives | PyCon SG 2019</title>
      </Helmet>
      <ContentCard>
        <h1>Archives</h1>
        <p>
          Below you can find archived versions of past Python conferences in
          Singapore.
        </p>
        <ul>
          <li>
            <a href="https://pycon.sg/archive/2018/index.html">
              PyCon APAC 2018
            </a>
          </li>
          <li>
            <a href="https://pycon.sg/archive/2016/index.html">PyCon SG 2016</a>
          </li>
          <li>
            <a href="https://pycon.sg/archive/2015/index.html">PyCon SG 2015</a>
          </li>
          <li>
            <a href="https://pycon.sg/archive/2014/index.html">PyCon SG 2014</a>
          </li>
          <li>
            <a href="https://pycon.sg/archive/2013/index.html">PyCon SG 2013</a>
          </li>
        </ul>
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default ArchivePage;
