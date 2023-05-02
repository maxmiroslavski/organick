import styled from 'styled-components';

export const CategoriesStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 200px;

	.products {
		margin: 40px 0 120px;
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0 200px;
	}

	@media (max-width: 1440px) {
		.products {
			padding: 0 100px;
		}
	}

	@media (max-width: 1024px) {
		margin: 30px 0 20px;
		.products {
			padding: 0 30px;
			margin: 40px 0 60px;
		}
	}

	@media (max-width: 768px) {
		margin-bottom: 100px;
	}

	@media (max-width: 425px) {
		padding: 0 10px;
	}
`;
