const path = require('path')

module.exports = {
  siteMetadata: {
    title: `PyCon APAC 2018`,
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
}
