import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/uiSlice';
import { motion } from 'framer-motion';
import closeIcon from '../../assets/svg/cross-small-svgrepo-com.svg';
import { Backdrop, CartStyled } from './CartStyles';
import { ListItem } from './ListItem/ListItem';
import { SubText } from '../UI/SubText';

export const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: any) => state.cart.items);

	const total = cartItems.reduce(
		(acc: any, currVal: any) => acc + currVal.totalPrice,
		0
	);

	return (
		<>
			<Backdrop onClick={() => dispatch(toggleCart())} />
			<CartStyled initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<img
					onClick={() => dispatch(toggleCart())}
					className="close-icon"
					src={closeIcon}
					alt=""
				/>
				<div className="">
					<SubText className="heading">Order</SubText>
					<div className="underline"></div>
				</div>
				<ul className="list">
					{cartItems.map((item: any, i: number) => (
						<ListItem
							key={i}
							id={item.id}
							image={item.image}
							itemAmount={item.itemAmount}
							name={item.name}
							price={item.newPrice}
							totalPrice={item.totalPrice}
						/>
					))}
				</ul>
				<div className="total-price">
					<SubText className="total-price__name">Total</SubText>
					<SubText className="total-price__name">${total}.00</SubText>
				</div>
				<motion.button
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.1 }}
					className="order__btn"
				>
					PROCEED TO CHECKOUT
				</motion.button>
			</CartStyled>
		</>
	);
};
