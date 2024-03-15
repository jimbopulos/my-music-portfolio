import { Navbar, Footer } from '@/components';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

export default function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="flex flex-col p-12 h-full items-center">
        <Image
          src="/jimbo-1.jpg"
          alt="JMG-profile-picture"
          width={350}
          height={350}
          className="shadow-lg shadow-zinc-500 rounded-md"
        />

        <section className="flex flex-col text-center items-center w-3/5 text-lg">
          <p className="mt-8">Hi, and welcome!</p>
          <p className="mt-4">
            I&#39;m a musician with several years of teaching experience,
            composition writing, recording, and playing live. I have worked as a
            piano instructor and director at School of Rock in Port Jefferson,
            NY and as a recording artist and audio engineer on multiple
            projects.
          </p>
          <p className="mt-8">Here is some of my work:</p>
          <ul className="mt-3">
            <li>
              <Link
                href="https://open.spotify.com/artist/6gIewgM9kUlx1hEvJKt9b8?si=a8RC_Fp5TLOfNpTnEAq7Ow"
                className="hover:text-zinc-500"
              >
                <span className="flex flex-row">
                  <FontAwesomeIcon
                    height={25}
                    width={25}
                    icon={faSpotify}
                    className="mr-2"
                  />{' '}
                  Person
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
                  />{' '}
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
          {/* <div className="my-4">
            I currently offer:
            <ul>
              <li>
                Private Music Lessons (In-person at your residence, or online
                via Zoom, FaceTime, etc.)
              </li>
            </ul>
          </div> */}
        </section>
      </div>
      <Footer />
    </main>
  );
}
