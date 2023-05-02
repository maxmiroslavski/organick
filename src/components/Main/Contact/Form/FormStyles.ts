import styled from 'styled-components';

export const FormStyled = styled.form`
	margin: 100px 0 120px;
	padding: 0 450px;
	display: flex;
	gap: 45px;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	.form__element {
		display: flex;
		flex-direction: column;
		position: relative;
	}

	.element__input {
		width: 100%;
		padding: 20px;
		margin-top: 15px;
		font-family: 'Roboto-Medium';
		font-weight: 400;
		font-size: 22px;
		outline: none;
		color: #274c5b;
		border: 1px solid #ababab;
		border-radius: 15px;
	}

	.element__input::placeholder {
		color: #ababab;

		font-style: italic;
	}

	.message__text {
		margin-top: 15px;
		font-family: 'Roboto-Medium';
		font-weight: 400;
		font-size: 22px;
		outline: none;
		color: #274c5b;
		border: 1px solid #ababab;
		border-radius: 15px;
		padding: 20px;
		height: 300px;
	}

	.message__text::placeholder {
		color: #ababab;

		font-style: italic;
	}

	.element__label {
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 100;
		font-size: 18px;
		line-height: 21px;
		color: #274c5b;
	}

	.form__message {
		display: flex;
		flex-direction: column;
		width: 100%;
		position: relative;
	}

	.message__text {
		width: 100%;
	}

	.form__btn {
		padding: 30px 20px;
		font-family: 'Roboto-Medium';
		background: #274c5b;
		font-size: 18px;
		color: #fff;
		min-width: 250px;
		align-self: flex-start;
		text-align: center;
		border: none;
		outline: none;
		border-radius: 20px;
		margin-left: 5px;
		cursor: pointer;
	}

	.element__error {
		position: absolute;
		color: #ff7373;
		bottom: -25px;
		left: 0;
	}

	@media (max-width: 1440px) {
		padding: 0 200px;
	}

	@media (max-width: 1024px) {
		padding: 0 100px;
	}

	@media (max-width: 768px) {
		padding: 0 30px;
		.element__input {
			padding: 20px 15px;
			font-size: 20px;
		}

		.form__btn {
			align-self: center;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;

		.element__input {
			padding: 18px 15px;
			margin-top: 10px;
			font-size: 18px;
		}
	}
`;
