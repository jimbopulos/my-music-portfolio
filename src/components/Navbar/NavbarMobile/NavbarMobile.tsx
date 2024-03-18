'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navItems } from '@/utils';
import { useState } from 'react';

export function NavbarMobile() {
  const currentPath = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav className="lg:hidden flex flex-col absolute w-full h-[100dvh] left-0 font-medium p-2.5">
        <button
          onClick={handleClick}
          className={`flex flex-col absolute justify-center items-center p-2.5 transition-all duration-300 ease-out bg-white rounded-md ${
            !isOpen && 'shadow-md shadow-black'
          }`}
        >
          <span
            className={`block h-1 w-7 bg-black transition-all duration-300 ease-out rounded-full ${
              isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-black transition-all duration-300 ease-out rounded-full my-1 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-black transition-all duration-300 ease-out rounded-full ${
              isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'
            }`}
          ></span>
        </button>

        {isOpen ? (
          <div className="flex flex-col w-full h-[100dvh] justify-evenly items-center bg-white rounded-sm shadow-md shadow-black transition-all duration-300 ease-in-out">
            <div className="text-center text-3xl">
              <Link href="/">James Galantino</Link>
            </div>

            {navItems.map(({ id, title, href }) => {
              const isActive = currentPath === href;

              return (
                <Link
                  key={id}
                  href={href}
                  className={`transition-all animate-fadeInUp min-w-fit text-center text-2xl ${
                    isActive ? 'text-black text-3xl' : 'text-zinc-500'
                  }`}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-xl md:text-2xl">
            <Link href="/">James Galantino</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
