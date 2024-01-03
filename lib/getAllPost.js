const getAllPost = async () => {
	const response = await fetch(
		'https://jsonplaceholder.typicode.com/posts?_limit=10'
	);
	const data = await response.json();
	return data;
};

export const getSinglePost = async (id) => {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`
	);
	const data = await response.json();
	return data;
};

export default getAllPost;
