import Link from 'next/link';

import { buttonpurposes, buttonsizes } from './theme';

function Button({ size, type, purpose, children, onClick, className }) {
  const classNames = `${buttonpurposes[purpose]} ${buttonsizes[size]} ${className}`;

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={classNames} onClick={onClick}>
      {children}
    </button>
  );
}

function LinkButton({
  size,
  type,
  purpose,
  href,
  children,
  onClick,
  className,
}) {
  const classNames = `${buttonpurposes[purpose]} ${buttonsizes[size]} ${className}`;

  return (
    <Link href={href}>
      <a href={href} className={classNames} onClick={onClick}>
        {children}
      </a>
    </Link>
  );
}

function JoshButton({
  type = 'button',
  bgEdge = 'bg-orange-800',
  bgFront = 'bg-orange-600',
  textColor = 'text-white',
  children,
}) {
  return (
    <button
      type={type}
      className="text-xl fitcontent pushable inline-block no-underline"
    >
      <span className="shadow_button" />
      <span className={`edge ${bgEdge}`} />
      <span className={`front ${bgFront} ${textColor}`}>{children}</span>
    </button>
  );
}

export { Button, LinkButton, JoshButton };
