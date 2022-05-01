import React, { FC } from "react"
import './Badge.scss'

type TBadge = {
	quantity: number
}

const Badge: FC<TBadge> = ({ quantity }) => {
	return <>{quantity ? <span className="badge">{quantity}</span> : null}</>
}

export default Badge
