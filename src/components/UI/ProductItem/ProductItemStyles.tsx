import styled from 'styled-components';

export const ProductItemStyled = styled.div.attrs(
	(props: { background: string }) => ({
		background: props.background,
	})
)`
	background: #f9f8f8 url(${(props) => props.background}) no-repeat center
		center;
	min-width: 330px;
	border-radius: 30px;
	min-height: 480px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-size: 100%;
	transition: 0.25s;
	cursor: pointer;

	:hover {
		background-size: 105%;
	}

	.item__image {
		height: 320px;
		margin-top: 10px;
	}

	.item__category {
		align-self: flex-start;
		padding: 5px 15px;
		background: #274c5b;
		color: #fff;
		font-family: 'Open Sans';
		font-weight: 600;
		font-size: 15px;
		text-align: center;
		border-radius: 10px;
		margin: 25px 0 0 25px;
	}

	.item__description {
		padding: 0 30px 20px;
	}

	.description__name {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 600;
		font-size: 20px;
		line-height: 23px;
		color: #274c5b;
	}

	.description__border {
		margin: 10px 0px 5px;
		border-bottom: 1px solid #dedddd;
	}

	.description__price {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.price__info {
		display: flex;
		align-items: center;
	}

	.info__old-price {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 600;
		font-size: 15px;
		line-height: 20px;
		text-align: center;
		color: #b8b8b8;
		text-decoration: line-through;
	}

	.info__new-price {
		font-family: 'Open Sans';
		font-weight: 700;
		font-size: 18px;
		color: #274c5b;
		margin-left: 10px;
	}

	@media (max-width: 425px) {
		min-width: 300px;
		min-height: 440px;

		.info__old-price {
			font-size: 14px;
		}

		.info__new-price {
			margin-left: 5px;
			font-size: 16px;
		}
	}
`;
