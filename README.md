[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=w3bdesign/dfweb)](https://dependabot.com)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ca1f4d3ffd4b40a5ac872428787f1442)](https://app.codacy.com/gh/w3bdesign/dfweb?utm_source=github.com&utm_medium=referral&utm_content=w3bdesign/dfweb&utm_campaign=Badge_Grade)
[![CircleCI](https://circleci.com/gh/w3bdesign/dfweb/tree/master.svg?style=shield)](https://circleci.com/gh/w3bdesign/dfweb)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/w3bdesign/dfweb/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/w3bdesign/dfweb/?branch=master)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/45702547/Dfweb)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_dfweb&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_dfweb)

# Dfweb

Second version of my portfolio website with Gatsby instead of plain HTML and Javascript.

100% handcoded from scratch. Nothing is copied or pasted from anywhere.

Tested and verified for WCAG accessibility standards.

See below for details about features.

First version is located here: <https://github.com/w3bdesign/dfweb-v1>

GraphQL backend is here: <https://github.com/w3bdesign/graphql-express-dfweb>

## Features:

### Misc:

-   Gatsby as main project dependency
-   GraphQL for fetching portfolio project information
-   Filter projects based on category
-   React Helmet for modifying HTML header
-   Gatsby plugin for generating robots.txt and sitemap.xml
-   React-PDF for displaying PDF CV

### Animations:

-   Animate.css for menu animations
-   CSS hover animations in navigation menu
-   React-reveal-effects for revealing content on portfolio
-   React-animated-burgers for animating hamburger in menu
-   React-spring for animations on front page and page transitions

### Accessibility and design:

-   WCAG accessibility tested
-   Fully responsive design tested on all devices
-   Relevant aria labels added for all content
-   Devicon SVG icons for project icons
-   Tailwind CSS for styling
-   Google fonts with Lato

### Code quality:

-   Continuous Integration with CircleCI
-   Codacy static code quality analysis
-   E2E testing with Cypress and netlify-plugin-cypress
-   Visual snapshot testing with Testcafe and Percy
-   Unit testing with Jest and React-Testing-Library
-   Scrutinizer code quality inspection integration
-   Codefactor code quality inspection integration
-   Sonarcloud integration on every push to maintain code quality
-   Eslint setup with Airbnb style guide
-   Proptypes setup where necessary
