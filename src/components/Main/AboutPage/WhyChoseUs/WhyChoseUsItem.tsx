import React from 'react';
import { ListItemStyled } from './WhyChoseUsStyles';

export const WhyChoseUsItem = ({
	icon,
	title,
	text,
}: {
	icon: string;
	title: string;
	text: string;
}) => {
	return (
		<ListItemStyled>
			<div className="">
				<img src={icon} alt="" />
			</div>
			<h3 className="item__heading">{title}</h3>
			<p className="item__text">{text}</p>
		</ListItemStyled>
	);
};
