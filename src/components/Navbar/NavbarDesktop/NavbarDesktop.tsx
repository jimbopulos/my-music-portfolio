'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils';

export function NavbarDesktop() {
  const currentPath = usePathname();

  return (
    <nav>
      {navItems.map(({ id, title, href }) => {
        const isActive = currentPath === href;

        return (
          <Link key={id} href={href} className={isActive ? 'font-bold' : ''}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
