import styled from 'styled-components';
import greenBackground from '../../../../assets/img/contact/contactLocationGreenBackground.jpg';

export const LocationStyled = styled.div`
	margin: 0 260px;
	margin-bottom: 80px;
	background: url(${greenBackground}) no-repeat center center/cover;
	min-height: 750px;
	border-radius: 25px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	/* padding: 0 100px; */

	.info {
		background: #fff;
		max-width: 500px;
		padding: 45px;
		margin-right: 100px;
		border-radius: 25px;
	}

	.info__text {
		margin-top: 20px;
	}

	.list__item {
		display: flex;
		align-items: center;
	}

	.info__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.location__city {
		font-family: 'Open Sans';
		font-weight: 700;
		font-size: 18px;

		color: #525c60;
	}

	.item__location {
		margin-left: 10px;
	}

	@media (max-width: 1440px) {
		margin: 0 60px;
	}

	@media (max-width: 1024px) {
		justify-content: center;

		.info {
			padding: 30px;
			max-width: 500px;
			margin-right: 0px;
		}
	}

	@media (max-width: 768px) {
		margin: 0 20px;
		.info {
			width: 100%;
			margin: 25px;
		}
	}

	@media (max-width: 425px) {
		width: 100%;
		margin: 0;
		border-radius: 0;
		.info {
			padding: 20px;
			border-radius: 0;
			margin: 0;
			width: 100%;
		}
	}
`;
