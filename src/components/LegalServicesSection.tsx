import React, { useState } from 'react';
import { FaBuilding, FaHandshake, FaGlobe, FaGavel, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const services = [
	{
		label: 'EB-5 Investor Program',
		icon: <FaChartLine className="text-3xl text-[#FF8426] mb-2" />,
		description:
			'Guidance and representation for investors and families seeking U.S. permanent residency through the EB-5 program, including direct and regional center investments.',
		buttonText: 'Learn More about EB-5',
		href: '/practice-areas/eb5-investor-program',
		image: '/images/services/eb5.jpg',
	},
	{
		label: 'Immigration',
		icon: <FaGlobe className="text-3xl text-[#FF8426] mb-2" />,
		description:
			'Comprehensive immigration services for individuals, families, and businesses, including visas, green cards, citizenship, and compliance.',
		buttonText: 'Learn More about Immigration',
		href: '/practice-areas/immigration',
		image: '/images/services/immigration.jpg',
	},
	{
		label: 'Business Entities & Corporate Governance',
		icon: <FaBuilding className="text-3xl text-[#FF8426] mb-2" />,
		description:
			'Formation, structuring, and governance of corporations, LLCs, and partnerships, plus ongoing counsel for compliance and best practices.',
		buttonText: 'Learn More about Business Entities',
		href: '/practice-areas/business-entities-corporate-governance',
		image: '/images/services/business-entities.jpg',
	},
	{
		label: 'Business Transactions',
		icon: <FaHandshake className="text-3xl text-[#FF8426] mb-2" />,
		description:
			'Legal support for mergers, acquisitions, contracts, joint ventures, and a wide range of domestic and international business deals.',
		buttonText: 'Learn More about Business Transactions',
		href: '/practice-areas/business-transactions',
		image: '/images/services/business-transactions.jpg',
	},
	{
		label: 'E-Commerce & Intellectual Property',
		icon: <FaGavel className="text-3xl text-[#FF8426] mb-2" />,
		description:
			'Protection and enforcement of trademarks, copyrights, and patents, plus legal strategies for online businesses and digital assets.',
		buttonText: 'Learn More about E-Commerce & IP',
		href: '/practice-areas/ecommerce-intellectual-property',
		image: '/images/services/ecommerce-ip.jpg',
	},
	{
		label: 'Assets Protection & Estate Planning',
		icon: <FaShieldAlt className="text-3xl text-[#FF8426] mb-2" />,
		description:
			'Personalized asset protection, trusts, wills, and estate planning to secure your legacy and provide peace of mind for your family.',
		buttonText: 'Learn More about Estate Planning',
		href: '/practice-areas/assets-protection-estate-planning',
		image: '/images/services/estate-planning.jpg',
	},
];

const tabVariants = {
	active:
		'bg-[#FF8426] text-white font-bold shadow-md border-none ring-2 ring-[#FF8426] transition-all duration-200 cursor-pointer',
	inactive:
		'bg-white text-gray-700 hover:bg-orange-100 hover:text-[#FF8426] border border-gray-200 shadow-sm transition-all duration-200 cursor-pointer',
};

const contentVariants = {
	initial: { opacity: 0, x: 24 },
	animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
	exit: { opacity: 0, x: -24, transition: { duration: 0.3 } },
};

const LegalServicesSection: React.FC = () => {
	const [active, setActive] = useState(0);

	return (
		<section className="bg-white py-16 px-4">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#FF8426] text-center">
					Legal Services We Provide
				</h2>
				<div className="flex flex-col md:flex-row gap-8">
					{/* Tabs: scrollable horizontally on mobile, vertical on desktop */}
					<div className="w-full md:w-1/3">
						<div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
							{services.map((service, idx) => (
								<button
									key={service.label}
									className={`flex-shrink-0 w-auto md:w-full text-left px-4 py-3 rounded transition-all duration-200 ${
										active === idx ? tabVariants.active : tabVariants.inactive
									}`}
									onClick={() => setActive(idx)}
									type="button"
									style={{ minWidth: '180px' }}
								>
									{service.label}
								</button>
							))}
						</div>
					</div>
					{/* Content */}
					<div className="flex-1 flex flex-col items-center justify-center min-h-[268px]">
						<AnimatePresence mode="wait">
							<motion.div
								key={active}
								initial="initial"
								animate="animate"
								exit="exit"
								variants={contentVariants}
								className="relative w-full h-full max-w-xl flex items-center justify-center rounded-lg overflow-hidden shadow-md min-h-[300px]"
							>
								{/* Background Image */}
								{services[active].image && (
									<img
										src={services[active].image}
										alt={services[active].label}
										className="absolute inset-0 w-full h-full object-cover z-0 min-h-[300px]"
									/>
								)}
								{/* Overlay */}
								<div className="absolute inset-0 bg-black/50 z-10" />
								{/* Content Overlay */}
								<div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-6 text-center text-white">
									{services[active].icon}
									<h3 className="text-xl font-bold mb-2 drop-shadow">{services[active].label}</h3>
									<p className="mb-6 drop-shadow">{services[active].description}</p>
									{/* Hide button in overlay on mobile, show on md+ */}
									<Link
										href={services[active].href}
										className="hidden md:inline-block bg-[#FF8426] hover:bg-[#e6731f] text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200 text-base"
									>
										{services[active].buttonText}
									</Link>
								</div>
							</motion.div>
						</AnimatePresence>
						{/* Show button below image on mobile only */}
						<Link
							href={services[active].href}
							className="mt-4 md:hidden inline-block bg-[#FF8426] hover:bg-[#e6731f] text-white font-semibold px-4 py-2 rounded-full shadow transition-colors duration-200 text-sm"
						>
							{services[active].buttonText}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LegalServicesSection;