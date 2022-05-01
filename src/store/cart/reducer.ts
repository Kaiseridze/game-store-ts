import { createSlice } from '@reduxjs/toolkit'


const cartSlice = createSlice({
	name: "cart",
	initialState: {
		gamesInCart: [],
	},
	reducers: {
		setGameToCart: (state: any, action: any) => {
			state.gamesInCart.push(action.payload)
		},
		deleteGameFromCart: (state: any, action: any) => {
			state.gamesInCart = state.gamesInCart.filter(
				(game: any) => game.id !== action.payload
			)
		},
		deleteAllGame: (state: any, action: any) => {
			state.gamesInCart = []
		}
	},
})
export const { setGameToCart, deleteGameFromCart, deleteAllGame } = cartSlice.actions
export default cartSlice.reducer