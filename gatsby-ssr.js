import React from 'react'
import Helmet from "react-helmet"

import "./src/css/main.css"

export const wrapPageElement = ({ element }) => (
  <>
    <Helmet>
      <meta
        http-equiv="Content-Security-Policy"
        content="default-src 'self'; img-src https://*; child-src 'none';"
      />
    </Helmet>

    {element}
  </>
)
