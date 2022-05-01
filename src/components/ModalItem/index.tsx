import React, { FC } from 'react';
import { deleteGameFromCart } from '../../store/cart/reducer'
import { useDispatch } from "react-redux"
import { AiOutlineCloseSquare } from "react-icons/ai"
import './ModalItem.scss'

type TModalItem = {
	image: string
	title: string
	id: number

}

const ModalItem: FC<TModalItem> = ({ image, title, id,  }) => {
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(deleteGameFromCart(id))
	}
	return (
		<div className='modal_item'>
			<p>{title}</p>
			<div className='modal_controller'>
				<img src={image} alt='modal_img' />
				<AiOutlineCloseSquare
					style={{ cursor: "pointer" }}
					color='white'
					onClick={handleDelete}
					size={30}
				/>
			</div>
		</div>
	)
}

export default ModalItem
