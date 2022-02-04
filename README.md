[![DeepScan grade](https://deepscan.io/api/teams/11080/projects/19507/branches/508466/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11080&pid=19507&bid=508466)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/1b9614b413af47d8b8f506e45c3e7f10)](https://www.codacy.com/gh/w3bdesign/dfweb/dashboard?utm_source=github.com&utm_medium=referral&utm_content=w3bdesign/dfweb&utm_campaign=Badge_Grade)
[![CircleCI](https://circleci.com/gh/w3bdesign/dfweb/tree/master.svg?style=shield)](https://circleci.com/gh/w3bdesign/dfweb)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/w3bdesign/dfweb.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/w3bdesign/dfweb/context:javascript)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=w3bdesign_dfweb&metric=alert_status)](https://sonarcloud.io/dashboard?id=w3bdesign_dfweb)
[![CodeQL](https://github.com/w3bdesign/dfweb/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/w3bdesign/dfweb/actions/workflows/codeql-analysis.yml)

# Dfweb

Second version of my portfolio website with Gatsby instead of plain HTML and Javascript.

100% handcoded from scratch. Nothing is copied or pasted from anywhere.

Tested and verified for WCAG accessibility standards.

See below for details about features.

First version is located here: <https://github.com/w3bdesign/dfweb-v1>

GraphQL backend that was previously used is here: <https://github.com/w3bdesign/graphql-express-dfweb>

## Features:

### Misc:

-   Gatsby as main project dependency
-   Gatsby functions for fetching portfolio project information
-   Contact form with CAPTCHA
-   Filter projects based on category
-   React Helmet for modifying HTML header
-   Gatsby plugin for generating robots.txt and sitemap.xml

### Animations:

-   Animate.css for menu animations
-   CSS hover animations in navigation menu
-   React-reveal-effects for revealing content on portfolio
-   Tailwind CSS for animating hamburger in menu
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
-   E2E testing with Cypress
-   Visual snapshot testing with Testcafe and Percy
-   Unit testing with Jest and React-Testing-Library
-   Scrutinizer code quality inspection integration
-   Codefactor code quality inspection integration
-   Sonarcloud integration on every push to maintain code quality
-   Eslint setup with Airbnb style guide
-   Proptypes setup where necessary
