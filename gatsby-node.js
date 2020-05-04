exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // We need access to window
  // See https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules for details
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
