import React from 'react';
import Link from 'next/link';

interface ContactUsData {
  title: string;
  content: string;
  buttonText: string;
}

const PracticeAreaContactUs: React.FC<ContactUsData> = ({
  title,
  content,
  buttonText,
}) => {
  return (
    <section className="text-center mt-16">
      <h3 className="text-2xl font-bold mb-4 text-[#FF8426]">{title}</h3>
      <p className="text-gray-700 mb-6">{content}</p>
      <Link
        href="/contact"
        className="inline-block bg-[#FF8426] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#e6731f] transition-colors"
      >
        {buttonText}
      </Link>
    </section>
  );
};

export default PracticeAreaContactUs;
