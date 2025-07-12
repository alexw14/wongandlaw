'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageBar from './LanguageBar';
import NavMenu from './NavMenu';
import { useLocale } from 'next-intl';

const Headers: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const currentLocale = useLocale();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Only show background color on desktop (sm and up)
  const showWhiteBg =
    (scrolled || hovered) &&
    typeof window !== 'undefined' &&
    window.innerWidth >= 640;

  return (
    <div
      className="sticky top-0 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="transition-colors duration-300 bg-white">
        <LanguageBar />
      </div>
      <header
        className={`transition-colors duration-300 ${
          showWhiteBg
            ? 'bg-white shadow-md' // Add shadow when white background is active
            : 'bg-[#FF8426] text-white'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap">
              <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}`}>
                Wong & Partners
              </Link>
            </h1>
          </div>
          {/* Hamburger for mobile */}
          <button
            className="sm:hidden flex items-center px-2 py-1 text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'
                }
              />
            </svg>
          </button>
          {/* Desktop Nav */}
          <div className="hidden sm:block">
            <NavMenu />
          </div>
        </div>
        {/* Slide-out Mobile Nav */}
        <div
          className={`fixed inset-0 z-50 bg-black/40 transition-opacity duration-300 ${
            menuOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          } sm:hidden`}
          onClick={() => setMenuOpen(false)}
        >
          <nav
            className={`fixed top-0 right-0 h-full w-64 bg-[#FF8426] text-white shadow-lg transform transition-transform duration-300 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="mt-16 px-6">
              <NavMenu vertical onLinkClick={() => setMenuOpen(false)} />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Headers;
