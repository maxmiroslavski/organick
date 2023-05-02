// React
import React from 'react';

// Components
import { OrganicFoodStyled } from './OrganicFoodStyles';
import { OrganicFoodItem } from './OrganicFoodItem';

// Data
import { organicFoodData } from '../../../../data/homepage/organicFoodData';

export const OrganicFood = () => {
	return (
		<OrganicFoodStyled>
			{organicFoodData.map((item, i) => (
				<OrganicFoodItem
					key={i}
					background={item.image}
					title={item.title}
				/>
			))}
		</OrganicFoodStyled>
	);
};
