import React from 'react';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';

const locales = [
  { code: 'en', label: 'EN', flag: '🇺🇸' },
  { code: 'zh-HK', label: '繁體', flag: '🇭🇰' },
  { code: 'zh-CN', label: '简体', flag: '🇨🇳' },
];

const LanguageBar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();

  const handleLocaleChange = (locale: string) => {
    router.replace(pathname, { locale: locale});
  };

  return (
    <div className="container mx-auto flex justify-end bg-white">
      {locales.map((locale) => (
        <button
          key={locale.code}
          onClick={() => handleLocaleChange(locale.code)}
          disabled={currentLocale === locale.code}
          className={`mx-2 flex items-center ${
            currentLocale === locale.code
              ? 'font-bold text-orange-500 cursor-default'
              : 'hover:text-orange-500 cursor-pointer'
          }`}
          aria-current={currentLocale === locale.code ? 'page' : undefined}
        >
          <span className="mr-1" role="img" aria-label={`${locale.label} Flag`}>
            {locale.flag}
          </span>
          {locale.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageBar;
