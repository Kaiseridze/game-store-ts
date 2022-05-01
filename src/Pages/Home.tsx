import React from "react"
import GameItem from "../components/GameItem"
import games from "../games"
import Header from "../components/Header"

const Home = () => {
	return (
		<>
			<Header />
			<div className='main'>
				{games.map((game) => (
					<GameItem game={game} key={game.id} {...game} />
				))}
			</div>
		</>
	)
}

export default Home
