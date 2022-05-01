import React from 'react'
import './Modal.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import Button from '../Button'
import ModalItem from '../ModalItem'
import { AiFillCloseCircle } from "react-icons/ai"
import {Link} from 'react-router-dom'

function Modal({ modalHandler, totalPrice }: any) {
	const items: string | number[] = useTypedSelector(
		(state) => state.games.gamesInCart
	)

	return (
		<div className='modal'>
			<AiFillCloseCircle
				style={{ cursor: "pointer" }}
				color='white'
				size={25}
				onClick={modalHandler}
			/>
			{items.length ? <h3>Игр к покупке: {items.length} </h3> : null}
			<div className='modal_inner'>
				{items.length ? (
					items.map((item: string | number | any) => (
						<ModalItem key={item.id} id={item.id} title={item.title} image={item.image} />
					))
				) : (
					<div className='modal_empty'>
						<h1>Корзина пуста</h1>
						<Button onClick={modalHandler} className={"primary"}>
							Вернуться
						</Button>
					</div>
				)}
				{items.length ? (
					<>
						<div className='modal_line'></div>
						<div className='modal_order'>
							<p>Итого: {totalPrice} Р</p>
							<Link to='/order'>
								<Button onClick={modalHandler} className={"primary"}>
									Оформить заказ
								</Button>
							</Link>
						</div>
					</>
				) : null}
			</div>
		</div>
	)
}

export default Modal
