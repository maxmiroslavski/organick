import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CartStyled = styled(motion.div)`
	min-width: 700px;
	height: 700px;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 30;
	padding: 40px;
	background: #fff;
	display: flex;
	flex-direction: column;
	border-radius: 25px;
	z-index: 65;

	.heading {
		font-size: 30px;
		margin-bottom: 10px;
	}

	.close-icon {
		position: absolute;
		width: 60px;
		height: 60px;
		top: 10px;
		right: 10px;
		cursor: pointer;
	}

	.underline {
		border-bottom: 1px solid #929799;
	}

	.item__imgage {
		height: 125px;
		width: 125px;
	}

	.list {
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		height: 100%;
		padding-right: 20px;
	}

	.total-price__name {
		font-size: 26px;
	}

	.total-price {
		margin-top: 40px;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.order__btn {
		margin-top: 30px;
		background: #274c5b;
		padding: 20px;
		outline: none;
		border: none;
		color: #fff;
		font-family: 'Roboto-Medium';
		font-size: 22px;
		cursor: pointer;
	}

	@media (max-width: 768px) {
		height: 80%;
		min-width: 100%;
		border-radius: 0;
		padding: 25px;

		.list {
			padding-right: 10px;
		}
	}
`;

export const Backdrop = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 60;
	background: rgba(0, 0, 0, 0.75);
`;
