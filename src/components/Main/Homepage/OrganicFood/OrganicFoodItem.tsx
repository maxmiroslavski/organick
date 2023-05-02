import React from 'react';
import { OrganicFoodItemStyled } from './OrganicFoodStyles';
import { OrganicFoodItemProps } from './OrganicFood';

export const OrganicFoodItem = ({
	background,
	title,
}: OrganicFoodItemProps) => {
	return (
		<OrganicFoodItemStyled background={background}>
			<div className="item__title">
				<span className="title__text">{title}</span>
			</div>
		</OrganicFoodItemStyled>
	);
};
