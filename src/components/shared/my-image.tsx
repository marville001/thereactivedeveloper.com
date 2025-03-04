import Image from "next/image";
import React from 'react';

const MyImage = ({ url }: { url?: string; }) => {
	return (
		<div className="flex justify-center">
			<Image
				height={200}
				width={200}
				src={url || "https://avatars.githubusercontent.com/u/51154760?v=4"}
				className="my-5 rounded-full"
				alt="Martin Mwangi"
			/>
		</div>
	);
};

export default MyImage;