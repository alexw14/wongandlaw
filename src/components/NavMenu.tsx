import Link from 'next/link';
import React from 'react';

interface NavMenuProps {
  vertical?: boolean;
  onLinkClick?: () => void;
}

const NavMenu: React.FC<NavMenuProps> = ({ vertical = false, onLinkClick }) => {
  return (
    <div className={vertical ? "flex flex-col space-y-6" : "flex space-x-6"}>
      <nav>
        <Link href="/practice-areas" className="hover:text-[#FF8426]" onClick={onLinkClick}>
          Practice Areas
        </Link>
      </nav>
      <nav>
        <Link href="/news-blogs" className="hover:text-[#FF8426]" onClick={onLinkClick}>
          News & Blogs
        </Link>
      </nav>
      <nav>
        <Link href="/professionals" className="hover:text-[#FF8426]" onClick={onLinkClick}>
          Our Team
        </Link>
      </nav>
      <nav>
        <Link href="/about" className="hover:text-[#FF8426]" onClick={onLinkClick}>
          About Us
        </Link>
      </nav>
      <nav>
        <Link href="/contact" className="hover:text-[#FF8426]" onClick={onLinkClick}>
          Contact Us
        </Link>
      </nav>
    </div>
  );
};

export default NavMenu;
