import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href="/">
				<button className=" px-4 py-2 rounded border border-gray-500 mt-2">
					Return Home
				</button>
			</Link>
		</div>
	);
}
