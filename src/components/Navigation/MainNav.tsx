'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { createPath } from '@/lib/utils/path';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/browse', label: 'Genome Browser' },
  { href: '/compare', label: 'Compare Tools' },
  { href: '/tools', label: 'Tool Details' },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href={createPath('/')} className="text-xl font-bold text-gray-800">
                RiboInsightHub
              </Link>
            </div>
            
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const fullPath = createPath(item.href);
                const isActive = pathname === fullPath;
                return (
                  <Link
                    key={item.href}
                    href={fullPath}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      isActive
                        ? 'border-indigo-500 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="bg-indigo-600 p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Track Hub to UCSC
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 