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

## How To Create An Archive

After the conference, we usually want to archive the site into static pages,
so that we can kick-off a new repo for the next year's conference and can
easily host all our old sites without being bound to any software stack.

1. Disable Login/Signup/Archive links in `Header.js` and deploy
2. Create folder `static/archive/YYYY`
3. `cd` into that folder
4. Now run `wget`:

wget \
 --recursive \
 --no-clobber \
 --page-requisites \
 --html-extension \
 --convert-links \
 --restrict-file-names=windows \
 --domains pycon.sg \
 --no-parent \
 https://pycon.sg
