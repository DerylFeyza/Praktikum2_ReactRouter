import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Beranda from "./pages/Beranda.jsx";
import Galeri from "./pages/Galeri.jsx";
import HariBesar from "./pages/HariBesar.jsx";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Beranda />} />
				<Route path="/galeri" element={<Galeri />} />
				<Route path="/haribesar" element={<HariBesar />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
