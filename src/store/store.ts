import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cart/reducer'
import gameReducer from './game/reducer'

export const store = configureStore({
	reducer: {
		games: cartReducer,
		gameDesc: gameReducer,
	},
})

export type typeRootState = ReturnType<typeof store.getState>