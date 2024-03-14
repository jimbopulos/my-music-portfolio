import { Navbar, Footer } from '@/components';

export default function Contact() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="h-full p-20">This is the Contact page</div>
      <Footer />
    </main>
  );
}
