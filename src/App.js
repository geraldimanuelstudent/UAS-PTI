import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import GamePage from "./pages/GamePage";
import LoginPage from "./pages/LoginPage";
import { UserContext } from "./lib/UserContext";

function App() {
	const [loginData, setLoginData] = useState({
		nama: "Player01",
		jurusan: "Unknown!",
	});

	const [current, setCurrent] = useState(0);

	const [waktu, setWaktu] = useState("");

	const [increment, setIncrement] = useState(0);

	// FUNCTION GAK KAMPUS
	const [noCampus, setNoCampus] = useState("");

	// FUNCTION PAUSE
	const [pause, setPause] = useState("");
	const [isClickedPause, setIsClickedPause] = useState(true);
	const [intervalPause, setIntervalPause] = useState("1000");

	return (
		<HashRouter>
			<UserContext.Provider
				value={{
					loginData,
					setLoginData,
					current,
					setCurrent,
					waktu,
					setWaktu,
					increment,
					setIncrement,
					noCampus,
					setNoCampus,
					pause,
					setPause,
					isClickedPause,
					setIsClickedPause,
					intervalPause,
					setIntervalPause,
				}}
			>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/GamePage" element={<GamePage />} />
					{/* <Route path="/ImageSlider" element={<ImageSlider />} />
					<Route path="/Jam" element={<Jam />} />
					<Route path="/Pause" element={<Jam />} /> */}
				</Routes>
			</UserContext.Provider>
		</HashRouter>
	);
}

export default App;