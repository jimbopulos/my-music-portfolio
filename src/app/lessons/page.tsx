import { Navbar, Footer } from '@/components';

export default function Lessons() {
  return (
    <div className="mb-10 lg:mt-16 md:mt-28 mt-28 px-4 md:w-3/4 text-center">
      <p className="lg:text-2xl text-xl animate-fadeInUp">
        I offer private music lessons at your residence, or online via FaceTime,
        Zoom, etc.
      </p>
      <section className="mt-10 animate-fadeInUp">
        <h2 className="lg:text-xl text-lg font-medium">
          Instruments & Pedagogy
        </h2>
        <div className="lg:text-lg mt-3">
          <h3 className="mt-2">Piano - Beginner to Advanced</h3>
          <h3 className="mt-2">Drums - Beginner to Intermediate</h3>
          <h3 className="mt-2">Guitar - Beginner to Intermediate</h3>
          <h3 className="mt-2 italic">and...</h3>
          <h3 className="mt-2">Music Theory - Beginner to Advanced</h3>
        </div>
      </section>
      <section className="mt-10 animate-fadeInUp">
        <h2 className="lg:text-xl text-lg font-medium">Rates</h2>
        <div className="lg:text-lg mt-3">
          <h3 className="mt-2">30 minutes - $30</h3>
          <h3 className="mt-2">45 minutes - $40</h3>
          <h3 className="mt-2">60 minutes - $50</h3>
        </div>
      </section>
      <section className="mt-10 animate-fadeInUp">
        <h2 className="lg:text-xl text-lg font-medium">
          Booking & Cancellation Policy
        </h2>
        <div className="lg:text-lg mt-3">
          <h3 className="lg:mt-2 mt-4">
            I ask that you please give 24 hour minimum notice before booking
            and/or cancelling a lesson.
          </h3>
          <h3 className="lg:mt-2 mt-4">
            If you cancel within 24 hours of a scheduled lesson, you will be
            charged $25 regardless of the lesson&#39;s duration...
          </h3>
          <h3 className="lg:mt-2 mt-4">
            I do understand that emergenices happen on short notice, and I&#39;m
            happy to make these exceptions. We can talk about it!
          </h3>
        </div>
      </section>
    </div>
  );
}
