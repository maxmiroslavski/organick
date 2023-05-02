import styled from 'styled-components';
import backgroundImage from '../../../assets/img/newsletter-background.jpg';

export const NewsLetterStyled = styled.div`
	padding: 100px 70px;
	height: 320px;
	margin: 0 150px;
	background: url(${backgroundImage}) no-repeat center center/cover;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-radius: 25px;

	.title {
		font-family: 'Roboto-Medium';
		font-size: 50px;
		max-width: 360px;
		color: #ffffff;
	}

	.form__input {
		padding: 30px 20px;
		font-family: 'Roboto-Medium';
		font-size: 18px;
		min-width: 350px;
		border: none;
		outline: none;
		border-radius: 20px;
		color: #274c5b;
	}

	.form__input::placeholder {
		color: #ababab;
		font-style: italic;
	}

	.form__btn {
		padding: 30px 20px;
		font-family: 'Roboto-Medium';
		background: #274c5b;
		font-size: 18px;
		color: #fff;
		min-width: 220px;
		border: none;
		outline: none;
		border-radius: 20px;
		margin-left: 5px;
		cursor: pointer;
	}

	@media (max-width: 1440px) {
		height: 225px;
		padding: 80px 30px;

		.title {
			max-width: 250px;
			font-size: 36px;
		}

		.form__btn {
			min-width: 125px;
			font-size: 16px;
			border-radius: 10px;
			padding: 20px 10px;
		}

		.form__input {
			min-width: 250px;
			font-size: 16px;
			border-radius: 10px;
			padding: 20px 15px;
		}
	}

	@media (max-width: 1024px) {
		flex-direction: column;
		height: 100%;

		.title {
			text-align: center;
			margin-bottom: 20px;
		}

		.form {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}

		.form__btn {
			width: 100%;
			margin-left: 0;
		}

		.form__input {
			min-width: 300px;
		}
	}

	@media (max-width: 768px) {
		margin: 0 20px;
	}

	@media (max-width: 425px) {
		padding: 50px 20px;
	}

	@media (max-width: 375px) {
		.form__input {
			min-width: 100%;
		}
	}
`;
