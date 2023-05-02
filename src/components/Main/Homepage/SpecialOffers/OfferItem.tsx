// React
import React from 'react';

// Packages
import { Link } from 'react-router-dom';

// Components
import { OfferItemStyled, SpecialOffersStyled } from './SpecialOffersStyles';

export const OfferItem = ({
	img,
	title,
	titleColor,
	text,
	textColor,
}: {
	img: string;
	title: string;
	titleColor: string;
	text: string;
	textColor: string;
}) => {
	return (
		<Link to="/shop">
			<OfferItemStyled
				backgroundImage={img}
				titleColor={titleColor}
				textColor={textColor}
			>
				<div className="content">
					<h3 className="content__heading">{title}</h3>
					<p className="content__description">{text}</p>
				</div>
			</OfferItemStyled>
		</Link>
	);
};
