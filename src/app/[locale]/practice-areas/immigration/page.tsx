import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';
import ImmigrationPathways from '@/components/ImmigrationPathways';
import ImmigrationInfoCard from '@/components/ImmigrationInfoCard';
import {
  FaUsers,
  FaUserFriends,
  FaMedal,
  FaGraduationCap,
  FaBriefcase,
  FaGlobeAmericas,
  FaMoneyBillWave,
  FaUserCheck,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaUniversity,
  FaPassport,
  FaUserGraduate,
} from 'react-icons/fa';

const ImmigrationPage = () => {
  const t = useTranslations('Immigration');

  const headerData = {
    imgUrl: '/images/services/immigration.jpg',
    imgAltText: 'immigration',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  const immigrationData = {
    title: t('immigrationPathways'),
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />
      <section className="mb-20">
        <h2 className="text-3xl font-extrabold mb-2 text-[#FF8426] text-center">
          Immigration Pathways
        </h2>
        <div className="flex justify-center mb-8">
          <span className="block w-16 h-1 bg-[#FF8426] rounded-full"></span>
        </div>
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4 text-[#FF8426]">
            Family-Based Immigration
          </h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <ImmigrationInfoCard
              icon={<FaUsers className="text-3xl text-blue-500" />}
              title="Immediate Relatives"
              description="U.S. citizen’s spouse, parent, or child."
              badge={
                <span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs mt-1">
                  No annual limit
                </span>
              }
            />
            <ImmigrationInfoCard
              icon={<FaUserFriends className="text-3xl text-purple-500" />}
              title="Family Preference"
              description="Siblings, married children, and permanent residents’ spouses/unmarried children."
              badge={
                <span className="inline-block bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs mt-1">
                  Annual limit applies
                </span>
              }
            />
          </div>
          <p className="text-gray-700 mt-4 text-sm">
            Issues can arise due to changes in circumstances while petitions are pending (e.g., death of a U.S. citizen, a child turning 21, or divorce).
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 text-[#FF8426]">
            Employment-Based Immigration
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <ImmigrationInfoCard
              icon={<FaMedal className="text-2xl text-yellow-500 mb-2" />}
              title="EB-1"
              description="Priority workers & extraordinary ability"
              className="flex-col items-center text-center"
            />
            <ImmigrationInfoCard
              icon={<FaGraduationCap className="text-2xl text-green-600 mb-2" />}
              title="EB-2"
              description="Advanced degrees & exceptional ability"
              className="flex-col items-center text-center"
            />
            <ImmigrationInfoCard
              icon={<FaBriefcase className="text-2xl text-gray-600 mb-2" />}
              title="EB-3"
              description="Skilled, professional, unskilled workers"
              className="flex-col items-center text-center"
            />
            <ImmigrationInfoCard
              icon={<FaGlobeAmericas className="text-2xl text-indigo-500 mb-2" />}
              title="EB-4"
              description="Special immigrants (e.g., ministers)"
              className="flex-col items-center text-center"
            />
            <ImmigrationInfoCard
              icon={<FaMoneyBillWave className="text-2xl text-emerald-600 mb-2" />}
              title="EB-5"
              description="Immigrant investors"
              className="flex-col items-center text-center"
            />
          </div>
          <p className="text-gray-700 mt-4 text-sm">
            Other non-immigrant working visas include H-1B, L-1A, L-1B, O, E-1/2, J, etc.<br />
            Many holding non-immigrant visas may adjust status to permanent resident. Legal issues such as overstaying or criminal records can affect eligibility.
          </p>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="bg-gray-50 rounded-2xl py-12 px-4 shadow-inner">
        <h2 className="text-3xl font-extrabold mb-8 text-[#FF8426] text-center">
          Our Immigration Services
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaUserCheck className="text-2xl text-blue-500 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">Family-Based Visa Petitions</div>
              <div className="text-gray-700 text-sm">All family-based immigrant visa petitions</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaBriefcase className="text-2xl text-gray-600 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">Employment-Based Visas</div>
              <div className="text-gray-700 text-sm">EB-1A, EB-1B, EB-1C, EB-2, EB-3, and EB-5</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaLightbulb className="text-2xl text-yellow-500 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">L-1A & EB-1C Strategies</div>
              <div className="text-gray-700 text-sm">Consultation and strategies for L-1A and EB-1C</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaMoneyCheckAlt className="text-2xl text-emerald-600 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">EB-5 Investor Consultation</div>
              <div className="text-gray-700 text-sm">Project evaluation, source of funds strategies</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaExchangeAlt className="text-2xl text-indigo-500 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">Adjustment of Status</div>
              <div className="text-gray-700 text-sm">Advance parole, work permits, and more</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaUniversity className="text-2xl text-green-600 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">Consular Processing</div>
              <div className="text-gray-700 text-sm">National Visa Center and U.S. Embassy processing</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaPassport className="text-2xl text-purple-500 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">Non-Immigrant Visas</div>
              <div className="text-gray-700 text-sm">H-1B, L-1A/L2, L-1B/L2, E-1/2, O</div>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
            <FaUserGraduate className="text-2xl text-pink-500 mt-1" />
            <div>
              <div className="font-semibold text-[#FF8426]">Student & Other Services</div>
              <div className="text-gray-700 text-sm">Student visa (F), status changes, citizenship, I-601 waivers</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmigrationPage;
