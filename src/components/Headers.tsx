'use client'
import Link from 'next/link';
import LanguageBar from './LanguageBar';
import React, { useState, useEffect } from 'react';

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
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        showBg ? '' : ''
      }`}
    >
      <div
        className={`transition-colors duration-300 ${
          showBg
            ? 'bg-white/90 backdrop-blur shadow'
            : 'bg-transparent'
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <LanguageBar />
      </div>
      <header
        className={`transition-colors duration-300 ${
          showBg
            ? 'bg-[#FF8426] text-white shadow'
            : 'bg-transparent'
        }`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">
              <Link href="/">Wong & Partners</Link>
            </h1>
          </div>
          <div className="flex space-x-6">
            <nav>
              <Link href="/practice-areas" className="hover:text-gray-400">
                Practice Areas
              </Link>
            </nav>
            <nav>
              <Link href="/news-blogs" className="hover:text-gray-400">
                News & Blogs
              </Link>
            </nav>
            <nav>
              <Link href="/professionals" className="hover:text-gray-400">
                Our Team
              </Link>
            </nav>
            <nav>
              <Link href="/about" className="hover:text-gray-400">
                About Us
              </Link>
            </nav>
            <nav>
              <Link href="/contact" className="hover:text-gray-400">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Headers;