import React from 'react';
import Link from 'next/link';
import Img from 'next/image';
import { useRouter } from 'next/router';
import { FaPhone } from 'react-icons/fa';
import MenuLi from './MenuLi';
import SvgMenuIcon from './SvgMenuIcon';
import { useAppContext } from '../../pages/_app';
import Promotions from '../Promotions';

export const menu = [
  {
    title: 'Accueil',
    slug: '/',
  },
  {
    title: 'Tarifs',
    slug: '/tarifs',
  },
  {
    title: 'Contact',
    slug: '/contact',
  },

  {
    title: 'A propos',
    slug: '/a-propos',
  },
];

export default function Menu() {
  const { name, phonenumber } = useAppContext();

  const [toggle, setToggle] = React.useState(false);
  const displayedMenu = !toggle ? 'hidden ' : '';

  const { asPath } = useRouter();

  function toggleMenu(e) {
    // e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <nav>
      <div className="grid grid-cols-2 p-4 items-center md:flex md:gap-2">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 text-left text-4xl">
          <Link href="/">
            <a href="/" className="flex gap-2 items-center no-underline">
              <Img
                width="350"
                height="350"
                src="/images/homecano.png"
                alt={`logo ${name}`}
              />
            </a>
          </Link>
          <a
            className="text-sm md:text-base text-center"
            href={`tel:+33${phonenumber.slice(1)}`}
          >
            <FaPhone title="telephone" className="inline" />{' '}
            {phonenumber.split(/(?=(?:..)*$)/).join(' ')}
          </a>
        </div>
        <div className="grid justify-items-end md:hidden">
          <button
            type="button"
            onClick={(e) => toggleMenu(e)}
            aria-expanded={toggle}
            aria-controls="menu"
          >
            <SvgMenuIcon />
          </button>
        </div>
        <ul
          id="menu"
          className={`${displayedMenu} w-full grid col-span-2 mt-4 text-center md:flex md:flex-wrap md:justify-end`}
        >
          {menu.map((entr, index) => (
            <MenuLi key={`menu-${index}`} currentpage={asPath === entr.slug}>
              <Link href={entr.slug}>
                <a
                  href={entr.slug}
                  className="hover:ring hover:ring-orange-500"
                  onClick={(e) => toggleMenu(e)}
                >
                  {entr.title}
                </a>
              </Link>
            </MenuLi>
          ))}
        </ul>
      </div>
    </nav>
  );
}
