import React from "react";
import logo from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<header className="flex w-full justify-between items-center lg:pt-10">
			<img src={logo} alt="logo" />
      
			<nav className=" h-24 px-24 bg-black/30 ">
				<ul className="flex items-center gap-5 lg:gap-10 h-full">
					<li className="uppercase ">
						<Link to="/">
							<span className="invisible lg:visible lg:font-bold lg:pr-2">01</span> Home
						</Link>
					</li>
					<li className="uppercase ">
						<Link to="/destination">
							<span className="invisible lg:visible lg:font-bold lg:pr-2">02</span> Destination
						</Link>
					</li>
					<li className="uppercase ">
						<Link to="/crew">
							<span className="invisible lg:visible lg:font-bold lg:pr-2">03</span> Crew
						</Link>
					</li>
					<li className="uppercase ">
						<Link to="/technology">
							<span className="invisible lg:visible lg:font-bold lg:pr-2">04</span> Technology
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
