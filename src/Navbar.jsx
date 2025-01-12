import React, { useState } from "react";
import logo from "/assets/shared/logo.svg";
import boxicons from "boxicons";
import { NavLink } from "react-router-dom";
const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="flex w-full justify-between items-center pt-10  text-white">
			<img src={logo} alt="logo" />
			<ul className="navbarDefault">
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarActive" : "text-gray-400"}`
						}
						to="/"
					>
						<span className="lg:font-bold lg:pr-2">00</span> Home
					</NavLink>
				</li>
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarActive" : "text-gray-400"}`
						}
						to="/destination"
					>
						<span className="lg:font-bold lg:pr-2">01</span> Destination
					</NavLink>
				</li>
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarActive" : "text-gray-400"}`
						}
						to="/crew"
					>
						<span className="lg:font-bold lg:pr-2">02</span> Crew
					</NavLink>
				</li>
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarActive" : "text-gray-400"}`
						}
						to="/technology"
					>
						<span className="lg:font-bold lg:pr-2">03</span> Technology
					</NavLink>
				</li>
			</ul>
			<ul
				className={` navbarHamburgerDropdown ${
					isMenuOpen ? "right-0" : "left-[-500px]"
				}`}
			>
				<i
					className="bx bx-x lg:hidden block cursor-pointer text-5xl self-end mb-10"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
				></i>
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarSmallActive" : "text-gray-200"}`
						}
						to="/"
					>
						<span className="font-bold pr-2">00</span> Home
					</NavLink>
				</li>
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarSmallActive" : "text-gray-200"}`
						}
						to="/destination"
					>
						<span className="font-bold pr-2">01</span> Destination
					</NavLink>
				</li>
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarSmallActive" : "text-gray-200"}`
						}
						to="/crew"
					>
						<span className="font-bold pr-2">02</span> Crew
					</NavLink>
				</li>
				<li className="uppercase relative ">
					<NavLink
						className={({ isActive }) =>
							` ${isActive ? "navbarSmallActive" : "text-gray-200"}`
						}
						to="/technology"
					>
						<span className="font-bold pr-2">03</span> Technology
					</NavLink>
				</li>
			</ul>
			<i
				className="bx bx-menu lg:hidden block cursor-pointer text-5xl"
				onClick={() => setIsMenuOpen(!isMenuOpen)}
			></i>
		</header>
	);
};

export default Navbar;
