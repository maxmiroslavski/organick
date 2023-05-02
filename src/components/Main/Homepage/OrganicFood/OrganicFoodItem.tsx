import React from 'react';
import { OrganicFoodItemStyled } from './OrganicFoodStyles';

export const OrganicFoodItem = ({
	background,
	title,
}: {
	background: string;
	title: string;
}) => {
	return (
		<OrganicFoodItemStyled background={background}>
			<div className="item__title">
				<span className="title__text">{title}</span>
			</div>
		</OrganicFoodItemStyled>
	);
};
