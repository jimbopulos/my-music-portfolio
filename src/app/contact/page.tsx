import { Navbar, Footer } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="p-12 my-6 h-full text-center animate-fadeInUp">
        <h1 className="text-2xl font-medium">Contact Me</h1>
        <ul className="mt-14 items-center text-center text-lg">
          <li>
            <Link
              href="mailto:james.mgalantino@gmail.com"
              className="hover:text-zinc-500"
            >
              <span className="flex flex-row ">
                {' '}
                <FontAwesomeIcon
                  width={25}
                  height={25}
                  icon={faEnvelope}
                  className="mr-3"
                />{' '}
                james.mgalantino@gmail.com
              </span>
            </Link>
          </li>
          <li className="mt-6">
            <Link
              href="https://www.instagram.com/jimmi.mg/"
              className="hover:text-zinc-500"
            >
              <span className="flex flex-row ">
                {' '}
                <FontAwesomeIcon
                  width={25}
                  height={25}
                  icon={faInstagram}
                  className="mr-3"
                />{' '}
                @jimmi.mg
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <Footer />
    </main>
  );
}
