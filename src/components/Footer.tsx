import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import {
  FaPhone,
  FaFax,
  FaEnvelope,
  FaWeixin,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  const t = useTranslations('Footer');
  const offices = [
    {
      title: t('losAngelesOffice'),
      addressLines: ['1360 Valley Vista Drive, Suite 136', 'Diamond Bar, CA 91765'],
      phone: '(626) 447-7788',
      phoneHref: 'tel:6264477788',
    },
    {
      title: t('irvineOffice'),
      addressLines: ['20 Pacifica, Suite 460', 'Irvine, CA 92618'],
      phone: '(626) 447-7788',
      phoneHref: 'tel:6264477788',
    },
  ];

  return (
    <footer className="bg-gray-800 text-gray-200 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:justify-between gap-8 items-center md:items-start">
        {/* Brand/Logo and Description */}
        <div className="flex-1 text-center md:text-left">
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Wong & Partners, P.C.
          </Link>
          <p className="mt-2 text-sm text-gray-400 max-w-s mx-auto md:mx-0">
            {t('subtitle')}
          </p>
        </div>
        {/* Office Locations */}
        <div className="flex-1 mt-8 md:mt-0">
          <div className="flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            {offices.map((office) => (
              <div key={office.title} className="flex-1">
                <h4 className="font-semibold mb-2 text-white">{office.title}</h4>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-center gap-2 justify-center sm:justify-start">
                    <FaMapMarkerAlt className="inline text-orange-500 shrink-0" size={20} />
                    <span className="text-left">
                      {office.addressLines[0]}
                      <br />
                      {office.addressLines[1]}
                    </span>
                  </li>
                  <li className="flex items-center gap-2 justify-center sm:justify-start">
                    <FaPhone className="inline text-orange-500 shrink-0" size={20} />
                    <a href={office.phoneHref} className="hover:text-orange-500">
                      {office.phone}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center sm:text-left">
            <h4 className="font-semibold mb-2 text-white">
              {t('sharedContactTitle')}
            </h4>
            <ul className="space-y-1 text-sm">
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FaFax className="inline text-orange-500 shrink-0" size={20} />
                <a href="fax:6264477783" className="hover:text-orange-500">
                  (626) 447-7783
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FaEnvelope className="inline text-orange-500 shrink-0" size={20} />
                <a
                  href="mailto:info@wongandlaw.com"
                  className="hover:text-orange-500"
                >
                  info@wongandlaw.com
                </a>
              </li>
              <li className="flex items-center gap-2 justify-center sm:justify-start">
                <FaWeixin className="inline text-orange-500 shrink-0" size={20} />
                <span className="text-gray-300">Santony168</span>
              </li>
            </ul>
          </div>
        </div>
        {/* Blog & Legal Buttons */}
        <div className="flex-1 flex flex-col items-center md:items-end mt-8 md:mt-0 space-y-3">
          <Link
            href="/news-blogs"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200"
          >
            {t('visitOurBlog')}
          </Link>
          <div className="flex flex-col items-center md:items-end space-y-2">
            <Link
              href="/terms"
              className="text-xs text-gray-300 hover:text-orange-500 underline underline-offset-2"
            >
              {t('websiteTermsAndPrivacy')}
            </Link>
            <Link
              href="/legal-disclaimer"
              className="text-xs text-gray-300 hover:text-orange-500 underline underline-offset-2"
            >
              {t('legalDisclaimer')}
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Wong & Partners, P.C. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
