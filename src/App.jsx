import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function App() {
	return (
		<section className="flex flex-col min-h-screen w-screen items-center justify-between gap-10 pl-[5%] pb-5 homeBg">
			<Navbar />
			<Outlet />
			<p className="text-sm ">�� 2023 Space Travel. All rights reserved.</p>
		</section>
	);
}

export default App;
