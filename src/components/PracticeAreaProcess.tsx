import React from 'react';

interface Step {
  key: string;
  label: string;
  description: string;
}

interface Process {
  title: string;
  steps: Step[];
}

const PracticeAreaProcess: React.FC<Process> = ({ title, steps }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-[#FF8426]">
        {title}
      </h2>
      <div className="space-y-6">
        {steps.map((step, idx) => (
          <div
            key={step.key}
            className="flex items-start gap-4 bg-[#FFFAF3] rounded-lg p-5 shadow-sm"
          >
            <div className="flex-shrink-0">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#FF8426] text-white font-bold text-lg">
                {idx + 1}
              </div>
            </div>
            <div>
              <div className="font-semibold text-[#FF8426] text-base">
                {step.label}
              </div>
              <div className="text-gray-700 text-sm">{step.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PracticeAreaProcess;
