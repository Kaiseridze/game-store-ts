import React, { useEffect, useState } from "react"
import "./index.scss"
import { Routes, Route, } from "react-router-dom"

import Home from "./Pages/Home"
import Order from "./Pages/Order"
import GameDesc from "./Pages/GameDesc"

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/order' element={<Order />} />
				<Route path='/description/:game_title' element={<GameDesc />} />
			</Routes>
		</div>
	)
}

export default App
