import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<section className=" flex max-w-[90%] 2xl:w-full items-center text-center 2xl:flex-row flex-col md:gap-10 justify-between text-gray-400  ">
			<article className="flex flex-col items-center gap-5 md:gap-10 px-5 2xl:px-0 mb-10 md:mb-52 2xl:mb-0 ">
				<h3 className="text-2xl md:text-4xl">
					So, you want to travel to <br />
				</h3>
				<h1 className="text-7xl uppercase 2xl:text-9xl text-white">Space</h1>
				<p className="text-lg sm:text-2xl pt-2 max-w-[500px]">
					Let’s face it; if you want to go to space, you might as well genuinely
					go to outer space and not hover kind of on the edge of it. Well sit
					back, and relax because we’ll give you a truly out of this world
					experience!
				</p>
			</article>
			<Link to="/destination">
				<button className="rounded-full h-44  w-44 sm:h-52 sm:w-52 md:h-72 md:min-w-72 bg-white uppercase hover:shadow-custom text-xl sm:text-3xl text-black">
					explore
				</button>
			</Link>
		</section>
	);
};

export default Home;
