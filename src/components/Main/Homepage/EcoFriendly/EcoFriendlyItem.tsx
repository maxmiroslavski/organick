import React from 'react';

export const EcoFriendlyItem = (props: { heading: string; text: string }) => {
	const { heading, text } = props;
	return (
		<li className="list__item">
			<span className="item__heading">{heading}</span>
			<p className="item__text">{text}</p>
		</li>
	);
};
