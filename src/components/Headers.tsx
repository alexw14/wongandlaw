'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import LanguageBar from './LanguageBar';
import NavMenu from './NavMenu';

const Headers: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Combine scrolled or hovered for background
  const showBg = scrolled || hovered;

  return (
    <div 
      className="sticky top-0 z-50"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="bg-white">
        <LanguageBar />
      </div>
      <header
        className={`transition-colors duration-300 ${
          showBg ? 'bg-white' : 'bg-[#FF8426] text-white'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <Link href="/">Wong & Partners</Link>
            </h1>
          </div>
          <NavMenu />
        </div>
      </header>
    </div>
  );
};

export default Headers;
