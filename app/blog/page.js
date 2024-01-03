import Link from 'next/link';
import React from 'react';

const Blog = () => {
	const blogs = [
		{
			id: 1,
			title: 'Blog1',
			description: 'Blog 1 description',
		},
		{
			id: 2,
			title: 'Blog2',
			description: 'Blog 2 description',
		},
	];

	return (
		<main>
			<div className="font-bold mt-10">This is blog page</div>
			<ul>
				{blogs?.map(({ id, title, description }) => (
					<Link href={`/blog/${id}`} key={id}>
						<div className=" border border-gray-600 p-5 my-2">
							<li>{title}</li>
							<p>{description}</p>
						</div>
					</Link>
				))}
			</ul>
		</main>
	);
};

export default Blog;
