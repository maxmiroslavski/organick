import styled from 'styled-components';

export const RealatedProductsStyled = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 150px;

	.products {
		padding: 0 120px;
		display: flex;
		gap: 30px;
		flex-wrap: wrap;
		justify-content: center;
		margin: 40px 0 150px;
	}

	@media (max-width: 768px) {
		.products {
			padding: 0 80px;
		}
	}

	@media (max-width: 425px) {
		.products {
			padding: 0 20px;
		}
	}
`;
