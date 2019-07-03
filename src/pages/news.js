import Helmet from "react-helmet";
import React from "react";

import ContentCard from "../components/ContentCard.js";
import TemplateWrapper from "../layouts";

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            date
          }
        }
      }
    }
  }
`;

const NewsPage = props => (
  <TemplateWrapper>
    <div className="container">
      <Helmet>
        <title>News | PyCon SG 2019</title>
      </Helmet>
      <ContentCard>
        <h1>News</h1>
        {props.data.allMarkdownRemark.edges.map((item, index) => (
          <div key={index}>
            <hr />
            <h2>
              <a href={item.node.frontmatter.path}>
                {item.node.frontmatter.title}
              </a>
            </h2>
            <p className="text-muted">{item.node.frontmatter.date}</p>
          </div>
        ))}
      </ContentCard>
    </div>
  </TemplateWrapper>
);

export default NewsPage;
