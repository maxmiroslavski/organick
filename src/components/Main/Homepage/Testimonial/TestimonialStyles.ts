import styled from 'styled-components';

import background from '../../../../assets/img/testimonial.jpg';

export const TestimonialStyled = styled.div`
	background: url(${background}) no-repeat center;
	min-height: 1000px;
	padding: 20px 40px;

	.heading {
		text-align: center;
	}

	.subheading {
		text-align: center;
	}

	.paragraph {
		text-align: center;
		max-width: 1000px;
	}

	.customer {
		margin-top: 60px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.customer__rating {
		margin-top: 20px;
	}

	.rating__star {
		width: 25px;
	}

	.customer__comment {
		margin-top: 25px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
		width: 780px;
		text-align: center;
	}

	.customer__name {
		margin-top: 20px;
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 600;
		font-size: 25px;
		line-height: 29px;
		color: #274c5b;
	}

	.customer__role {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 15px;
		line-height: 165.4%;
		color: #525c60;
	}

	.border {
		margin: 100px 0;
		border-bottom: 1px solid #e0e0e0;
		width: 100%;
	}

	.achivments {
		display: flex;
		justify-content: center;
		gap: 20px;
	}

	.achivments__item {
		border: 5px solid #7eb693;
		background: #f1f1f1;
		height: 210px;
		width: 210px;
		border-radius: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.item__number {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 50px;
		color: #274c5b;
	}

	.item__comment {
		font-family: 'Open Sans';
		font-weight: 600;
		font-size: 18px;
		color: #274c5b;
	}

	@media (max-width: 1440px) {
		min-height: 800px;

		.border {
			margin: 50px 0;
		}

		.achivments__item {
			transform: scale(0.8);
			height: 190px;
			width: 190px;
		}

		.item__number {
			font-size: 42px;
		}

		.item__comment {
			font-size: 16px;
		}
	}

	@media (max-width: 1024px) {
		.achivments__item {
			height: 160px;
			width: 160px;
		}

		.item__number {
			font-size: 36px;
		}
	}

	@media (max-width: 768px) {
		.border {
			margin: 25px 0;
		}

		.achivments {
			flex-wrap: wrap;
			margin-top: 25px;
			gap: 0;
		}
	}
`;
