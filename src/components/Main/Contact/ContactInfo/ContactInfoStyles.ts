import styled from 'styled-components';

export const ContactInfoStyled = styled.div`
	padding: 0 260px;
	margin: 200px 0 100px;
	display: flex;
	align-items: center;
	gap: 75px;

	.banner-image {
		min-width: 500px;
	}

	.banner-image__inner {
		border-radius: 25px;
		width: 100%;
	}

	.description__paragraph {
		margin-top: 15px;
	}

	.description__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	.list__item {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.item__info {
		display: flex;
		flex-direction: column;
	}

	.info__name {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 25px;

		color: #274c5b;
	}

	.info__data {
		font-family: 'Open Sans';
		font-size: 18px;
		color: #525c60;
	}

	.description__social-media {
		margin-top: 30px;
		display: flex;
		gap: 15px;
	}

	@media (max-width: 1440px) {
		padding: 70px;
		margin: 150px 0 100px;

		.banner-image {
			min-width: 400px;
		}
	}

	@media (max-width: 1024px) {
		margin: 75px 0 50px;
		padding: 50px;
		.banner-image {
			display: none;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;
		.item__icon {
			width: 80px;
		}
		.info__name {
			font-size: 22px;
		}

		.info__data {
			font-size: 16px;
		}
	}

	@media (max-width: 375px) {
		.item__icon {
			width: 60px;
		}
	}
`;
