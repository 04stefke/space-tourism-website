import React, { useState } from "react";
import data from "../api/data.json";
const Destination = () => {
	const destinations = data.destinations;
	const [selectedDestination, setSelectedDestination] = useState(
		destinations[0]
	);
	return (
		<section className=" uppercase flex items-center gap-12 flex-col h-full text-white">
			<h3 className="text-lg">
				<span className="pr-5">01</span>Pick Your Destination
			</h3>
			<img
				src={selectedDestination.images.png}
				alt={selectedDestination.name}
				className="w-44"
			/>
			{/* Render a list of destinations */}
			<ul className="flex items-center justify-center gap-10">
				{destinations.map((destination) => (
					<li
						key={destination.name}
						className={`${
							destination.name === selectedDestination.name ? "active" : ""
						}`}
						onClick={() => setSelectedDestination(destination)}
					>
						{destination.name}
					</li>
				))}
			</ul>
			<div className="flex flex-col items-center text-center gap-10 max-w-[70%]">
				<div className="border-b-2">
					<h1 className="text-5xl mb-8">{selectedDestination.name}</h1>
					<p className="text-sm pb-8 ">{selectedDestination.description}</p>
				</div>
				<div className=" w-full flex flex-col md:flex-row  items-center justify-center gap-5">
					<div>
						<p className="text-sm text-gray-300">AVG. Distance</p>
						<p className="text-2xl">{selectedDestination.distance}</p>
					</div>
					<div>
						<p className="text-sm text-gray-300">EST Travel Time</p>
						<p className="text-2xl">{selectedDestination.travel}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Destination;
