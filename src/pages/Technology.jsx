import React, { useState } from "react";
import data from "../api/data.json";
const Techonolgy = () => {
	const technology = data.technology;
	const [selectedTechnology, setSelectedTechnology] = useState(technology[0]);
	return (
		<section className="text-white flex flex-col items-center justify-center gap-10">
			<h3 className="text-lg mb-5 uppercase">
				<span className="pr-5">03</span>Space Launch 101
			</h3>
			<img
				src={selectedTechnology.images.portrait}
				alt={selectedTechnology.name}
        className="h-[300px] w-[500px]"
			/>
			<ul className="flex items-center justify-center gap-5">
				{technology.map((tech, index) => (
					<li
						key={tech.name}
						className={`cursor-pointer relative`}
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
      <div className="flex flex-col items-center justify-center gap-5">
        <h3 className="text-xl uppercase">The Terminology...</h3>
        <h1 className="text-3xl uppercase">{selectedTechnology.name}</h1>
        <p className="text-lg lg:max-w-[70%] text-center ">{selectedTechnology.description}</p>
      </div>
		</section>
	);
};

export default Techonolgy;
