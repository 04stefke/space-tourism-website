import React, { useState } from "react";
import data from "../api/data.json";
const Crew = () => {
	const crews = data.crew;
	const [selectedCrew, setSelectedCrew] = useState(crews[0]);
	return (
		<section className=" uppercase flex items-center justify-center lg:justify-between gap-12 flex-col lg:flex-row h-[60vh] text-white">
			<div className=" h-full flex flex-col items-center gap-5 justify-between">
				<h3 className="text-lg  ">
					<span className="pr-5">02</span>MEET YOUR CREW
				</h3>

				<div className="flex flex-col items-center text-center lg:text-start gap-10 max-w-[70%]">
					<div>
						<div>
							<p>{selectedCrew.role}</p>
							<h1 className="text-2xl mb-8">{selectedCrew.name}</h1>
						</div>
						<p className="text-xl pb-8 capitalize lg:max-w-[70%] ">{selectedCrew.bio}</p>
					</div>
				</div>
				<ul className="flex items-center justify-center lg:items-start gap-5 sm:gap-10 ">
					{crews.map((crew) => (
						<li
							key={crew.name}
							className={`cursor-pointer relative`}
							onClick={() => setSelectedCrew(crew)}
						>
							<i
								class={`${
									crew.name === selectedCrew.name
										? "bx bxs-circle"
										: "bx bx-circle"
								}`}
							></i>
						</li>
					))}
				</ul>
			</div>
			<img
				src={selectedCrew.images.webp}
				alt={selectedCrew.name}
				className="w-48 lg:w-80 xl:w-96 "
			/>
		</section>
	);
};

export default Crew;
