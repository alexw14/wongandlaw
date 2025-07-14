import React from 'react';

interface Question {
  key: string;
  question: string;
  answer: string;
}

interface FrequentlyAskedQuestionsProp {
  questions: Question[];
}

const FrequentlyAskedQuestions: React.FC<FrequentlyAskedQuestionsProp> = ({
  questions,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-[#FF8426]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {questions.map((question) => {
          return (
            <details key={question.key} className="bg-gray-50 rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">
                {question.question}
              </summary>
              <p className="mt-2 text-gray-700 text-sm">{question.answer}</p>
            </details>
          );
        })}
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestions;
