import styled from 'styled-components';

export const AboutUsStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 180px;
	padding: 0 50px;

	.image__inner {
		width: 800px;
	}

	.content__text-smaller {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		color: #525c60;
		max-width: 690px;
		margin-top: 15px;
	}

	.list {
		margin-top: 45px;
	}

	.list__item {
		display: flex;
		align-items: center;
		margin-bottom: 30px;
	}

	.link-btn {
		display: flex;
	}

	.item__description {
		margin-left: 30px;
	}

	.description__heading {
		font-family: 'Roboto-Bold';
		font-size: 25px;
		color: #274c5b;
	}

	.description__text {
		margin-top: 5px;
		font-family: 'Open Sans';
		font-size: 18px;
		color: #525c60;
		max-width: 440px;
	}

	@media (max-width: 1440px) {
		.item__description {
			margin-left: 10px;
		}
		.image__inner {
			max-width: 500px;
		}
	}

	@media (max-width: 1024px) {
		.image {
			display: none;
		}
		.list {
			margin-top: 20px;
		}
		.list__item {
			margin-bottom: 15px;
		}
	}

	@media (max-width: 768px) {
		padding: 0 30px;
		margin-bottom: 100px;
		padding: 0 30px;

		.heading {
			text-align: center;
		}

		.subtext {
			text-align: center;
		}

		.list {
			margin-bottom: 30px;
			text-align: center;
		}

		.list__item {
			text-align: center;
			justify-content: center;
		}

		.item__icon {
			display: none;
		}

		.link-btn {
			justify-content: center;
		}

		.content__text-smaller {
			text-align: center;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;
	}
`;
