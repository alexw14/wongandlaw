import React from 'react';
import { useTranslations } from 'next-intl';
import PracticeAreaHeader from '@/components/PracticeAreaHeader';

const ImmigrationPage = () => {
  const t = useTranslations('Immigration');

  const headerData = {
    imgUrl: '/images/services/immigration.jpg',
    imgAltText: 'immigration',
    title: t('title'),
    subTitle: t('subTitle'),
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <PracticeAreaHeader {...headerData} />

      {/* Family-Based Immigration */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-[#FF8426]">
          Family-Based Immigration
        </h2>
        <p className="text-gray-700 mb-4">
          There are two main types of family-based immigration visas:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>Immediate relatives</strong> through a U.S. citizen (spouse,
            parent, or child), which has no limit on the number of visas each
            fiscal year.
          </li>
          <li>
            <strong>Family preference</strong> for U.S. citizen’s sibling,
            parents, and married child or child over 21 years old, and for U.S.
            permanent residents’ spouse and unmarried child. These categories
            have a limit on the number of visas each fiscal year.
          </li>
        </ul>
        <p className="text-gray-700">
          Issues can arise due to changes in circumstances while petitions are
          pending (e.g., death of a U.S. citizen, a child turning 21, or
          divorce).
        </p>
      </section>

      {/* Employment-Based Immigration */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-[#FF8426]">
          Employment-Based Immigration
        </h2>
        <p className="text-gray-700 mb-4">
          Employment-based immigrant or non-immigrant visas are more complicated
          and always need an experienced lawyer to process the entire
          application procedures. There are five preferences for the
          employment-based immigrant visas:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>
            <strong>EB-1:</strong> Priority workers and persons of extraordinary
            ability (EB-1A, EB-1B, EB-1C)
          </li>
          <li>
            <strong>EB-2:</strong> Professionals holding advanced degrees and
            persons of exceptional ability
          </li>
          <li>
            <strong>EB-3:</strong> Skilled workers, professionals, and unskilled
            workers
          </li>
          <li>
            <strong>EB-4:</strong> Certain special immigrants (e.g., ministers,
            medical graduates, nurses)
          </li>
          <li>
            <strong>EB-5:</strong> Immigrant investors
          </li>
        </ul>
        <p className="text-gray-700 mb-2">
          Other non-immigrant working visas include H-1B, L-1A, L-1B, O, E-1/2,
          J, etc.
        </p>
        <p className="text-gray-700">
          Many holding non-immigrant visas would like to adjust their status to
          be a permanent resident (green card holder) based on any of the above
          employment-based visas or family-based visas. Complicated legal issues
          can make applicants inadmissible, such as overstaying in the U.S. or
          having criminal records.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-[#FF8426]">
          Our Immigration Services
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>All family-based immigrant visa petitions</li>
          <li>
            Employment-based immigrant visas: EB-1A, EB-1B, EB-1C, EB-2, EB-3,
            and EB-5
          </li>
          <li>L-1A and EB-1C consultation and strategies</li>
          <li>
            EB-5 immigrant investors’ consultation (project evaluation, source
            of fund strategies)
          </li>
          <li>
            Adjustment of status in the U.S., advance parole, and working
            permits
          </li>
          <li>National Visa Center and U.S. Consulate or Embassy processing</li>
          <li>Non-immigrant working visas: H-1B, L-1A/L2, L-1B/L2, E-1/2, O</li>
          <li>
            Student visa (F), change or extension of status, citizenship
            application, and I-601 waiver of inadmissibility
          </li>
        </ul>
      </section>
    </div>
  );
};

export default ImmigrationPage;
