import Link from 'next/link';
import React from 'react';

const AboutLayout = ({ children }) => {
	return (
		<div>
			<nan className="my-5">
				<ul className="flex gap-5">
					<li>
						<Link href="/about/mission">Mission</Link>
					</li>
					<li>
						<Link href="/about/vision">Vision</Link>
					</li>
				</ul>
			</nan>
			{children}
		</div>
	);
};

export default AboutLayout;
