import Link from 'next/link';
import { FaArrowAltCircleRight, FaEdge } from 'react-icons/fa';
import PropTypes from 'prop-types';

export function ContactLink({ children }) {
  return (
    <Link href="/contact">
      <a className="text-xl fitcontent text-orange-500 no-underline inline-block mb-12 border-orange-500 hover:border-orange-700 hover:text-orange-700 transform transition hover:focus:scale-105 hover:shadow-sm border-2 p-3 rounded-lg">
        {children} <FaArrowAltCircleRight className="inline ml-2" />
      </a>
    </Link>
  );
}

export function JoshButtonLink({
  href,
  bgEdge = 'bg-orange-800',
  bgFront = 'bg-orange-600',
  textColor = 'text-white',
  children,
}) {
  return (
    <Link href={href}>
      <a className="text-xl fitcontent pushable inline-block no-underline">
        <span className="shadow_button" />
        <span className={`edge ${bgEdge}`} />
        <span className={`front ${bgFront} ${textColor}`}>{children}</span>
      </a>
    </Link>
  );
}

JoshButtonLink.propTypes = {
  href: PropTypes.string,
  bgEdge: PropTypes.string,
  bgFront: PropTypes.string,
  textColor: PropTypes.string,
  children: PropTypes.any,
};
