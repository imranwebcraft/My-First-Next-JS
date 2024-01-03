'use client';

const Button = () => {
	return (
		<div>
			<button
				onClick={() => console.log('Button Clicked')}
				className="bg-pink-500 px-4 py-2 rounded-md mt-5"
			>
				Click Me
			</button>
		</div>
	);
};

export default Button;
