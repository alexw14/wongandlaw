import * as React from 'react';
import { getTranslations } from 'next-intl/server';
import ProfileNotFound from '@/components/ProfileNotFound';
import TeamMemberBio from '@/components/TeamMemberBio';
import TeamMemberInfoCard from '@/components/TeamMemberInfoCard';
import { lawyers, managers } from '@/data/team-members';
import { FaBookOpen, FaGraduationCap, FaGavel, FaGlobe, FaBriefcase } from 'react-icons/fa';

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
  const memberT = await getTranslations(namespace);
  const meetOurTeamT = await getTranslations('MeetOurTeam');

  const memberData = { ...currentMember, titleKey: meetOurTeamT(currentMember.titleKey) };
  
  const bio = memberT('bio');
  const areas = memberT.has('areas') ? memberT.raw('areas') as string[] : [];
  const professionalExperiences = memberT.has('professional-experiences') ? memberT.raw('professional-experiences') as string[] : [];
  const education = memberT.has('education') ? memberT.raw('education') as string[] : [];
  const admissions = memberT.has('admissions') ? memberT.raw('admissions') as string[] : [];
  const languages = memberT.has('languages') ? memberT.raw('languages') as string[] : [];
  const infoConfigs = [
    {
      key: 'areas',
      title: meetOurTeamT('areasOfPracticeTitle'),
      items: areas,
      icon: FaBookOpen,
    },
    {
      key: 'professional-experiences',
      title: meetOurTeamT('professionalExperiencesTitle'),
      items: professionalExperiences,
      icon: FaBriefcase,
    },
    {
      key: 'education',
      title: meetOurTeamT('educationTitle'),
      items: education,
      icon: FaGraduationCap,
    },
    {
      key: 'admissions',
      title: meetOurTeamT('admissionsTitle'),
      items: admissions,
      icon: FaGavel,
    },
    {
      key: 'languages',
      title: meetOurTeamT('languagesTitle'),
      items: languages,
      icon: FaGlobe,
    },
  ];

  const memberInfo = infoConfigs.filter((info) => info.items.length > 0);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 mb-16">
      <TeamMemberBio member={memberData} bio={bio} />
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
