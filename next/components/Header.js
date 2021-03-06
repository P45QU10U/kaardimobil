import React from 'react';
import classnames from 'classnames';
import Menu from './menu/Menu';
import { maxWidthSections } from './designSystem/theme';
import Coords from './Coords';
import { useAppContext } from '../pages/_app';
import { Section } from './designSystem/layout';

export default function Header() {
  const { promotions } = useAppContext();
  console.log(promotions);

  return (
    <>
      <header className={classnames(maxWidthSections, 'relative')}>
        <Menu />
      </header>
      <Section>
        <h2>En ce moment</h2>
        {JSON.stringify(promotions, null, 2)}
      </Section>
      {/* <Coords /> */}
    </>
  );
}
