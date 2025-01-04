import React, { useState } from "react";
import logo from "/assets/shared/logo.svg";
import boxicons from "boxicons";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<header className="flex w-full justify-between items-center pt-10  text-white">
			<img src={logo} alt="logo" />
			<ul className={` navbarHamburgerDropdown ${isMenuOpen ? 'right-0' : 'left-[-500px]'}`}>
				<i className="bx bx-x lg:hidden block cursor-pointer text-5xl self-end" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>
				<li className="uppercase ">
					<Link to="/">
						<span className="lg:font-bold lg:pr-2">01</span> Home
					</Link>
				</li>
				<li className="uppercase ">
					<Link to="/destination">
						<span className="lg:font-bold lg:pr-2">02</span> Destination
					</Link>
				</li>
				<li className="uppercase ">
					<Link to="/crew">
						<span className="lg:font-bold lg:pr-2">03</span> Crew
					</Link>
				</li>
				<li className="uppercase ">
					<Link to="/technology">
						<span className="lg:font-bold lg:pr-2">04</span> Technology
					</Link>
				</li>
			</ul>
			<i className="bx bx-menu lg:hidden block cursor-pointer text-5xl" onClick={() => setIsMenuOpen(!isMenuOpen)}></i>



		</header>
	);
};

export default Navbar;
