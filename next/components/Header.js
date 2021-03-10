import React from 'react';
import classnames from 'classnames';
import Menu from './menu/Menu';
import { maxWidthSections } from './designSystem/theme';
import Coords from './Coords';

import { Section } from './designSystem/layout';
import { BackgroundImage } from './BackgroundImage';
import Promotions from './Promotions';

export default function Header() {
  return (
    <div>
      <div className="relative">
        {/* <div className="absolute -top-16 -left-10 -right-10 h-1/2 bg-gradient-to-tl from-orange-500 to-orange-300 transform  rotate-2" /> */}
        {/* <BackgroundImage bgopacity="bg-opacity-100" bgcolor="bg-orange-400" /> */}
        <BackgroundImage src="/images/jesse-bowser-c0I4ahyGIkA-unsplash.jpg" />

        <header className={classnames(maxWidthSections, 'relative')}>
          <Menu />
        </header>
        <Promotions />
        {/* <Coords /> */}
      </div>
    </div>
  );
}
