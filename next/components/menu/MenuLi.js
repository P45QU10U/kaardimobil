import React from 'react';

export default function MenuLi({ currentpage, children }) {
  return (
    <li
      className={`${
        currentpage
          ? 'border-gray-800 font-extrabold md:border-solid md:border-b-4'
          : null
      } m-2 md:mr-2 text-gray-800 uppercase md:font-bold`}
    >
      {children}
    </li>
  );
}
