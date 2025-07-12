import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface NavMenuProps {
  vertical?: boolean;
  onLinkClick?: () => void;
}

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
  const t = useTranslations('NavMenu');

  const navItems = [
    { href: '/practice-areas', label: t('practiceAreas') },
    { href: '/news-blogs', label: t('newsAndBlogs') },
    { href: '/professionals', label: t('ourTeam') },
    { href: '/about', label: t('aboutUs') },
    { href: '/contact', label: t('contactUs') },
  ];

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
