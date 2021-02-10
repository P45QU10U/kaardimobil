import React from 'react'

export default function MenuLi({ currentpage, children }) {
  
  return (
    <li className={`${currentpage ? 'border-blue-800 border-solid border-b-2' : null} m-2 md:mr-2 text-blue-800 uppercase hover:bg-amber-700 focus:bg-amber-700 font-bold rounded-sm`}>
      {children}
    </li>
  )
}
