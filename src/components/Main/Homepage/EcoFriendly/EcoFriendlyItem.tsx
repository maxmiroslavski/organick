import React from 'react';
import { EcoFriendlyItemProps } from './EcoFriendlyInterface';

export const EcoFriendlyItem = ({ heading, text }: EcoFriendlyItemProps) => {
	return (
		<li className="list__item">
			<span className="item__heading">{heading}</span>
			<p className="item__text">{text}</p>
		</li>
	);
};
