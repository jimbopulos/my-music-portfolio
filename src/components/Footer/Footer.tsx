// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faLinkedin,
  faSquareFacebook,
} from '@fortawesome/free-brands-svg-icons';
// import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col items-center p-5 bg-black text-white shadow-lg w-full">
      <section className="mb-3 flex flex-row mt-4 items-center text-center text-lg animate-fadeInUp">
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
          href="https://www.linkedin.com/in/james-g-0aab6a16a/"
          className="mr-6 hover:text-zinc-500"
        >
          <FontAwesomeIcon width={25} height={25} icon={faLinkedin} />
        </Link>

        <Link
          href="https://www.facebook.com/jimmi.mg68"
          className="hover:text-zinc-500"
        >
          <FontAwesomeIcon width={25} height={25} icon={faSquareFacebook} />
        </Link>

        {/* <Link href="tel:631-374-0059" className="hover:text-zinc-500">
          <FontAwesomeIcon width={25} height={25} icon={faPhone} />
        </Link> */}

        {/* <Link
          href="https://www.instagram.com/jimmi.mg/"
          className="hover:text-zinc-500"
        >
          <FontAwesomeIcon width={25} height={25} icon={faInstagram} />
        </Link> */}
      </section>
      <p className="text-sm italic animate-fadeInUp">
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
