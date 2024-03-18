import { Navbar, Footer } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Dashboard() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col p-12 my-6 items-center">
        <Image
          src="/jimbo-1.jpg"
          alt="JMG-profile-picture"
          width={350}
          height={350}
          className="shadow-lg shadow-zinc-500 rounded-md"
        />

        <section className="text-center items-center lg:w-3/5 animate-fadeInUp">
          <div className="animate-fadeInUp">
            <p className="mt-12">Hi, and welcome!</p>
            <p className="mt-4">
              I&#39;m a musician with several years of teaching experience,
              composition writing, recording, and playing live. I have worked as
              a piano instructor and director at School of Rock in Port
              Jefferson, NY and as a recording artist and audio engineer on
              multiple projects.
            </p>
            <p className="mt-4">
              I&#39;ve worked as a piano instructor and director at School of
              Rock in Port Jefferson, NY and as a recording artist and audio
              engineer on multiple projects.
            </p>
          </div>
          <p className="mt-8">Here is some of my work:</p>
          <ul className="flex flex-col text-center items-center mt-3 lg:text-lg text-sm">
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
                  Electrodes - The Paramos
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
                  Millennium Items - Puji
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
      <Footer />
    </main>
  );
}
