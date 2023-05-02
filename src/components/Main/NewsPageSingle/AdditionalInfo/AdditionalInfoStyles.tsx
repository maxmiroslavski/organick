import styled from 'styled-components';

export const AdditionalInfoStyled = styled.div`
	padding: 0 200px;

	.heading {
		margin: 25px 0 35px;
	}

	.list {
		margin-top: 30px;
		list-style: disc;
		color: #525c60;
		margin-left: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.subheading {
		margin: 50px 0 20px;
		font-size: 35px;
	}

	.numeric {
		list-style: decimal;
		margin-bottom: 100px;
	}

	@media (max-width: 1024px) {
		padding: 0 150px;
	}

	@media (max-width: 768px) {
		padding: 0 50px;
	}

	@media (max-width: 425px) {
		padding: 0 20px;
	}
`;
