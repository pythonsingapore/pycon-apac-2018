import Helmet from 'react-helmet'
import React from 'react'

import ContentCard from '../components/ContentCard.js'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="container">
      <Helmet>
        <title>{frontmatter.title} | PyCon APAC 2018</title>
      </Helmet>
      <ContentCard>
        <h1>{frontmatter.title}</h1>
        <p className="text-muted">{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </ContentCard>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
