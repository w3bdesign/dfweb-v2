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

Uses Cypress, Jest, React-Testing-Library and Percy for testing.

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

- Animate.css for menu animations
- React-reveal-effects for revealing content on portfolio
- React-animated-burgers for animating hamburger in menu

### Accessibility and design:

- WCAG accessibility tested
- Fully responsive design tested on all devices
- Relevant aria labels added for all content
- FontAwesome SVG icons for project icons
- Tailwind CSS for styling
- Google fonts with Gatsby plugin for prefetching

### Code quality:

- E2E testing with Cypress through Netlify build plugins and netlify-plugin-cypress
- Unit testing with Jest and React-Testing-Library
- Visual testing with Percy
- Sonarcloud integration on every push to maintain code quality

## TODO

- Add additional tests
- Implement Sanity CMS and create a blog
