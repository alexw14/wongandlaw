import Link from 'next/link';
import { motion } from 'framer-motion';

const blogs = [
	{
		title: 'Understanding the EB-5 Investor Program',
		excerpt: 'A quick overview of the EB-5 program and what investors need to know.',
		href: '/blog/eb5-investor-program-overview',
		image: '/images/services/eb5.jpg',
		date: '2025-07-01',
	},
	{
		title: 'Business Entity Choices for Startups',
		excerpt: 'LLC, S-Corp, or C-Corp? Here’s how to choose the right structure.',
		href: '/blog/business-entity-choices',
		image: '/images/services/business-entities.jpg',
		date: '2025-06-20',
	},
	{
		title: 'Estate Planning Basics for Families',
		excerpt: 'Protect your legacy with these essential estate planning tips.',
		href: '/blog/estate-planning-basics',
		image: '/images/services/estate-planning.jpg',
		date: '2025-06-10',
	},
	// ...more blogs
];

const sectionVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.15 * i, duration: 0.6 },
	}),
};

const RecentNewsSection = () => (
	<motion.section
		className="bg-gray-50 py-16 px-4"
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.3 }}
		variants={sectionVariants}
	>
		<div className="max-w-6xl mx-auto">
			{/* Header row */}
			<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
				<h2 className="text-3xl sm:text-4xl font-bold text-[#FF8426]">
					Recent News & Blogs
				</h2>
				<Link
					href="/blog"
					className="bg-[#FF8426] hover:bg-[#e6731f] text-white font-semibold px-6 py-2 rounded-full shadow transition-colors duration-200 text-base"
				>
					View All
				</Link>
			</div>
			<div className="grid gap-8 md:grid-cols-3">
				{blogs.slice(0, 3).map((blog, i) => (
					<motion.div
						key={blog.href}
						className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
						variants={cardVariants}
						custom={i}
					>
						<img
							src={blog.image}
							alt={blog.title}
							className="w-full h-48 object-cover"
						/>
						<div className="p-6 flex-1 flex flex-col">
							<span className="text-xs text-gray-400 mb-2">
								{new Date(blog.date).toLocaleDateString()}
							</span>
							<h3 className="text-lg font-bold mb-2">{blog.title}</h3>
							<p className="text-gray-700 mb-4 flex-1">{blog.excerpt}</p>
							<Link
								href={blog.href}
								className="mt-auto inline-block text-[#FF8426] font-semibold hover:underline"
							>
								Read More &rarr;
							</Link>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	</motion.section>
);

export default RecentNewsSection;