> This project has been archived and replaced by https://github.com/w3bdesign/dfweb-v3

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
