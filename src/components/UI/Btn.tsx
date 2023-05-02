import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import rightArrowIcon from '../../assets/svg/btn-arrow-icon.svg';

export const Btn = (props: {
	children: string;
	backgroundColor: string;
	textColor: string;
	padding?: string;
	border?: string;
	onClick?: (e: any) => void;
}) => {
	const { children, backgroundColor, textColor, padding, border, onClick } =
		props;
	return (
		<YellowButtonStyled
			whileTap={{ scale: 0.9 }}
			whileHover={{ scale: 1.05 }}
			backgroundColor={backgroundColor}
			textColor={textColor}
			padding={padding}
			border={border}
			onClick={onClick}
		>
			{children}
			<img className="btn__arrow-icon" src={rightArrowIcon} alt="" />
		</YellowButtonStyled>
	);
};

interface StyledProps {
	backgroundColor: string;
	textColor: string;
	padding?: string;
	border?: string;
}

const YellowButtonStyled = styled(motion.button).attrs(
	(props: StyledProps) => ({
		backgroundColor: props.backgroundColor,
		textColor: props.textColor,
		padding: props.padding,
		border: props.border,
	})
)`
	padding: ${(props) => (props.padding ? props.padding : '10px 10px')};
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto-Bold';
	font-weight: 700;
	font-size: 20px;
	color: ${(props) => props.textColor};
	background: ${(props) => props.backgroundColor};
	border: ${(props) => (props.border ? props.border : 'none')};
	border-radius: 15px;
	cursor: pointer;

	@media (max-width: 1024px) {
		padding: 25px 20px;
	}

	@media (max-width: 425px) {
		padding: 25px 20px;
		font-size: 16px;
	}

	.btn__arrow-icon {
		margin-left: 10px;
	}
`;
