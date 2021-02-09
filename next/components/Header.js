import React from 'react';
import classnames from 'classnames';
import Menu from './menu/Menu';
import { maxWidthSections } from './designSystem/theme';

export default function Header() {
  return (
    <header
      className={classnames(
        maxWidthSections,
        `flex align-items justify-between`
      )}
    >
      <Menu />
    </header>
  );
}
