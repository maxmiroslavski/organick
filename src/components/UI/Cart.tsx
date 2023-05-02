import React, { useEffect, useState } from 'react';
import cartIcon from '../../assets/svg/cart-icon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../../store/uiSlice';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Cart = () => {
	const [change, setChange] = useState(false);
	const dispatch = useDispatch();
	const cartAmount = useSelector((state: any) => state.cart.items);

	const itemCount = cartAmount.reduce(
		(acc: any, currVal: any) => acc + currVal.itemAmount,
		0
	);

	useEffect(() => {
		setChange(true);
		setTimeout(() => {
			setChange(false);
		}, 100);
	}, [itemCount]);

	return (
		<CartStyled
			whileHover={{ scale: 1.05 }}
			initial={{ scale: 1 }}
			animate={{ scale: change ? 1.15 : 1 }}
			transition={{ duration: 0.4, type: 'spring' }}
			onClick={() => dispatch(toggleCart())}
			className="cart__btn"
		>
			<img className="img-cart" src={cartIcon} alt="cart-icon" />
			<span className="btn__text">Cart ({itemCount})</span>
		</CartStyled>
	);
};

const CartStyled = styled(motion.button)`
	width: 160px;
	height: 65px;
	border-radius: 35px;
	background: transparent;
	border: 1px solid #e0e0e0;
	display: flex;
	align-items: center;
	padding: 5px;
	cursor: pointer;

	.img-cart {
		height: 100%;
	}

	@media (max-width: 1024px) {
		margin-right: 50px;
		width: 140px;
		height: 55px;
	}

	@media (max-width: 768px) {
		display: none;
	}

	.btn__text {
		font-family: 'Roboto-Medium';
		font-size: 18px;
		color: #274c5b;
		margin-left: 10px;
	}
`;
