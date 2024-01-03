import { getSinglePost } from '@/lib/getAllPost';
import React from 'react';

export const generateMetadata = async ({ params }) => {
	const { id } = params || {};
	const post = await getSinglePost(id);

	return {
		title: post.title,
		description: post.description,
	};
};

const PostDetilsPage = async ({ params }) => {
	const { id } = params || {};
	const post = await getSinglePost(id);
	const { userId, title, body } = post || {};

	return (
		<div>
			<p className="text-2xl mt-5">
				Now you are seeing the details of post id: {id}
			</p>
			<div className="mt-5 space-y-5 w-[30vw] border p-10 rounded-md">
				<p>User ID: {userId}</p>
				<h1 className=" text-4xl font-medium">{title}</h1>
				<p>{body}</p>
			</div>
		</div>
	);
};

export default PostDetilsPage;
