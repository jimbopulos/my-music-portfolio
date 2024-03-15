import Link from 'next/link';

export function Footer() {
  return (
    <footer className="flex flex-col items-center">
      <p className="text-sm italic">
        Built by{' '}
        <Link className="text-blue-600" href="https://github.com/jimbopulos">
          James Galantino
        </Link>{' '}
        ©2024
      </p>
    </footer>
  );
}
