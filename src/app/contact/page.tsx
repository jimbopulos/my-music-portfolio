import { Navbar, Footer } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="mb-10 lg:mt-16 mt-28 px-6 h-full animate-fadeInUp">
        <section className="text-center">
          <h1 className="lg:text-2xl text-xl font-medium">Contact Me</h1>
          <ul className="flex flex-col lg:my-10 my-8 items-center text-center lg:text-lg">
            <li>
              <Link
                href="mailto:james.mgalantino@gmail.com"
                className="hover:text-zinc-500"
              >
                <span className="flex flex-row items-center">
                  {' '}
                  <FontAwesomeIcon
                    width={25}
                    height={25}
                    icon={faEnvelope}
                    className="mr-2"
                  />{' '}
                  james.mgalantino@gmail.com
                </span>
              </Link>
            </li>
            <li className="lg:mt-6 mt-4">
              <Link
                href="https://www.instagram.com/jimmi.mg/"
                className="hover:text-zinc-500"
              >
                <span className="flex flex-row items-center">
                  {' '}
                  <FontAwesomeIcon
                    width={25}
                    height={25}
                    icon={faInstagram}
                    className="mr-2"
                  />{' '}
                  @jimmi.mg
                </span>
              </Link>
            </li>
          </ul>
        </section>

        <div>
          <Image
            src="/jimbo-tapped.jpg"
            alt="JMG-drums"
            width={350}
            height={350}
            className="shadow-lg shadow-zinc-500 rounded-md"
          />
          <p className="text-sm text-zinc-700 mt-2.5 italic">
            Photo by Jonny Scala
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
