import styled from 'styled-components';

export const WhyChoseUsStyled = styled.div`
	background: #f9f8f8;
	padding: 190px 200px;
	margin-top: 50px;

	.banner-section {
		display: flex;
		align-items: center;
	}

	.greens-image {
		width: 1500px;
	}

	.image {
		width: 100%;
	}

	.description {
		margin-right: 50px;
	}

	.description__paragraph {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
		margin: 25px 0;
	}

	.description__list {
		display: flex;
		flex-direction: column;
		align-items: start;
	}

	.list__item {
		display: flex;
		align-items: center;
		margin-bottom: 40px;
		min-width: 300px;
		padding: 20px 30px;
		background: #ececec;
		border-radius: 30px;

		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 500;
		font-size: 20px;
		line-height: 23px;

		color: #274c5b;
	}

	.item__text {
		margin-left: 5px;
	}

	.image {
		border-radius: 20px;
	}

	.achivments {
		margin-top: 90px;
	}

	.achivments__list {
		display: flex;
		align-items: center;
		gap: 25px;
		justify-content: center;
	}

	@media (max-width: 1440px) {
		padding: 100px 50px;
	}

	@media (max-width: 1024px) {
		.greens-image {
			display: none;
		}

		.achivments {
			margin-top: 30px;
		}

		.achivments__list {
			flex-wrap: wrap;
		}
	}

	@media (max-width: 768px) {
		padding: 100px 25px;
	}

	@media (max-width: 425px) {
		.list__item {
			min-width: 100%;
			padding: 20px 20px;
		}
	}
`;

export const ListItemStyled = styled.li`
	background: #fff;
	width: 250px;
	height: 330px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border-radius: 25px;
	padding: 0 25px;

	.item__heading {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 25px;
		line-height: 29px;
		margin-top: 10px;
		color: #274c5b;
	}

	.item__text {
		margin-top: 15px;
		text-align: center;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		/* or 30px */

		text-align: center;

		color: #525c60;
	}
`;
