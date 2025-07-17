import React from 'react';
import { FaRegClock } from 'react-icons/fa';

const ComingSoon: React.FC = () => (
  <div className="flex flex-col items-center justify-center min-h-[40vh] py-16">
    <FaRegClock className="text-5xl text-orange-500 mb-4 animate-pulse" />
    <h2 className="text-2xl font-bold mb-2 text-gray-800">Coming Soon</h2>
    <p className="text-gray-600 text-center max-w-md">
      This page is currently under development. Please check back soon for updates!
    </p>
  </div>
);

export default ComingSoon;