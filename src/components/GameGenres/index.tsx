import React, { FC } from "react"
import './GameGenres.scss'

type IGenre = {
   genres: string
}

const GameGenres: FC<IGenre> = ({genres}) => {
	return (
		<>
			<span className="genre">{genres}</span>
		</>
	)
}

export default GameGenres
