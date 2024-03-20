import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col items-center p-5 h-full bg-black text-white shadow-lg w-full">
      <section className="mb-3 flex flex-row mt-4 items-center text-center text-lg">
        <Link
          href="mailto:james.mgalantino@gmail.com"
          className="hover:text-zinc-500"
        >
          <FontAwesomeIcon
            width={25}
            height={25}
            icon={faEnvelope}
            className="mr-6"
          />
        </Link>

        <Link
          href="https://www.instagram.com/jimmi.mg/"
          className="hover:text-zinc-500"
        >
          <FontAwesomeIcon width={25} height={25} icon={faInstagram} />
        </Link>
      </section>
      <p className="text-sm italic">
        Built by{' '}
        <Link
          className="text-blue-600 hover:text-blue-400"
          href="https://github.com/jimbopulos"
        >
          James Galantino
        </Link>{' '}
        ©2024
      </p>
    </footer>
  );
}
