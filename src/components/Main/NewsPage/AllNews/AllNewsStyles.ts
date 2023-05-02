import styled from 'styled-components';

export const AllNewsStyled = styled.div`
	margin-top: 50px;
	display: flex;
	justify-content: center;
	gap: 45px;
	padding: 160px;
	flex-wrap: wrap;

	@media (max-width: 1440px) {
		padding: 0 120px;
		margin: 100px 0 100px;
	}

	@media (max-width: 1024px) {
		padding: 0 60px;
		margin: 100px 0;
	}

	@media (max-width: 768px) {
		padding: 0 20px;
		margin: 50px 0;
	}
`;
