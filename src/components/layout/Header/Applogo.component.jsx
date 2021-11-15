import React from 'react';

import ApplicationLogo from '../../../svg/logo-app.svg';

/**
 * Main SVG logo component
 */

export default function AppLogo() {
  return (
    <div className="flex w-full font-extrabold text-white md:w-1/2 md:justify-start">
      <a className="text-white" href="/" aria-label="Forside">
        <ApplicationLogo className="h-10 ml-4 lg:p-2 xl:p-2 lg:h-16 xl:h-16 lg:ml-2 xl:ml-2" />
      </a>
    </div>
  );
}
