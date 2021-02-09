import React from 'react'

export default function MenuLi({ children }) {
  return (
    <li className="m-2 md:mr-2 bg-amber-600 hover:bg-amber-700 focus:bg-amber-700 text-white font-bold rounded-sm">
      {children}
    </li>
  )
}
