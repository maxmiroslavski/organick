import styled from 'styled-components';

export const NewsStyled = styled.div`
	padding: 0 150px;
	margin: 180px 0 200px;

	.description {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
	}

	.subtext {
		max-width: 800px;
		margin-right: 15px;
	}

	.news {
		margin-top: 50px;
		display: flex;
		justify-content: center;
		gap: 45px;
		flex-wrap: wrap;
	}

	@media (max-width: 1440px) {
		padding: 0 120px;
		margin: 100px 0 100px;
	}

	@media (max-width: 1024px) {
		padding: 0 60px;
		margin: 100px 0;

		.description {
			flex-direction: column;
			align-items: flex-start;
		}

		.subtext {
			display: block;
			margin: 10px 0 15px;
			margin-right: 20px;
		}
	}

	@media (max-width: 768px) {
		padding: 0 20px;
		margin: 50px 0;
	}
`;
