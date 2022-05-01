import React, { FC } from 'react'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { deleteGameFromCart } from '../../store/cart/reducer';
import './OrderItem.scss';
import { useDispatch } from 'react-redux'

type TOrder = {
	title: string
	image: string
	price: number
	id: number
}


const OrderItem: FC<TOrder> = ({ title, image, price, id }) => {

	const dispatch = useDispatch()
	const deleteFromOrder = () => {
		dispatch(deleteGameFromCart(id))
	}
	return (
		<div className='order_item'>
			<div className='order_item--left'>
				<img src={image} alt='' />
				<h3>{title}</h3>
				<span>{price} Р</span>
			</div>
			<div className='order_item--right'>
				<AiOutlineCloseSquare
					style={{ cursor: "pointer" }}
					color='white'
					size={30}
					onClick={deleteFromOrder}
				/>
			</div>
			
		</div>
	)
}

export default OrderItem
