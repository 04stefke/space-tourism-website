import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
	return (
		<div className="flex flex-col min-h-screen max-w-screen-xl items-center">
			<Navbar/>
			<Outlet/>
		</div>
	);
}

export default App;
