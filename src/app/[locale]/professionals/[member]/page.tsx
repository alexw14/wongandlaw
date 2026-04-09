import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import ProfileNotFound from '@/components/ProfileNotFound';
import TeamMemberBio from '@/components/TeamMemberBio';
import TeamMemberInfoCard from '@/components/TeamMemberInfoCard';
import { lawyers, managers } from '@/data/team-members';
import { FaBookOpen, FaGraduationCap, FaGavel, FaGlobe } from 'react-icons/fa';

const ProfessionalProfilePage = async ({
  params,
}: {
  params: Promise<{ member: string }>;
}) => {
  const { member } = await params;
  const currentMember = [...lawyers, ...managers].find(
    (m) => m.slug === member,
  );

  if (!currentMember) {
    return <ProfileNotFound />;
  }

  const namespace = `${currentMember.slug}-info`;
  const t = await getTranslations(namespace);
  const bio = t('bio');
  const areas = (t.raw('areas') as string[]) || [];
  const education = (t.raw('education') as string[]) || [];
  const admissions = (t.raw('admissions') as string[]) || [];
  const languages = (t.raw('languages') as string[]) || [];
  const infoConfigs = [
    {
      key: 'areas',
      title: t('areasOfPracticeTitle'),
      items: areas,
      icon: FaBookOpen,
    },
    {
      key: 'education',
      title: t('educationTitle'),
      items: education,
      icon: FaGraduationCap,
    },
    {
      key: 'admissions',
      title: t('admissionsTitle'),
      items: admissions,
      icon: FaGavel,
    },
    {
      key: 'languages',
      title: t('languagesTitle'),
      items: languages,
      icon: FaGlobe,
    },
  ];

  const memberInfo = infoConfigs.filter((info) => info.items.length > 0);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 mb-16">
      <TeamMemberBio currentMember={currentMember} bio={bio} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {memberInfo.map((info) => (
          <TeamMemberInfoCard
            key={info.key}
            title={info.title}
            items={info.items}
            icon={<info.icon className="text-orange-500 text-xl" />}
          />
        ))}
      </div>
    </div>
  );
};

export default ProfessionalProfilePage;
