'use client';
import React from 'react';
import ImmigrationInfoCard from '@/components/ImmigrationInfoCard';
import {
  FaUsers,
  FaUserFriends,
  FaMedal,
  FaGraduationCap,
  FaBriefcase,
  FaGlobeAmericas,
  FaMoneyBillWave,
} from 'react-icons/fa';

const ImmigrationPathways = ({}) => {
  return (
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
          Issues can arise due to changes in circumstances while petitions are
          pending (e.g., death of a U.S. citizen, a child turning 21, or
          divorce).
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
            icon={
              <FaMoneyBillWave className="text-2xl text-emerald-600 mb-2" />
            }
            title="EB-5"
            description="Immigrant investors"
            className="flex-col items-center text-center"
          />
        </div>
        <p className="text-gray-700 mt-4 text-sm">
          Other non-immigrant working visas include H-1B, L-1A, L-1B, O, E-1/2,
          J, etc.
          <br />
          Many holding non-immigrant visas may adjust status to permanent
          resident. Legal issues such as overstaying or criminal records can
          affect eligibility.
        </p>
      </div>
    </section>
  );
};

export default ImmigrationPathways;
