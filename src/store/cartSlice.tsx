import { createSlice } from '@reduxjs/toolkit';

const updatedState =
	localStorage.getItem('cart') !== null
		? JSON.parse(localStorage.getItem('cart') || '[]')
		: [];

const initialState: { items: any[] } = {
	items: updatedState,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addItem(state, action) {
			const check = localStorage.getItem('cart');

			if (check) {
				JSON.parse(check);
			}

			const newItem = action.payload;

			const existingItem = state.items.find(
				(item) => item.id === newItem.id
			);

			if (!existingItem) {
				state.items.push({
					image: newItem.image,
					itemAmount: newItem.itemAmountNum,
					id: newItem.id,
					name: newItem.name,
					price: newItem.newPrice,
					totalPrice: newItem.newPrice * newItem.itemAmountNum,
				});
			} else {
				existingItem.itemAmount += newItem.itemAmountNum;
				existingItem.totalPrice =
					existingItem.price * existingItem.itemAmount;
			}

			localStorage.setItem('cart', JSON.stringify(state.items));
		},
		removeItem(state, action) {
			const id = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem.itemAmount === 1) {
				state.items = state.items.filter((item) => item.id !== id);
			} else {
				existingItem.itemAmount--;
				existingItem.totalPrice =
					existingItem.totalPrice - existingItem.price;
			}
			localStorage.setItem('cart', JSON.stringify(state.items));
		},

		removeAllItems(state, action) {
			const id = action.payload;
			state.items = state.items.filter((item) => item.id !== id);
			localStorage.setItem('cart', JSON.stringify(state.items));
		},
	},
});

const { addItem, removeItem, removeAllItems } = cartSlice.actions;

export { cartSlice, addItem, removeItem, removeAllItems };
