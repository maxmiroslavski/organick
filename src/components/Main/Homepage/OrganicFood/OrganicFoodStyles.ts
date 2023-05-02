import styled from 'styled-components';

export const OrganicFoodStyled = styled.div`
	background: #f1f8f4;
	padding: 180px 0;
	display: flex;
	justify-content: center;
	gap: 40px;
	flex-wrap: wrap;
	align-items: center;

	@media (max-width: 1024px) {
		padding: 100px 0;
	}
`;

export const OrganicFoodItemStyled = styled.div.attrs(
	(props: { background: string }) => props.background
)`
	background: url(${(props) => props.background}) no-repeat center center;
	width: 600px;
	height: 600px;

	display: flex;
	justify-content: center;
	align-items: center;

	.item__title {
		width: 250px;
		border-radius: 20px;
		padding: 30px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: #fff;

		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 500;
		font-size: 25px;
		line-height: 29px;

		color: #274c5b;
	}

	@media (max-width: 1440px) {
		width: 500px;
		height: 500px;
	}

	@media (max-width: 425px) {
		width: 400px;
		height: 400px;
	}
`;
