# PyCon APAC 2018 Website

This site has been built with [GatsbyJS](https://www.gatsbyjs.org/)

## Local development

* Clone this repo
* yarn install
* yarn develop
* Open site at localhost:8000

## Deployment

* You need write access to this repo
* yarn deploy

## Project Structure

* The `layouts` folder contains the main template file `index.js`
* That file uses `Header.js` and `Footer.js`.
* The `pages` folder contains all the pages:
  * `index.js` is the homepage
  * All other filenames become the slug of the page
    * You can link to each page via `import Link from 'gatsby-link'`
    * Use it like so: `<Link to="/about">About</Link>`
