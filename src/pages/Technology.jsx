import React, { useState } from "react";
import data from "../api/data.json";
const Techonolgy = () => {
	const technology = data.technology;
	const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);
	return (
		<section className="text-white flex flex-col items-center justify-center gap-10 ">
			<h3 className="text-lg mb-5 uppercase xl:self-start ">
				<span className="pr-5">03</span>Space Launch 101
			</h3>
			<div className="xl:grid grid-cols-2 grid-rows-1 place-items-center">
				<img
					src={selectedTechnology.images.portrait}
					alt={selectedTechnology.name}
					className="h-[300px] w-[500px] xl:h-full xl:w-full  col-start-2 row-start-2 mb-5 "
				/>
				<div className="flex flex-col gap-5 xl:flex-row col-start-1 row-start-2">
					<ul className="flex items-center xl:flex-col justify-center gap-5 ">
						{technology.map((tech, index) => (
							<li
								key={tech.name}
								className={`cursor-pointer`}
								onClick={() => setSelectedTechnology(tech)}
							>
								<button
									class={`${
										tech.name === selectedTechnology.name
											? "technologyBtnActive"
											: "technologyBtn"
									}`}
								>
									{index + 1}
								</button>
							</li>
						))}
					</ul>
					<div className="flex flex-col items-center justify-center gap-5 xl:items-start">
						<h3 className="text-xl uppercase">The Terminology...</h3>
						<h1 className="text-3xl uppercase">{selectedTechnology.name}</h1>
						<p className="text-lg md:max-w-[70%] text-center xl:text-start xl:max-w-[50%] ">
							{selectedTechnology.description}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Techonolgy;
