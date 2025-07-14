import React from 'react';

interface PracticeAreaHeaderProps {
  imgUrl: string;
  imgAltText: string;
  title: string;
  subTitle: string;
}

const PracticeAreaHeader: React.FC<PracticeAreaHeaderProps> = ({
  imgUrl,
  imgAltText,
  title,
  subTitle,
}) => {
  return (
    <section className="mb-10 text-center">
      <img
        src={imgUrl}
        alt={imgAltText}
        className="w-full h-56 object-cover rounded-xl mb-6"
      />
      <h1 className="text-4xl sm:text-5xl font-extrabold text-[#FF8426] mb-4 drop-shadow-sm">
        {title}
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">{subTitle}</p>
    </section>
  );
};

export default PracticeAreaHeader;
