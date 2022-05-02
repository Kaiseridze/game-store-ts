import React from "react"
import "../index.scss"
import OrderItem from "../components/OrderItem"
import { deleteAllGame } from "../store/cart/reducer"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { Link } from "react-router-dom"
import { calcTotalPrice } from "../utils/TotalPrice"
import Button from "../components/Button"
import { useDispatch } from "react-redux"

const Order = () => {
	const dispatch = useDispatch()
	const games = useTypedSelector((state) => state.games.gamesInCart)
	const totalPrice = calcTotalPrice(games)

	const handleBuy = () => {
		dispatch(deleteAllGame(games))
	}

	return (
		<div className='order'>
			<Link to='/'>
				<h1>← Вернуться</h1>
			</Link>
			{totalPrice ? (
				<>
					{games.map((game: any) => (
						<OrderItem key={game.id} {...game} />
					))}
					<div className='order_controller'>
						<h1>Итог: {totalPrice} Р</h1>
						<Link to='/success_buy'>
							<Button className={"primary"} onClick={handleBuy}>
								Купить
							</Button>
						</Link>
					</div>
				</>
			) : (
				<>
					<h1 className='order_error'>Вы ничего не заказали</h1>
				</>
			)}
		</div>
	)
}

export default Order
