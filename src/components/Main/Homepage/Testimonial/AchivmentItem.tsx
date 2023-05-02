import React from 'react';
import { AchivmentItemProps } from './TestimonialInterface';

export const AchivmentItem = ({ number, comment }: AchivmentItemProps) => {
	return (
		<div className="achivments__item">
			<span className="item__number">{number}</span>
			<span className="item__comment">{comment}</span>
		</div>
	);
};
