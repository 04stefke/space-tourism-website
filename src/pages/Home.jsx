import React from "react";

const Home = () => {
	return (
		<section className="flex max-w-[80%] items-center text-center md:text-start flex-col lg:flex-row gap-10 lg:justify-between text-white ">
			<article className="flex flex-col gap-10 lg:w-1/3 md:w-96">
				<h1 className="text-lg md:text-2xl">
					So, you want to travel to <br />
					<span className="text-5xl sm:text-9xl uppercase">Space</span>
				</h1>
				<p className="sm:text-lg ">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</article>
			<button className="lg:self-end rounded-full h-32 w-32 sm:h-36 sm:w-36 md:w-44 md:h-44 lg:h-52 lg:w-52 bg-white uppercase hover:shadow-custom text-xl sm:text-3xl text-black">explore</button>
		</section>
	);
};

export default Home;
