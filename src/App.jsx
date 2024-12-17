import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
	return (
		<section className="flex flex-col min-h-screen w-screen items-center justify-center pl-[5%]">
			<Navbar/>
			<Outlet/>
		</section>
	);
}

export default App;
