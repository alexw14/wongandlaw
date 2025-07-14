import React from 'react';

interface KeyBenefit {
  title: string;
}

interface KeyBenefitsProps {
  title: string;
  benefits: KeyBenefit[];
}

const PracticeAreaKeyBenefits: React.FC<KeyBenefitsProps> = ({
  title,
  benefits,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-[#FF8426]">{title}</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {benefits.map((benefit) => {
          return (
            <div
              key={benefit.title}
              className="bg-[#FFFAF3] rounded-lg p-4 flex items-center gap-3 shadow-sm"
            >
              <span className="text-2xl text-[#FF8426]">✔</span>
              <span>{benefit.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PracticeAreaKeyBenefits;
