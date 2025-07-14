import React from 'react';
import {
  FaBriefcase,
  FaUserCheck,
  FaLightbulb,
  FaMoneyCheckAlt,
  FaExchangeAlt,
  FaUniversity,
  FaPassport,
  FaUserGraduate,
} from 'react-icons/fa';

const ImmigrationServices = () => {
  return (
    <section className="bg-gray-50 rounded-2xl py-12 px-4 shadow-inner">
      <h2 className="text-3xl font-extrabold mb-8 text-[#FF8426] text-center">
        Our Immigration Services
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaUserCheck className="text-2xl text-blue-500 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              Family-Based Visa Petitions
            </div>
            <div className="text-gray-700 text-sm">
              All family-based immigrant visa petitions
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaBriefcase className="text-2xl text-gray-600 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              Employment-Based Visas
            </div>
            <div className="text-gray-700 text-sm">
              EB-1A, EB-1B, EB-1C, EB-2, EB-3, and EB-5
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaLightbulb className="text-2xl text-yellow-500 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              L-1A & EB-1C Strategies
            </div>
            <div className="text-gray-700 text-sm">
              Consultation and strategies for L-1A and EB-1C
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaMoneyCheckAlt className="text-2xl text-emerald-600 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              EB-5 Investor Consultation
            </div>
            <div className="text-gray-700 text-sm">
              Project evaluation, source of funds strategies
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaExchangeAlt className="text-2xl text-indigo-500 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              Adjustment of Status
            </div>
            <div className="text-gray-700 text-sm">
              Advance parole, work permits, and more
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaUniversity className="text-2xl text-green-600 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              Consular Processing
            </div>
            <div className="text-gray-700 text-sm">
              National Visa Center and U.S. Embassy processing
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaPassport className="text-2xl text-purple-500 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              Non-Immigrant Visas
            </div>
            <div className="text-gray-700 text-sm">
              H-1B, L-1A/L2, L-1B/L2, E-1/2, O
            </div>
          </div>
        </div>
        <div className="flex items-start gap-3 bg-white rounded-xl shadow p-5 hover:shadow-lg transition">
          <FaUserGraduate className="text-2xl text-pink-500 mt-1" />
          <div>
            <div className="font-semibold text-[#FF8426]">
              Student & Other Services
            </div>
            <div className="text-gray-700 text-sm">
              Student visa (F), status changes, citizenship, I-601 waivers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImmigrationServices;
