import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
	return (
		<section className="flex flex-col min-h-screen max-h-fit w-screen items-center md:justify-between gap-10 px-[5%] pb-5 homeBg">
			<Navbar />

			<Outlet />

			<p className="text-sm hidden md:block ">
				�� 2023 Space Travel. All rights reserved.
			</p>
		</section>
	);
}

export default App;
