import React from 'react';
import Image from 'next/image';

interface TeamMember {
	name: string;
	titleKey: string;
	image: string;
	slug: string;
}

interface TeamMemberBioProps {
	member: TeamMember,
	bio: string
}

const TeamMemberBio: React.FC<TeamMemberBioProps> = ({ member, bio }) => {
	return (
		<div className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-12">
			<Image
				src={member.image}
				alt={member.name}
				width={250}
				height={250}
				quality={100}
				className='w-64 h-64 rounded-2xl object-cover object-top border-4 border-orange-500 shadow-lg'
				unoptimized
			/>
			<div className="flex-1">
				<h1 className="text-4xl font-extrabold mb-2 text-orange-500">{member.name}</h1>
				<h2 className="text-lg text-gray-700 mb-4">{member.titleKey}</h2>
				<p className="text-gray-700 text-base leading-relaxed">{bio}</p>
			</div>
		</div>
	)
}

export default TeamMemberBio;