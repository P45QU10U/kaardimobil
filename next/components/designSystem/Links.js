import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';

export function ContactLink({ children }) {
  return (
    <Link href="/contact">
      <a className="text-xl fitcontent text-orange-500 no-underline inline-block mb-12 border-orange-500 hover:border-orange-700 hover:text-orange-700 transform transition hover:focus:scale-105 hover:shadow-sm border-2 p-3 rounded-lg">
        {children} <FaArrowAltCircleRight className="inline ml-2" />
      </a>
    </Link>
  );
}
