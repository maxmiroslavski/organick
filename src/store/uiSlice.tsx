import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isShown: false,
};

const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleCart(state) {
			state.isShown = !state.isShown;
		},
	},
});

const { toggleCart } = uiSlice.actions;

export { uiSlice, toggleCart };
