import styled from 'styled-components';

export const NewsItemStyled = styled.div.attrs(
	(props: { backgroundImage: string }) => props.backgroundImage
)`
	background: url(${(props) => props.backgroundImage}) no-repeat center/cover;
	min-height: 600px;
	max-width: 700px;
	padding: 30px;
	border-radius: 25px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.item__date {
		background: #fff;
		width: 80px;
		height: 80px;
		border-radius: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-family: 'Roboto-Medium';
		font-style: normal;
		font-weight: 800;
		font-size: 20px;
		color: #274c5b;
	}

	.item__content {
		padding: 50px;
		background: #fff;
		border-radius: 25px;
	}

	.author__name {
		margin-left: 5px;
		font-family: 'Roboto-Medium';
		font-size: 18px;
		color: #274c5b;
	}

	.content__title {
		font-family: 'Roboto-Bold';
		font-size: 25px;
		color: #274c5b;
		margin-top: 15px;
	}

	.content__text {
		margin: 5px 0 20px;
		font-family: 'Open Sans';
		font-size: 18px;
		line-height: 140%;
		color: #525c60;
	}

	@media (max-width: 1024px) {
		padding: 20px;
		min-height: 500px;

		.item__content {
			padding: 35px;
		}
	}

	@media (max-width: 768px) {
		min-height: 425px;
		width: 100%;

		.content__title {
			margin-bottom: 25px;
		}

		.content__text {
			display: none;
		}
	}
`;
