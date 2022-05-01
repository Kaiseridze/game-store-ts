import React, {useState} from "react"
import { BiCartAlt } from "react-icons/bi"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { calcTotalPrice } from "../../utils/TotalPrice"
import Badge from "../Badge"
import Modal from "../Modal"

import './Header.scss'

function Header() {
	const [modal, setModal] = useState<boolean>(false)
	const items = useTypedSelector(state => state.games.gamesInCart)
	const totalPrice = calcTotalPrice(items)

	const modalHandler = () => {
		setModal(!modal)
	}
	
	return (
		<header className='header'>
				<h1>Game Store</h1>
			<div className='header_items'>
				<Badge quantity={items.length} />
				<BiCartAlt
					style={{ cursor: "pointer" }}
					onClick={modalHandler}
					color='white'
					size={25}
					className='cart-icon'
				/>
				{totalPrice ? <span>{totalPrice} рублей</span> : null}
				{modal && <Modal totalPrice={totalPrice} modalHandler={modalHandler} />}
			</div>
		</header>
	)
}

export default Header
