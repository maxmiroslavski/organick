import styled from 'styled-components';
import ecoFriendly from '../../../../assets/img/eco-friendly-image.jpg';

export const EcoFriendlyStyled = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	.content {
		position: absolute;
		padding: 80px;
		left: 880px;
		background: #fff;
		border-radius: 25px;
		min-width: 800px;
	}

	.image {
		background: url(${ecoFriendly}) no-repeat center center/cover;
		height: 1000px;
		width: 1000px;
	}

	.content__heading {
		max-width: 500px;
	}

	.content__list {
		margin-top: 35px;
		display: flex;
		flex-direction: column;
		gap: 35px;
	}

	.item__heading {
		font-family: 'Roboto-Medium';
		font-size: 25px;
		color: #274c5b;
	}

	.item__text {
		font-family: 'Open Sans';
		font-size: 18px;
		color: #525c60;
		line-height: 150%;
		max-width: 650px;
		margin-top: 5px;
	}

	@media (max-width: 1440px) {
		.content {
			padding: 50px;
			transform: translate(-50%, -50%);
			left: 50%;
			top: 50%;
		}

		.image {
			height: 800px;
			width: 100%;
		}

		.content__list {
			margin-top: 20px;
			gap: 20px;
		}
	}

	@media (max-width: 1024px) {
		.content {
			min-width: 700px;
		}

		.image {
			width: 100%;
		}
	}

	@media (max-width: 768px) {
		.content {
			min-width: 100%;
			padding: 30px;
			border-radius: 0;
		}

		.content__list {
			gap: 10px;
		}

		.image {
			height: 850px;
		}
	}

	@media (max-width: 425px) {
		height: 1000px;
	}
`;
