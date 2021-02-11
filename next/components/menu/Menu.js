import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPhone } from 'react-icons/fa';
import MenuLi from './MenuLi';
import SvgMenuIcon from './SvgMenuIcon';

export const menu = [
  {
    title: 'Accueil',
    slug: '/',
  },
  {
    title: 'Prestations',
    slug: '/prestations',
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

const NomProjetBoite = 'Homecano';
const Subline = 'Garage à domicile';
const phonenumber = { href: '+33767472277', display: '07 67 47 22 77' };

export default function Menu() {
  const [toggle, setToggle] = React.useState(false);
  const displayedMenu = !toggle ? 'hidden ' : '';

  const { asPath } = useRouter();

  function toggleMenu(e) {
    e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <nav>
      <div className="grid grid-cols-2 p-4 items-center md:flex md:gap-2">
        <h1 className="flex gap-3 text-left text-4xl">
          <Link href="/">
            <a href="/" className="flex gap-2 items-center no-underline">
              <img
                width="50"
                height="50"
                className="text-xs"
                src="/images/homecano.svg"
                alt="logo Homecano"
              />
            </a>
          </Link>
          <div className="grid gap-1">
            <span>{NomProjetBoite}</span>
            <span className="text-sm">{Subline}</span>

            <a className="text-sm" href={`tel:${phonenumber.href}`}>
              <FaPhone title="telephone" className="inline" />{' '}
              {phonenumber.display}
            </a>
          </div>
        </h1>
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
