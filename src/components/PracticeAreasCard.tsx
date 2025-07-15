import React from 'react';
import { Link } from '@/i18n/navigation';

interface PracticeAreasCardProps {
  title: string;
  description: string;
  href: string;
  imageUrl: string;
}

const PracticeAreasCard: React.FC<PracticeAreasCardProps> = ({
  title,
  description,
  href,
  imageUrl,
}) => (
  <Link
    href={href}
    className="group block rounded-xl shadow-md border border-gray-100 overflow-hidden bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer"
  >
    {/* Image with title overlay */}
    <div className="relative w-full" style={{ height: 180 }}>
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <h2 className="absolute bottom-3 left-0 w-full px-4 text-xl font-bold text-white drop-shadow-lg z-10">
        {title}
      </h2>
    </div>
    {/* Description */}
    <div className="p-6">
      <p className="text-gray-700">{description}</p>
    </div>
  </Link>
);

export default PracticeAreasCard;