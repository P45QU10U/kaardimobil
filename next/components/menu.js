import React from 'react'

const navStyles = ['mt-3', 'grid', 'bg-blue-300', 'grid-cols-3']

export default function Menu() {
  // const toggleMenu = document.querySelector('.navigation button')
  // const menu = document.querySelector('.navigation ul')

  const [toggle, setToggle] = React.useState(false)

  const toggleMenu = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  // toggleMenu.addEventListener('click', function () {
  //   const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'))
  //   toggleMenu.setAttribute('aria-expanded', !open)
  //   menu.hidden = !menu.hidden
  // })

  return (
    <nav className="bg-blue-800 text-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
      <button type="button" onClick={toggleMenu} aria-expanded={!toggle} aria-controls="menu">
        Menu
      </button>
      <ul id="menu" hidden={toggle}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/benefits">Benefits</a>
        </li>
        <li>
          <a href="/pricing">Pricing</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
  )
}
