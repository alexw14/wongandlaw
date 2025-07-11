import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface NavMenuProps {
  vertical?: boolean;
  onLinkClick?: () => void;
}

const navItems = [
  { href: '/practice-areas', label: 'Practice Areas' },
  { href: '/news-blogs', label: 'News & Blogs' },
  { href: '/professionals', label: 'Our Team' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
];

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const NavMenu: React.FC<NavMenuProps> = ({ vertical = false, onLinkClick }) => {
  return (
    <motion.div
      className={vertical ? "flex flex-col space-y-6" : "flex space-x-6"}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {navItems.map((item) => (
        <motion.nav key={item.href} variants={itemVariants} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Link href={item.href} className="hover:text-[#FF8426]" onClick={onLinkClick}>
            {item.label}
          </Link>
        </motion.nav>
      ))}
    </motion.div>
  );
};

export default NavMenu;
