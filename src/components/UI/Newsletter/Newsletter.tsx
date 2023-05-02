import React from 'react';
import { NewsLetterStyled } from './NewsletterStyles';

export const Newsletter = () => {
	return (
		<NewsLetterStyled>
			<h2 className="title">Subscribe to our Newsletter</h2>
			<form action="" className="form">
				<input
					className="form__input"
					type="text"
					placeholder="Your Email Address"
				/>
				<button className="form__btn">Subscribe</button>
			</form>
		</NewsLetterStyled>
	);
};
