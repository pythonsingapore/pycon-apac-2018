import Helmet from "react-helmet";
import Link from "gatsby-link";
import PropTypes from "prop-types";
import React from "react";

import Header from "./Header.js";
import Footer from "./Footer.js";
import Sponsors from "./Sponsors.js";
import bootstrapMinCss from "./bootstrap.min.css";
import indexCss from "./index.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <title>PyCon SG 2019</title>
    </Helmet>
    <Header />
    {children}
    <Sponsors />
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
