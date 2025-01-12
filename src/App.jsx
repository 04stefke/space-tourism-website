import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
	const location = useLocation()

	const pageBackgroundSwitcher = (() => {
		switch (location.pathname) {
            case "/":
                return "homeBg";
            case "/destination":
                return "destinationBg";
            case "/crew":
                return "crewBg";
            case "/technology":
                return "technologyBg";
            default:
                return "";
        }
	})();
	return (
		<section className={`${pageBackgroundSwitcher} flex flex-col min-h-screen w-screen items-center md:justify-between gap-10 px-[5%] pb-5 homeBg font-custom transition-all duration-500`}>
			<Navbar />

			<Outlet />

			<p className="text-sm hidden md:block text-white ">
				�� 2023 Space Travel. All rights reserved.
			</p>
		</section>
	);
}

export default App;
