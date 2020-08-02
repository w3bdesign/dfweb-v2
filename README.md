[![Netlify Status](https://api.netlify.com/api/v1/badges/257f94b1-03ed-4340-af84-7480754fcc6f/deploy-status)](https://app.netlify.com/sites/dfweb/deploys)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![React-Testing-Library](https://img.shields.io/badge/unit%20testing-React--Test--Library-purple)](https://testing-library.com/)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/45702547/Dfweb)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_dfweb&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_dfweb)
![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)


# Dfweb

Second version of my portfolio website with Gatsby instead of plain HTML and Javascript.

100% handcoded from scratch. Nothing is copied or pasted from anywhere.

Tested and verified for WCAG accessibility standards.

Uses a remote GraphQL API for fetching portfolio projects.

Uses Tailwind CSS for styling.

Uses Cypress for testing.

First version is located here: https://github.com/w3bdesign/dfweb-v1

Code and repository for GraphQL backend is here: https://github.com/w3bdesign/graphql-express-dfweb

## Features:

- Gatsby as main project dependency
- Animate.css for menu animations
- GraphQL for fetching portfolio project information
- WCAG accessibility tested
- Fully responsive design tested on all devices
- Filter projects based on category
- Relevant aria labels added for all content
- Cypress E2E testing through Netlify build plugins and netlify-plugin-cypress
- Unit testing with Jest and React-Testing-Library
- Sonarcloud integration on every push to maintain code quality
- FontAwesome SVG icons for project icons
- Tailwind CSS for styling
- React Helmet for modifying HTML header
- Google fonts with Gatsby plugin for prefetching
- Gatsby plugin for generating robots.txt and sitemap.xml
- UUID for unique IDs for mapped elements
- React-reveal-effects for revealing content on portfolio
- React-animated-burgers for animating hamburger in menu
- React-PDF for displaying PDF CV

## TODO

- Add SVG badge for React-Testing-Library
