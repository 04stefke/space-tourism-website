import React from "react";

const Home = () => {
	return (
		<section className="flex max-w-[80%] justify-between ">
			<article className="flex flex-col gap-10 w-1/3">
				<h1 className="text-2xl">
					So, you want to travel to <br />
					<span className="text-9xl uppercase">Space</span>
				</h1>
				<p className="text-lg">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</article>
			<button className="self-end rounded-full h-52 w-52 bg-red-500 uppercase hover:shadow-custom text-3xl">explore</button>
		</section>
	);
};

export default Home;
