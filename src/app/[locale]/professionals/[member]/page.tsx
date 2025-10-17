import ProfileNotFound from '@/components/ProfileNotFound';
import { lawyers, managers } from '@/data/team-members';
import { FaBookOpen, FaGraduationCap, FaGavel, FaGlobe } from 'react-icons/fa';

type InfoCardProps = {
  title: string;
  items: string[];
  icon?: React.ReactNode;
};

const InfoCard = ({ title, items, icon }: InfoCardProps) => {
  if (!items || items.length === 0) return null;
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-start min-h-[180px]">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h3 className="text-lg font-bold text-orange-500">{title}</h3>
      </div>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        {items.map((item) => (
          <li key={item} className="text-base">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const memberDetails: Record<string, {
  bio: string;
  areas?: string[];
  education?: string[];
  admissions?: string[];
  languages?: string[];
}> = {
  'tony-wong': {
    bio: `Having been admitted by the State Bar of California in 2006, Tony Wong has been practicing law in the U.S. In 2008, Tony founded Wong & Associates, Lawyers. Tony is also admitted in Hong Kong, England and Wales. With his legal knowledge and experience in different jurisdictions, Mr. Wong, together with his associates and legal teammates, provide affordable and competent legal services for clients from the U.S. and Asian countries to resolve complex legal issues in immigration, business transactions, corporate governance, asset protection, intellectual property, and civil litigation. Tony has been recognized for Excellence in Immigration Law by Lawyers of Distinction®. He is also a member of AILA’s Global Immigration Chapter and Asia-Pacific Chapter, and an EB5-verified professional by EB-5 Investors.`,
    areas: [
      'Immigration (especially investment-related immigration)',
      'Corporation',
      'Business transactions',
      'Asset protection & estate planning',
      'Intellectual property',
      'Licensing and transfer of I.P. assets',
      'E-commerce',
    ],
    education: [
      'LL.B. (Hon.) – University of Hong Kong',
      'LLM – City University of Hong Kong',
      'LLM – Southwestern Law School',
      'J.D. – University of West Los Angeles, School of Law',
    ],
    admissions: [
      'The State Bar of California – Attorney at Law',
      'The Law Society of Hong Kong – Solicitor',
      'The Law Society of England & Wales – Solicitor',
      'Central District of California U.S. District Court',
      'Federal Court of Appeal',
      'U.S. Immigration Court',
    ],
    languages: [
      'English',
      'Chinese (Cantonese and Mandarin)',
    ],
  },
  // Add more members as needed...
};

const ProfessionalProfilePage = async ({
  params,
}: {
  params: { member: string };
}) => {
  const { member } = await params;
  const foundMember = [...lawyers, ...managers].find((m) => m.slug === member);

  if (!foundMember) {
    return <ProfileNotFound />;
  }

  const details = memberDetails[foundMember.slug];

  return (
    <div className="max-w-5xl mx-auto py-16 px-4 mb-16">
      {/* Top section: Large photo and bio */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
        <img
          src={foundMember.image}
          alt={foundMember.name}
          className="w-64 h-64 rounded-2xl object-cover object-top border-4 border-orange-500 shadow-lg"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-extrabold mb-2 text-orange-500">{foundMember.name}</h1>
          <h2 className="text-lg text-gray-700 mb-4">{foundMember.titleKey}</h2>
          {details?.bio && (
            <p className="text-gray-700 text-base leading-relaxed">{details.bio}</p>
          )}
        </div>
      </div>

      {/* Info cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <InfoCard
          title="Areas of Practice"
          items={details?.areas || []}
          icon={<FaBookOpen className="text-orange-500 text-xl" />}
        />
        <InfoCard
          title="Education"
          items={details?.education || []}
          icon={<FaGraduationCap className="text-orange-500 text-xl" />}
        />
        <InfoCard
          title="Admissions"
          items={details?.admissions || []}
          icon={<FaGavel className="text-orange-500 text-xl" />}
        />
        <InfoCard
          title="Languages"
          items={details?.languages || []}
          icon={<FaGlobe className="text-orange-500 text-xl" />}
        />
      </div>
    </div>
  );
};

export default ProfessionalProfilePage;
