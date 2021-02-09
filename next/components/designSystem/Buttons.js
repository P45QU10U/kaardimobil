import Link from 'next/link'

import { buttonpurposes, buttonsizes } from './theme'

function Button({ size, type, purpose, children, onClick, className }) {
  const classNames = `${buttonpurposes[purpose]} ${buttonsizes[size]} ${className}`

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  )
}

function LinkButton({ size, type, purpose, href, children, onClick, className }) {
  const classNames = `${buttonpurposes[purpose]} ${buttonsizes[size]} ${className}`

  return (
    <Link href={href}>
      <a href={href} className={classNames} onClick={onClick}>
        {children}
      </a>
    </Link>
  )
}

export { Button, LinkButton }
