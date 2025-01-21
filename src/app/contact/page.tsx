import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="mb-10 lg:mt-16 mt-28 px-6 h-full">
      <section className="text-center">
        <h1 className="lg:text-2xl text-xl font-medium animate-fadeInRight">
          Contact Me
        </h1>
        <ul className="flex flex-col lg:my-10 my-8 items-center text-center lg:text-lg">
          <li className="animate-fadeInRight">
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
          <li className="lg:mt-6 mt-4 animate-fadeInRight">
            <Link href="tel:631-374-0059" className="hover:text-zinc-500">
              <span className="flex flex-row items-center">
                {' '}
                <FontAwesomeIcon
                  width={25}
                  height={25}
                  icon={faPhone}
                  className="mr-2"
                />{' '}
                631-374-0059
              </span>
            </Link>
          </li>
          {/* <li className="lg:mt-6 mt-4 animate-fadeInRight">
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
          </li> */}
        </ul>
      </section>

      <Image
        src="/jimbo-tapped.jpg"
        alt="JMG-drums"
        width={350}
        height={350}
        priority={true}
        className="shadow-lg shadow-zinc-500 rounded-md w-auto animate-fadeInRight"
      />
      <p className="text-sm text-zinc-700 mt-2.5 italic animate-fadeInRight">
        Photo by{' '}
        <Link
          href="mailto:jscala.project@gmail.com"
          className="hover:text-black"
        >
          Jonny Scala
        </Link>
      </p>
    </div>
  );
}
