import React from 'react';

interface PracticeAreaOverviewProps {
  overviewText: string;
  aboutHeaderText: string;
  aboutText: string;
}

const PracticeAreaOverview: React.FC<PracticeAreaOverviewProps> = ({
  overviewText,
  aboutHeaderText,
  aboutText,
}) => {
  return (
    <>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-[#FF8426]">Overview</h2>
        <p className="text-gray-700">{overviewText}</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-2 text-[#FF8426]">
          {aboutHeaderText}
        </h2>
        <p className="text-gray-700">{aboutText}</p>
      </section>
    </>
  );
};

export default PracticeAreaOverview;
