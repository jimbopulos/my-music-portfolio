import { Navbar, Footer } from '@/components';
import Image from 'next/image';

export default function Recording() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="flex flex-col p-12 my-6 items-center text-center">
        <Image
          src="/jmg_piano.jpg"
          alt="JMG-profile-picture"
          width={350}
          height={350}
          className="shadow-lg shadow-zinc-500 rounded-md"
        />

        <section className="animate-fadeInUp">
          <p className="mt-12 text-2xl">Need a session player?</p>
          <h2 className="text-xl mt-8 font-medium">
            Available for recording on your song(s):
          </h2>
          <div className="text-lg mt-3">
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
