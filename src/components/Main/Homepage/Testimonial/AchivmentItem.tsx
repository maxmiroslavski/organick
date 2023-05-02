import React from 'react';

export const AchivmentItem = (props: { number: string; comment: string }) => {
	const { number, comment } = props;
	return (
		<div className="achivments__item">
			<span className="item__number">{number}</span>
			<span className="item__comment">{comment}</span>
		</div>
	);
};
