import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Dashboard() {
  return (
    <div className="flex flex-col mb-10 lg:mt-16 md:mt-28 mt-24 px-6 items-center lg:text-lg">
      <div className="text-left">
        <Image
          src="/jimbo-1.jpg"
          alt="JMG-profile-picture"
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

      <section className="text-center items-center lg:w-1/2 md:w-3/5 animate-fadeInRight">
        <div className="animate-fadeInRight">
          <p className="mt-8">Hi, and welcome!</p>
          <p className="mt-4">
            James Galantino is an experienced music educator,
            multi-instrumentalist, and composer with over 7 years of teaching.
            He is a summa cum laude graduate of SUNY New Paltz (B.S. Music,
            Recording/Audio Engineering). James studied directly with jazz
            masters <strong>Larry Ham</strong> and <strong>Barry Harris</strong>
            , whose advanced pedagogy he shares with students.
          </p>
          <p className="mt-4">
            His professional credits include session work/assistant engineering
            for artists like <strong>Mary J. Blige</strong>,{' '}
            <strong>YG Marley</strong>, and <strong>A Boogie</strong> in NYC
            studios, alongside performances in diverse bands across the NYC
            region.
          </p>
          <p className="mt-4">
            Demonstrating a unique versatility, James is also a published poet,
            a naturalist, and composes cinematic music and beats inspired by his
            life and passion for the outdoors.
          </p>
        </div>
        <p className="mt-8">Here is some of my work:</p>
        <ul className="flex flex-col text-center items-center lg:mt-1 lg:text-lg text-sm">
          <li className="mt-2">
            <Link
              href="https://open.spotify.com/track/2f1OyaQH5E8r9OM7swquPH?si=d88b2aafe9db4f9f"
              className="hover:text-zinc-500"
            >
              <span className="flex flex-row">
                <FontAwesomeIcon
                  height={25}
                  width={25}
                  icon={faSpotify}
                  className="mr-2"
                />
                Person - Jenny
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="https://open.spotify.com/track/6UJlIceQ8RlH49AamaScdH?si=599f8938794a4fe5"
              className="hover:text-zinc-500"
            >
              <span className="flex flex-row">
                <FontAwesomeIcon
                  height={25}
                  width={25}
                  icon={faSpotify}
                  className="mr-2"
                />
                The Paramos - Electrodes
              </span>
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="https://open.spotify.com/track/430BRVRLx2pCn354epZiAd?si=d79d7116b19048ce"
              className="hover:text-zinc-500"
            >
              <span className="flex flex-row">
                <FontAwesomeIcon
                  height={25}
                  width={25}
                  icon={faSpotify}
                  className="mr-2"
                />
                Puji - Millennium Items
              </span>
            </Link>
          </li>
        </ul>

        <p className="mt-8">
          Please, take a look around and feel free to{' '}
          <Link className="text-blue-600 hover:text-blue-400" href="/contact">
            contact
          </Link>{' '}
          me with any questions.
        </p>
      </section>
    </div>
  );
}
