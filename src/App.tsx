import React from "react"
import "./index.scss"
import { Routes, Route, } from "react-router-dom"

import Home from "./Pages/Home"
import Order from "./Pages/Order"
import GameDesc from "./Pages/GameDesc"
import SuccessBuy from "./Pages/SuccessBuy"

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/order' element={<Order />} />
				<Route path='/description/:game_title' element={<GameDesc />} />
				<Route path="/success_buy" element={<SuccessBuy/>}/>
			</Routes>
		</div>
	)
}

export default App
