import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col items-center p-2 bg-black text-white shadow-lg w-full">
      <section className="mb-6 flex flex-row mt-8 items-center text-center text-lg">
        <div>
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
        </div>
        <div>
          <Link
            href="https://www.instagram.com/jimmi.mg/"
            className="hover:text-zinc-500"
          >
            <FontAwesomeIcon width={25} height={25} icon={faInstagram} />
          </Link>
        </div>
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
