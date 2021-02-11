import React from 'react';
import classnames from 'classnames';
import Menu from './menu/Menu';
import { maxWidthSections } from './designSystem/theme';
import Coords from './Coords';

export default function Header() {
  return (
    <>
      <header className={classnames(maxWidthSections, 'relative')}>
        <Menu />
      </header>
      <Coords />
    </>
  );
}
