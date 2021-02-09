import React from 'react';
import Link from 'next/link';
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

export default function Menu() {
  const [toggle, setToggle] = React.useState(false);
  const displayedMenu = !toggle ? 'hidden ' : '';

  function toggleMenu(e) {
    e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <nav className="z-40">
      <div className="grid grid-cols-2 p-4 items-center">
        <h1 className=" text-left text-4xl">
          <Link href="/">
            <a href="/" className="flex gap-2 items-center no-underline">
              <img
                width="50"
                height="50"
                className="text-xs"
                src="/images/perfpage.svg"
                alt="logo PerfPage"
              />
              <div className="grid gap-1">
                <span>Homecano</span>
                <span className="text-sm">Garage à domicile</span>
              </div>
            </a>
          </Link>
        </h1>
        <button
          className="grid items-center justify-items-end md:hidden"
          type="button"
          onClick={(e) => toggleMenu(e)}
          aria-expanded={toggle}
          aria-controls="menu"
        >
          <SvgMenuIcon />
        </button>
        <ul
          id="menu"
          className={`${displayedMenu} grid col-span-2 mt-4 text-center md:col-span-1 md:flex md:flex-wrap`}
        >
          {menu.map((entr, index) => (
            <MenuLi key={`menu-${index}`}>
              <Link href={entr.slug}>
                <a
                  href={entr.slug}
                  className="hover:ring hover:ring-fuchsia-500"
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
