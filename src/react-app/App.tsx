// src/App.tsx

import { useState } from "react";
import logo from "./assets/logo.svg";
import "./App.css";

function App() {
	return (
		<>
			<div>
				<a href="/" target="_blank">
					<img
						src={logo}
						className="logo cloudflare"
						alt="Cloudflare logo"
					/>
				</a>
			</div>
			<h1>Neel + Nidhi + Aum + Pragnesh</h1>
			<div className="card">
				<p>
					Comming Soon....
				</p>
			</div>
		</>
	);
}

export default App;
