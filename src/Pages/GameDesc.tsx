import React from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { Link } from 'react-router-dom'
function GameDesc() {
	const gameDescription: any = useTypedSelector(
		(state) => state.gameDesc.currentGame
	)
	if (!gameDescription) {
		return null
	}
	return (
		<>
			<Link to='/'>
				<h1>← Вернуться</h1>
			</Link>
			<div className='game_description'>
				<div className='game_description--left'>
					<h1>{gameDescription.title}</h1>
					<iframe
						width='800px'
						height='400px'
						title='Youtube Video Player'
						src={gameDescription.video}></iframe>
				</div>
				<p>{gameDescription.description}</p>
			</div>
		</>
	)
}

export default GameDesc
