[![CircleCI](https://circleci.com/gh/w3bdesign/dfweb.svg?style=shield&circle-token=7c55071b52c34a92536b8de1c0dafe226f8e6ef8)](https://circleci.com/)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![React-Testing-Library](https://img.shields.io/badge/unit%20testing-React--Testing--Library-purple)](https://testing-library.com/)
[![Percy](https://percy.io/static/images/percy-badge.svg)](https://percy.io/45702547/Dfweb)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_dfweb&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_dfweb)


# Dfweb

Second version of my portfolio website with Gatsby instead of plain HTML and Javascript.

100% handcoded from scratch. Nothing is copied or pasted from anywhere.

Tested and verified for WCAG accessibility standards.

See below for details about features.

First version is located here: https://github.com/w3bdesign/dfweb-v1

Code and repository for GraphQL backend is here: https://github.com/w3bdesign/graphql-express-dfweb

## Features:

### Misc:

- Gatsby as main project dependency
- GraphQL for fetching portfolio project information
- Filter projects based on category
- React Helmet for modifying HTML header
- Gatsby plugin for generating robots.txt and sitemap.xml
- React-PDF for displaying PDF CV

### Animations:

- Use-animate-presence for menu animations
- React-reveal-effects for revealing content on portfolio
- React-animated-burgers for animating hamburger in menu

### Accessibility and design:

- WCAG accessibility tested
- Fully responsive design tested on all devices
- Relevant aria labels added for all content
- FontAwesome SVG icons for project icons
- Tailwind CSS for styling
- Google fonts with Lato

### Code quality:

- Continuous Integration with CircleCI
- E2E testing with Cypress and netlify-plugin-cypress
- Unit testing with Jest and React-Testing-Library
- Visual testing with Percy
- Sonarcloud integration on every push to maintain code quality
- Eslint setup with Airbnb style guide
- Proptypes setup where necessary

## TODO

- Add additional tests
- Implement Sanity CMS and create a blog
