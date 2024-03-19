'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils';

export function NavbarDesktop() {
  const currentPath = usePathname();

  return (
    <span className="hidden lg:flex flex-row items-center">
      <div className="left-0 absolute text-2xl font-medium p-6 shadow-lg w-full z-0">
        <Link href="/">James Galantino</Link>
      </div>
      <nav className="flex items-center p-4 z-50 text-lg">
        {navItems.map(({ id, title, href }) => {
          const isActive = currentPath === href;

          return (
            <Link
              key={id}
              href={href}
              className={`xl:px-12 px-6 transition-all duration-300 ease-in-out ${
                isActive
                  ? ' text-xl'
                  : 'text-zinc-500 hover:text-black hover:text-xl'
              }`}
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </span>
  );
}
