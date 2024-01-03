import { notFound } from 'next/navigation';
import React from 'react';

const BlogDetails = ({ params }) => {
	// Destructure parameters
	const { id } = params || {};

	if (id === '3') {
		notFound();
	}

	return (
		<div>
			<p className="mt-10">
				The details of{' '}
				<span className="text-2xl text-purple-500">blog {id} </span>
			</p>
		</div>
	);
};

export default BlogDetails;
