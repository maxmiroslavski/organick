import styled from 'styled-components';

export const HeaderResponsiveStyled = styled.div`
	display: none;
	padding: 15px 30px;
	position: relative;

	.burger-menu {
		border: none;
		background: none;
		outline: none;
		z-index: 10;
		cursor: pointer;
		z-index: 60;
	}

	.burger-menu__icon {
		width: 50px;
		height: 50px;
	}

	.menu {
		position: absolute;
		height: 100vh;
		width: 350px;
		background: #e0e0e0;
		top: 0;
		right: 0;
		z-index: 10;
	}

	.menu__list {
		margin-top: 80px;
		margin-left: 30px;
	}

	.list__item {
		font-family: 'Roboto-Medium';
		font-size: 28px;
		color: #274c5b;
		cursor: pointer;
		padding: 10px 0;
	}

	.item__link {
		color: #274c5b;
	}

	@media (max-width: 1024px) {
		display: block;
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: space-between;
		padding: 15px 15px;
	}

	@media (max-width: 425px) {
		.menu {
			width: 100%;
		}

		.menu__list {
			margin-left: 0px;

			text-align: center;
		}

		.burger-menu__icon {
			width: 45px;
			height: 45px;
		}

		.list__item {
			font-size: 32px;
			padding: 15px 0;
		}
	}

	@media (max-width: 375px) {
		.burger-menu__icon {
			width: 40px;
			height: 40px;
		}
	}
`;
