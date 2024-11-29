import MyImage from "@/components/shared/my-image";
import React from 'react';

const MyStory = () => {
	return (
		<section className="lg:py-4">

			<div className="my-16">

				<h1 className="text-center text-4xl my-8 font-sans font-bold tracking-wider text-dark dark:text-white">
					How I Became a Software Developer
				</h1>
				<p className="my-6 text-xl text-center dark:text-white">You will be suprised :) I wanted to be one</p>

				<MyImage />

				<div className="py-8 text-center dark:text-white">Am Creating the story. Soon it will be viewable right here</div>

			</div>
		</section>
	);
};

export default MyStory;