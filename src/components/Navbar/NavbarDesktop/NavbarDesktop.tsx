'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils';

export function NavbarDesktop() {
  const currentPath = usePathname();

  return (
    <span className="flex flex-row items-center">
      <div className="left-0 absolute text-2xl p-6 shadow-lg w-full z-0">
        <Link href="/">James Galantino</Link>
      </div>
      <nav className="flex items-center p-4 z-50">
        {navItems.map(({ id, title, href }) => {
          const isActive = currentPath === href;

          return (
            <Link
              key={id}
              href={href}
              className={
                isActive
                  ? 'px-12 transition-all duration-300 ease-in-out text-lg'
                  : 'px-12 text-zinc-500 transition-all duration-300 ease-in-out hover:text-black hover:text-lg'
              }
            >
              {title}
            </Link>
          );
        })}
      </nav>
    </span>
  );
}
