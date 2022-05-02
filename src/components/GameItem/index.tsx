import React, { FC } from "react"
import GameGenres from "../GameGenres"
import Button from "../Button"
import { useDispatch } from "react-redux"
import { setGameToCart, deleteGameFromCart } from "../../store/cart/reducer"
import { setCurrentGame } from "../../store/game/reducer"
import { useNavigate } from "react-router-dom"

import "./GameItem.scss"
import { useTypedSelector } from "../../hooks/useTypedSelector"

interface IGameItems {
	image: string
	price: number
	title: string
	genres: string[]
	game: any
}

const GameItem: FC<IGameItems> = ({ image, price, title, genres, game }) => {
	const items = useTypedSelector((state) => state.games.gamesInCart)
	const isGameInCart = items.some((item: any) => item.id === game.id)
	const navigate = useNavigate()

	const dispatch = useDispatch()
	const handleClick = () => {
		if (isGameInCart) {
			dispatch(deleteGameFromCart(game.id))
		} else {
			dispatch(setGameToCart(game))
		}
	}
	const toGamePage = () => {
		dispatch(setCurrentGame(game))
		navigate(`/description/${title}`)
	}
	return (
		<div className='game_item'>
				<div
					onClick={toGamePage}
					className='game_item--cover'
					style={{ backgroundImage: `url(${image})` }}
				/>
			<div className='game_item--details'>
				<h2 className='game_item--title'>{title}</h2>
				{genres.map((genre) => (
					<GameGenres key={genre} genres={genre} />
				))}
				<div className='game_item--buyblock'>
					<span className='game_item--price'>{price} Р</span>
					<Button
						onClick={handleClick}
						className={isGameInCart ? "secondary" : "primary"}>
						{isGameInCart ? "Убрать из корзины" : "Купить"}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default GameItem
