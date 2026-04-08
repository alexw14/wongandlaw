import React from 'react';

type TeamMemberInfoCardProps = {
	title: string;
	items: string[];
	icon?: React.ReactNode;
};

const TeamMemberInfoCard: React.FC<TeamMemberInfoCardProps> = ({ title, items, icon }) => {
	if (!items || items.length === 0) return null;
	return (
		<div className="bg-white rounded-xl shadow p-6 flex flex-col items-start min-h-[180px]">
			<div className="flex items-center gap-2 mb-2">
				{icon}
				<h3 className="text-lg font-bold text-orange-500">{title}</h3>
			</div>
			<ul className="list-disc list-inside text-gray-700 space-y-1">
				{items.map((item) => (
					<li key={item} className="text-base">{item}</li>
				))}
			</ul>
		</div>
	);
}

export default TeamMemberInfoCard;