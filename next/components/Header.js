import React from 'react';
import classnames from 'classnames';
import Menu from './menu/Menu';
import { maxWidthSections } from './designSystem/theme';
import Coords from './Coords';
import { useAppContext } from '../pages/_app';
import { Section } from './designSystem/layout';

export default function Header() {
  const { promotions } = useAppContext();
  const {
    description,
    name,
    promocode,
    startduration,
    endduration,
  } = promotions[0];

  return (
    <>
      <header className={classnames(maxWidthSections, 'relative')}>
        <Menu />
      </header>
      <Section className="relative md:w-1/2">
        <div className="text-center bg-white p-2 border-2 border-gray-400">
          <h2 className="text-2xl">{name}</h2>
          <p className="text-xl">{description}</p>
          <p className="text-xl">
            Code promo <span className="font-bold">{promocode}</span>
          </p>
        </div>
      </Section>
      {/* <Coords /> */}
    </>
  );
}
