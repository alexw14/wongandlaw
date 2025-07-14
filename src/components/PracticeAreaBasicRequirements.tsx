import React from 'react';

interface Requirement {
  title: string;
  content: string;
  highlightDollarValues: boolean;
}

interface PracticeAreaBasicRequirementsProps {
  title: string;
  requirements: Requirement[];
}

// Helper function to bold dollar amounts in a string
function highlightDollarValues(text: string) {
  // Matches $800,000 or $1,050,000 or $1000, etc.
  return text.split(/(\$\d{1,3}(?:,\d{3})*(?:\.\d+)?)/g).map((part, i) =>
    /^\$\d/.test(part) ? (
      <span key={i} className="font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
}

const PracticeAreaBasicRequirements: React.FC<
  PracticeAreaBasicRequirementsProps
> = ({ title, requirements }) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-[#FF8426]">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {requirements.map((requirement) => {
          return (
            <details
              key={requirement.title}
              className="bg-gray-50 rounded-lg p-4"
            >
              <summary className="font-semibold text-[#FF8426] cursor-pointer">
                {requirement.title}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">
                {requirement.highlightDollarValues
                  ? highlightDollarValues(requirement.content)
                  : requirement.content}
              </p>
            </details>
          );
        })}
      </div>
    </section>
  );
};

export default PracticeAreaBasicRequirements;
