import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
	return (
		<section className="flex flex-col min-h-screen w-screen items-center gap-10 justify-end pl-[5%] lg:pb-32 pb-10 homeBg">
			<Navbar/>
			<Outlet/>
		</section>
	);
}

export default App;
