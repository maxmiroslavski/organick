import styled from 'styled-components';

export const AboutUsStyled = styled.div`
	margin-top: 150px;
	display: flex;
	align-items: center;

	.about-us {
		margin: 0 20px;
	}

	.image {
		width: 45%;
	}

	.image__inner {
		width: 100%;
	}

	.subheading {
		margin-bottom: 20px;
	}

	.about-us__paragraph {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
		margin-bottom: 25px;
		max-width: 680px;
	}

	.about-us__list {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 30px;
		margin-bottom: 50px;
	}

	.list__item {
		display: flex;
		align-items: center;
		max-width: 300px;
	}

	.item__text {
		margin-left: 10px;
		font-family: 'Roboto-Medium';
		font-size: 25px;
		color: #274c5b;
	}

	@media (max-width: 1024px) {
		margin-top: 80px;

		.image {
			display: none;
		}

		.about-us {
			margin: 0 20px;
		}
	}

	@media (max-width: 768px) {
		.about-us__list {
			flex-wrap: wrap;
		}
	}
`;
