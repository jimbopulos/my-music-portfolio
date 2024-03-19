import { Navbar, Footer } from '@/components';
import Image from 'next/image';

export default function Recording() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="flex flex-col mb-10 lg:mt-16 md:mt-28 mt-24 px-6 items-center text-center">
        <Image
          src="/jmg_piano.jpg"
          alt="JMG-profile-picture"
          width={350}
          height={350}
          className="shadow-lg shadow-zinc-500 rounded-md"
        />

        <section className="animate-fadeInUp">
          <p className="mt-12 lg:text-2xl text-xl">Need a session player?</p>
          <h2 className="lg:text-xl text-lg mt-8 font-medium">
            Available for recording on your song(s):
          </h2>
          <div className="lg:text-lg mt-3">
            <h3 className="mt-2">Piano/Keys</h3>
            <h3 className="mt-2">Drums</h3>
          </div>
          <p className="mt-3">
            via in-person, at any studio in the 5 NYC boroughs or Long Island
          </p>
          <p className="mt-2 italic">or...</p>
          <p className="mt-3">via audio files, recorded at my home studio</p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
