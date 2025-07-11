import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard: React.FC<StatCardProps> = ({ value, label }) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center border border-gray-100 hover:shadow-lg transition-shadow duration-200">
    <div className="text-3xl sm:text-4xl font-extrabold text-[#FF8426]">{value}</div>
    <div className="text-gray-700 text-base mt-2 font-semibold">{label}</div>
  </div>
);

export default StatCard;