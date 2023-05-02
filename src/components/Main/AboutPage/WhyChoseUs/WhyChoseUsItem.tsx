import React from 'react';
import { ListItemStyled } from './WhyChoseUsStyles';
import { WhyChoseUsItemProps } from './WhyChoseUsInterface';

export const WhyChoseUsItem = ({ icon, title, text }: WhyChoseUsItemProps) => {
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
