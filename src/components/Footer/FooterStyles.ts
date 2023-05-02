import styled from 'styled-components';

export const FooterStyled = styled.div`
	margin: 110px 0 70px;
	display: flex;
	justify-content: center;

	.left-block {
		text-align: right;
		min-width: 250px;
	}

	.left-block__heading {
		font-family: 'Roboto-Medium';
		font-weight: 700;
		font-size: 30px;
		color: #274c5b;
	}

	.left-block__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	.list__item {
		display: flex;
		flex-direction: column;
	}

	.item__contact {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 700;
		font-size: 18px;
		color: #525c60;
	}

	.item__info {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 200;
		font-size: 18px;
		color: #525c60;
	}

	.center-block {
		padding: 0 60px;
		margin: 0 50px;
		display: flex;
		flex-direction: column;
		align-items: center;
		border-left: 1px solid #d5d5d5;
		border-right: 1px solid #d5d5d5;
	}

	.center-block__heading {
		display: flex;
		align-items: center;
		font-family: 'Roboto-Bold';
		font-size: 28px;
		color: #274c5b;
	}

	.heading__text {
		margin-left: 10px;
		max-width: 500px;
	}

	.center-block__paragraph {
		margin-top: 15px;
		max-width: 540px;
		text-align: center;
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		line-height: 150%;
		text-align: center;
		color: #525c60;
	}

	.right-block {
		text-align: left;
		min-width: 240px;
	}

	.right-block__list {
		margin-top: 30px;
		display: flex;
		flex-direction: column;
		gap: 25px;
	}

	.list__item--link {
		font-family: 'Open Sans';
		font-style: normal;
		font-weight: 400;
		font-size: 18px;
		color: #525c60;
	}

	.center-block__icons {
		margin-top: 50px;
		display: flex;
		gap: 15px;
	}

	.icons__item {
		cursor: pointer;
	}

	@media (max-width: 1440px) {
		margin: 110px 0 30px;

		.center-block {
			padding: 0 20px;
			margin: 0 20px;
		}

		.center-block__paragraph {
			max-width: 450px;
		}
	}

	@media (max-width: 1024px) {
		margin: 60px 0 30px;
		flex-direction: column;
		gap: 45px;

		.left-block {
			text-align: center;
			order: 3;
		}

		.left-block__list {
			margin-top: 15px;
		}

		.center-block__icons {
			margin-top: 25px;
		}

		.center-block {
			border: none;
		}

		.right-block {
			text-align: center;
			order: 3;
		}

		.right-block__list {
			margin-top: 15px;
		}
	}

	@media (max-width: 375px) {
		.center-block__icons {
			flex-wrap: wrap;
			justify-content: center;
		}

		.heading__text {
			font-size: 30px;
		}
	}
`;
