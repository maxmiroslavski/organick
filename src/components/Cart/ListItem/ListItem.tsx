import React from 'react';
import { ListItemStyled } from './ListItemStyles';
import plusIcon from '../../../assets/svg/plusIcon.svg';
import minusIcon from '../../../assets/svg/minusIcon.svg';
import { SubText } from '../../UI/SubText';
import { useDispatch } from 'react-redux';
import { addItem, removeAllItems, removeItem } from '../../../store/cartSlice';
import deleteCart from '../../../assets/svg/trash-svgrepo-com.svg';
import { motion } from 'framer-motion';

export const ListItem = ({
	id,
	image,
	itemAmount,
	name,
	price,
	totalPrice,
}: {
	id: string;
	image: string;
	itemAmount: number;
	name: string;
	price: number;
	totalPrice: string;
}) => {
	const dispatch = useDispatch();
	return (
		<ListItemStyled background={image}>
			<div className="item__description">
				<div className="description__image"></div>
				<SubText className="description__name">{name}</SubText>
			</div>
			<div className="right">
				<div className="actions">
					<motion.button
						whileTap={{ scale: 0.7 }}
						whileHover={{ scale: 1.1 }}
						className="actions__btn"
						onClick={() => dispatch(removeItem(id))}
					>
						<img src={minusIcon} alt="" />
					</motion.button>
					<div className="actions__count">{itemAmount}</div>
					<motion.button
						whileTap={{ scale: 0.7 }}
						whileHover={{ scale: 1.1 }}
						onClick={() =>
							dispatch(addItem({ id, itemAmountNum: 1 }))
						}
						className="actions__btn"
					>
						<img src={plusIcon} alt="" />
					</motion.button>
				</div>
				<span className="right__amount">${totalPrice}.00</span>
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={() => dispatch(removeAllItems(id))}
					className="rigtn__remove-btn"
				>
					<img className="remove-all__icon" src={deleteCart} alt="" />
				</motion.button>
			</div>
		</ListItemStyled>
	);
};
