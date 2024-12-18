import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
	return (
		<section className="flex flex-col min-h-screen w-screen items-center justify-evenly gap-10 pl-[5%] lg:pb-32 pb-10 homeBg">
			<Navbar />
			<div className="w-full min-h-full flex flex-col items-center">
				<Outlet />
			</div>
		</section>
	);
}

export default App;
