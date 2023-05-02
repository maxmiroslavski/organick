import styled from 'styled-components';

export const ShopPageSingleProductStyled = styled.div.attrs(
	(props: { background: string }) => props.background
)`
	padding: 0 200px;
	margin: 50px 0;

	.product {
		display: flex;
		gap: 80px;
		align-items: center;
	}

	.product__image {
		background: url(${(props) => props.background}) no-repeat center
			center/cover;
		height: 500px;
		min-width: 500px;
		border-radius: 25px;
		padding: 30px;
		display: flex;
	}

	.image__category {
		align-self: flex-start;
		background: #274c5b;
		padding: 7px 15px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		text-align: center;
		border-radius: 10px;
		color: #ffffff;
	}

	.desription__heading {
		font-family: 'Roboto-Bold';
		font-size: 40px;
		color: #274c5b;
	}

	.description__stars {
		margin-top: 10px;
		display: flex;
		gap: 2px;
	}

	.description__price {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-top: 10px;
	}

	.price__old {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		text-align: center;
		text-decoration: line-through;
		color: #b8b8b8;
	}

	.price__new {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 25px;
		text-align: center;
		color: #274c5b;
	}

	.description__paragraph {
		margin-top: 25px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 165.4%;
		color: #525c60;
	}

	.description__actions {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-top: 35px;
	}

	.actions__quantity {
		font-family: 'Roboto-Bold';
		font-size: 20px;
		color: #274c5b;
	}

	.actions__form {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.form__input {
		padding: 25px;
		padding-left: 30px;
		width: 125px;
		outline: none;
		border-radius: 20px;
		text-align: center;
		border: 2px solid #274c5b;
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 700;
		font-size: 20px;
		color: #274c5b;
	}

	.actions {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 20px;
		margin-top: 90px;
	}

	.actions__btn {
		padding: 25px 60px;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 25px;
		line-height: 34px;
		text-align: center;
		background: #eff6f1;
		border: none;
		outline: none;
		border-radius: 25px;
		color: #274c5b;
		cursor: pointer;
	}

	.actions-active {
		color: #ffffff;
		background: #274c5b;
	}

	.additional-description__paragraph {
		margin-top: 30px;
		text-align: center;
	}

	@media (max-width: 1440px) {
		padding: 0 50px;

		.product {
			gap: 40px;
		}

		.product__image {
			min-width: 400px;
		}

		.desription__heading {
			font-size: 36px;
		}

		.description__paragraph {
			font-size: 16px;
		}

		.price__old {
			font-size: 18px;
		}

		.price__new {
			font-size: 22px;
		}
	}

	@media (max-width: 1024px) {
		.product__image {
			min-width: 300px;
		}
		.description__actions {
			flex-wrap: wrap;
		}
		.actions__form {
			flex-wrap: wrap;
		}
	}

	@media (max-width: 768px) {
		padding: 0 30px;

		.product {
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		.product__image {
			min-width: 400px;
			max-height: 400px;
			align-self: flex-start;
		}

		.actions {
			justify-content: flex-start;
		}

		.actions__btn {
			padding: 25px 30px;
			font-size: 20px;
		}

		.actions-active {
			color: #ffffff;
			background: #274c5b;
		}

		.paragraph {
			font-size: 16px;
			text-align: left;
		}
	}

	@media (max-width: 425px) {
		padding: 0 20px;

		.actions {
			margin-top: 60px;
			flex-wrap: wrap;
		}

		.actions__btn {
			width: 100%;
		}

		.product__image {
			min-width: 250px;
			max-height: 250px;
		}
		.form__input {
			padding: 22px;
			width: 100px;
		}
	}
`;
