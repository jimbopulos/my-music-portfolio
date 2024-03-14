import { Navbar, Footer } from '@/components';

export default function Dashboard() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar />
      <div className="h-full">this is the home page...</div>
      <Footer />
    </main>
  );
}
