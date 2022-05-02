import React, { FC } from 'react'
import './Button.scss'

interface IButton {
	onClick?: React.MouseEventHandler
	children: React.ReactNode | any
	className: string
}

const Button: FC<IButton> = ({ onClick, children, className }) => {
	return (
		<button className={className} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
