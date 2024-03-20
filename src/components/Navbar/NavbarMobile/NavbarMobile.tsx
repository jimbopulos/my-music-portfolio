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
      <nav className="lg:hidden flex flex-col w-full fixed left-0 bg-white font-medium shadow-lg p-2.5">
        <button
          onClick={handleClick}
          className={`flex flex-col absolute justify-center items-start right-0 mt-1 mr-3 p-2 transition-all duration-300 ease-out bg-white rounded-sm border ${
            !isOpen ? 'shadow-md shadow-black border-black' : 'border-white m-2'
          }`}
        >
          <span
            className={`block h-1 w-7 bg-black transition-all duration-200 ease-out rounded-md ${
              isOpen ? 'rotate-45 translate-y-2' : '-translate-y-0.5'
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-black transition-all duration-200 ease-out rounded-md my-1 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block h-1 w-7 bg-black transition-all duration-200 ease-out rounded-md ${
              isOpen ? '-rotate-45 -translate-y-2' : 'translate-y-0.5'
            }`}
          ></span>
        </button>

        {isOpen ? (
          <div className="flex flex-col min-w-fit h-dvh justify-evenly items-center text-center bg-white rounded-sm shadow-lg shadow-black border border-black transition-all duration-200 ease-in-out">
            <div className="text-3xl font-semibold">
              <Link href="/">James Galantino</Link>
            </div>

            {navItems.map(({ id, title, href }) => {
              const isActive = currentPath === href;

              return (
                <Link
                  key={id}
                  href={href}
                  className={`transition-all animate-fadeInUp text-2xl md:w-1/3 w-3/5 p-2.5 ${
                    isActive
                      ? 'bg-black shadow-md shadow-zinc-500 text-white rounded-md text-3xl'
                      : 'text-zinc-500'
                  }`}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center text-xl md:text-2xl p-2">
            <Link href="/">James Galantino</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
