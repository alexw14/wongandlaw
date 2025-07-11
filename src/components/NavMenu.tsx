import Link from 'next/link';
import React from 'react';

const NavMenu: React.FC = () => {
  return (
    <div className="flex space-x-6">
      <nav>
        <Link href="/practice-areas" className="hover:text-[#FF8426]">
          Practice Areas
        </Link>
      </nav>
      <nav>
        <Link href="/news-blogs" className="hover:text-[#FF8426]">
          News & Blogs
        </Link>
      </nav>
      <nav>
        <Link href="/professionals" className="hover:text-[#FF8426]">
          Our Team
        </Link>
      </nav>
      <nav>
        <Link href="/about" className="hover:text-[#FF8426]">
          About Us
        </Link>
      </nav>
      <nav>
        <Link href="/contact" className="hover:text-[#FF8426]">
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default NavMenu;
