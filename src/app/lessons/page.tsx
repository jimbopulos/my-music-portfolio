import { Navbar, Footer } from '@/components';

export default function Lessons() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="p-12 my-6 text-center">
        <p className="text-2xl animate-fadeInUp">
          I offer private music lessons at your residence, or online via
          FaceTime, Zoom, etc.
        </p>
        <section className="mt-14 animate-fadeInUp">
          <h2 className="text-xl font-medium">Instruments and Pedagogy</h2>
          <div className="text-lg mt-3">
            <h3 className="mt-2">Piano - Beginner to Advanced</h3>
            <h3 className="mt-2">Drums - Beginner to Intermediate</h3>
            <h3 className="mt-2">Guitar - Beginner to Intermediate</h3>
            <h3 className="mt-2 italic">and...</h3>
            <h3 className="mt-2">Music Theory - Beginner to Advanced</h3>
          </div>
        </section>
        <section className="mt-14 animate-fadeInUp">
          <h2 className="text-xl font-medium">Rates</h2>
          <div className="text-lg mt-3">
            <h3 className="mt-2">30 minutes - $30</h3>
            <h3 className="mt-2">45 minutes - $40</h3>
            <h3 className="mt-2">60 minutes - $50</h3>
          </div>
        </section>
        <section className="mt-14 animate-fadeInUp">
          <h2 className="text-xl font-medium">Booking & Cancellation Policy</h2>
          <div className="text-lg mt-3">
            <h3 className="mt-2">
              I ask that you please give 24 hour minimum notice before booking
              and/or cancelling a lesson.
            </h3>
            <h3 className="mt-2">
              If you cancel within 24 hours of a scheduled lesson, you will be
              charged $25 regardless of the lesson&#39;s duration...
            </h3>
            <h3 className="mt-2">
              I do understand that emergenices happen on short notice, and
              I&#39;m happy to make these exceptions. We can talk about it!
            </h3>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
