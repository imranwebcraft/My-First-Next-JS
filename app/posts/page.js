import getAllPost from '@/lib/getAllPost';
import Link from 'next/link';
import React from 'react';

const Posts = async () => {
	const posts = await getAllPost();
	return (
		<div>
			<h1 className="text-3xl my-5">All Posts</h1>
			{posts?.map(({ id, title, body }) => (
				<Link key={id} href={`/posts/${id}`}>
					<div className=" border my-5 p-5 rounded-md bg-gray-950">
						<p>ID: {id}</p>
						<h1 className="text-2xl">{title}</h1>
						<p className="text-gray-400">{body}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default Posts;
