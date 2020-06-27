[![Netlify Status](https://api.netlify.com/api/v1/badges/b4611f60-865d-4387-a096-125d89c96228/deploy-status)](https://app.netlify.com/sites/elegant-sinoussi-21cfec/deploys)
[![CircleCI](https://circleci.com/gh/w3bdesign/dfweb.svg?style=svg)](https://circleci.com/gh/w3bdesign/dfweb)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_dfweb&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_dfweb)
![GitHub last commit](https://img.shields.io/github/last-commit/w3bdesign/dfweb)


# Dfweb

Second version of my portfolio website with Gatsby instead of plain HTML and Javascript.

Uses a remote GraphQL API for fetching portfolio projects.

Uses Tailwind CSS for styling.

Uses Cypress for testing.

First version is located here: https://github.com/w3bdesign/dfweb-v1

## Features:

- Gatsby as main project dependency
- Animate.css for menu animations
- GraphQL for fetching portfolio information
- Cypress E2E testing through Netlify build plugins and netlify-plugin-cypress
- Sonarcloud integration on every push to maintain code quality
- FontAwesome SVG icons for project icons
- Tailwind CSS for styling
- React Helmet for modifying HTML header
- Google fonts with Gatsby plugin for prefetching
- Gatsby plugin for generating robots.txt and sitemap.xml
- UUID for unique IDs for mapped elements
- ScrollReveal for revealing content on portfolio
- React-PDF for displaying PDF CV

## TODO

- Implement additional Cypress tests (for example mobile testing)
- Implement additional tests with React-Testing-Library
