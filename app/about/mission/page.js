import Button from '@/app/components/Button';
import Image from 'next/image';
import imran from '@/public/imran.png';

const Mission = () => {
	return (
		<div>
			<span className="mt-10">This is Mission page</span>
			<div className="w-[400px]">
				<Image placeholder="blur" src={imran} alt="Imran Image" />
			</div>
			<Button />
		</div>
	);
};

export default Mission;
