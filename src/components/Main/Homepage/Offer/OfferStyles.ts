import styled from 'styled-components';

export const OfferStyled = styled.div`
	padding: 150px 150px;
	background: #274c5b;
	min-height: 1050px;

	.description {
		margin-bottom: 50px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.description__text {
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 800;
		font-size: 50px;
		line-height: 59px;
		color: #ffffff;
		display: block;
	}

	.products {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		justify-content: center;
		gap: 20px;
	}

	@media (max-width: 1440px) {
		padding: 150px 100px;
		.description__text {
			font-size: 42px;
		}
	}

	@media (max-width: 1024px) {
		padding: 75px 20px;

		.heading {
			text-align: center;
		}

		.description {
			flex-direction: column;
			align-items: center;
		}

		.description__text {
			margin-bottom: 15px;
		}
	}

	@media (max-width: 768px) {
		.description__text {
			text-align: center;
		}
	}
`;
