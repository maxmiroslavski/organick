import React from 'react';
import ecoFriendly from '../../../../assets/img/eco-friendly-image.jpg';
import { EcoFriendlyStyled } from './EcoFriendlyStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { EcoFriendlyItem } from './EcoFriendlyItem';
import { ecoFriendlyData } from '../../../../data/homepage/ecoFriendlyData';

export const EcoFriendly = () => {
	return (
		<EcoFriendlyStyled>
			<div className="image"></div>
			<div className="content">
				<GreenHeading>Eco Friendly</GreenHeading>

				<SubText className="content__heading">
					Econis is a Friendly Organic Store
				</SubText>

				<ul className="content__list">
					{ecoFriendlyData.map((item, i) => (
						<EcoFriendlyItem
							key={i}
							text={item.text}
							heading={item.heading}
						/>
					))}
				</ul>
			</div>
		</EcoFriendlyStyled>
	);
};
