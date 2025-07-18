import React from 'react';
import { useTranslations } from 'next-intl';
import TeamMemberCard from '@/components/TeamMemberCard';

interface Member {
  name: string;
  title: string;
  image: string;
  slug: string;
}

const MeetOurTeam = () => {
  const t = useTranslations('MeetOurTeam');

  const lawyers: Member[] = [
    {
      name: 'Tony Wong',
      title: t('tonyWongTitle'),
      image: '/images/professionals/tonywong_profile.jpg',
      slug: 'tony-wong',
    },
    {
      name: 'Benjamin Hung',
      title: t('benjaminHungTitle'),
      image: '/images/professionals/benjaminhung_profile.jpg',
      slug: 'benjamin-hung',
    },
    {
      name: 'Patricia L. Ray',
      title: t('patriciaRayTitle'),
      image: '/images/professionals/patriciaray_profile.png',
      slug: 'patricia-ray',
    },
    {
      name: 'Douglas Ingraham',
      title: t('douglasIngrahamTitle'),
      image: '/images/professionals/douglasingraham_profile.png',
      slug: 'douglas-ingram',
    },
    {
      name: 'Linzi Tse',
      title: t('linziTseTitle'),
      image: '/images/professionals/linzitse_profile.jpg',
      slug: 'linzi-tse',
    },
  ];

  const managers: Member[] = [
    {
      name: 'Anabel Zhu',
      title: t('anabelZhuTitle'),
      image: '/images/professionals/anabelzhu_profile.jpg',
      slug: 'anabel-zhu',
    },
    {
      name: 'Man-Lin Yu',
      title: t('manlinYuTitle'),
      image: '/images/professionals/manlinyu_profile.jpg',
      slug: 'manlin-yu',
    },
    {
      name: 'Amy Liu',
      title: t('amyLiuTitle'),
      image: '/images/professionals/amyliu_profile.png',
      slug: 'amy-liu',
    },
    {
      name: 'Lilly Jia',
      title: t('lillyJiaTitle'),
      image: '/images/professionals/lillyjia_profile.jpg',
      slug: 'lilly-jia',
    },
    {
      name: 'Terry Yip',
      title: t('terryYipTitle'),
      image: '/images/professionals/terryyip_profile.jpg',
      slug: 'terry-yip',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 mb-16">
      <section className="mb-12">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-4 text-center">
          {t('title')}
        </h1>
        <div className="mx-auto w-16 h-1 bg-orange-500 rounded-full mb-8" />
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          {t('subTitle')}
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">{t('lawyersText')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {lawyers.map((lawyer) => (
            <TeamMemberCard
              key={lawyer.slug}
              name={lawyer.name}
              title={lawyer.title}
              image={lawyer.image}
              slug={lawyer.slug}
              viewProfileBtnText={t('ViewProfileBtnText')}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-orange-500 mb-6">{t('managersText')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {managers.map((manager) => (
            <TeamMemberCard
              key={manager.slug}
              name={manager.name}
              title={manager.title}
              image={manager.image}
              slug={manager.slug}
              viewProfileBtnText={t('ViewProfileBtnText')}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetOurTeam;
