import React, { useState } from "react";
import data from "../api/data.json";
const Destination = () => {
	const destinations = data.destinations;
	const [selectedDestination, setSelectedDestination] = useState(
		destinations[0]
	);
	return (
		<section className=" uppercase flex items-center justify-center lg:justify-between gap-12 flex-col lg:flex-row h-full text-gray-400">
			<div className="flex flex-col items-center gap-10 ">
				<h3 className="text-lg text-white ">
					<span className="pr-5 text-gray-400">01</span>Pick Your Destination
				</h3>
				<img
					src={selectedDestination.images.png}
					alt={selectedDestination.name}
					className="w-44 lg:w-80 xl:w-96"
				/>
			</div>
			{/* Render a list of destinations */}
			<div className="flex flex-col items-center lg:items-start justify-center lg:max-w-[50%] mt-10 gap-10">
				<ul className="flex items-center justify-center lg:items-start gap-5 sm:gap-10 ">
					{destinations.map((destination) => (
						<li
							key={destination.name}
							className={`cursor-pointer relative ${
								destination.name === selectedDestination.name ? "active" : ""
							}`}
							onClick={() => setSelectedDestination(destination)}
						>
							{destination.name}
						</li>
					))}
				</ul>
				<div className="flex flex-col items-center text-center lg:text-start gap-10 max-w-[70%]">
					<div className="border-b-2">
						<h1 className="text-5xl mb-8 text-white">{selectedDestination.name}</h1>
						<p className="text-sm pb-8 capitalize ">
							{selectedDestination.description}
						</p>
					</div>
					<div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5">
						<div>
							<p className="text-sm ">AVG. Distance</p>
							<p className="text-2xl text-white">{selectedDestination.distance}</p>
						</div>
						<div>
							<p className="text-sm ">EST Travel Time</p>
							<p className="text-2xl text-white">{selectedDestination.travel}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Destination;
