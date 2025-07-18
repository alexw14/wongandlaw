import React from 'react';
import { Link } from '@/i18n/navigation';

interface TeamMemberCardProp {
  name: string;
  title: string;
  image: string;
  slug: string;
  viewProfileBtnText: string
}

const TeamMemberCard: React.FC<TeamMemberCardProp> = ({
  name,
  title,
  image,
  slug,
  viewProfileBtnText
}) => {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center h-full hover:shadow-lg transition group">
      <img
        src={image}
        alt={name}
        className="w-52 h-52 rounded-full object-cover object-top mb-4 border-4 border-orange-100 group-hover:border-orange-500 transition"
      />
      <div className="font-bold text-lg mb-1 text-center">{name}</div>
      {/* Set a min-h for the title area to align buttons */}
      <div className="text-gray-500 text-sm mb-3 text-center min-h-[3rem] flex items-center justify-center">
        {title}
      </div>
      <div className="mt-auto w-full flex justify-center">
        <Link
          href={`/professionals/${slug}`}
          className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-orange-600 transition"
        >
          {viewProfileBtnText}
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;
