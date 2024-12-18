import React, { useState } from "react";
import data from "../api/data.json";
const Destination = () => {
	const destinations = data.destinations;
	const [selectedDestination, setSelectedDestination] = useState(
		destinations[0]
	);
	return (
		<section className="uppercase flex items-center justify-end flex-col h-full">
			<h3>
				<span>01</span>Pick Your Destination
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
			<div>
				<h1>{selectedDestination.name}</h1>
				<p>{selectedDestination.description}</p>
				<div>
					<div>
						<p>AVG. Distance</p>
						<p>{selectedDestination.distance}</p>
					</div>
					<div>
						<p>EST Travel Time</p>
						<p>{selectedDestination.travel}</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Destination;
