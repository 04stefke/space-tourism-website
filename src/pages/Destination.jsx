import React, { useState } from "react";
import data from "../api/data.json";
const Destination = () => {
	const destinations = data.destinations;
	const [selectedDestination, setSelectedDestination] = useState(
		destinations[0]
	);
	return (
		<section>
			<article className="uppercase">
				<h3>
					<span>01</span>Pick Your Destination
				</h3>
				<img
					src={selectedDestination.images.png}
					alt={selectedDestination.name}
				/>
				{/* Render a list of destinations */}
				<ul >
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
			</article>
		</section>
	);
};

export default Destination;
