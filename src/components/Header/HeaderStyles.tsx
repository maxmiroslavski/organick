import styled from 'styled-components';

export const HeaderStyled = styled.header`
	padding: 50px 160px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.menu {
		display: flex;
		align-items: center;
	}

	.menu__header-logo {
		display: flex;
		align-items: center;
	}

	.header-logo__text {
		margin-left: 10px;
		font-size: 38px;
		color: #274c5b;
		font-family: 'Roboto-Bold';
	}

	.navbar__list {
		display: flex;
		font-family: 'Roboto-Bold';
		margin-left: 100px;
		gap: 50px;
		font-size: 20px;
	}

	.item__link {
		color: #274c5b;
	}

	.actions {
		display: flex;
		align-items: center;
	}

	.cart__btn {
		width: 160px;
		height: 65px;
		border-radius: 35px;
		background: transparent;
		border: 1px solid #e0e0e0;
		display: flex;
		align-items: center;
		padding: 5px;
		cursor: pointer;
	}

	.btn__text {
		font-family: 'Roboto-Medium';
		font-size: 18px;
		color: #274c5b;
		margin-left: 10px;
	}

	@media (max-width: 1440px) {
		padding: 50px 30px;
	}

	@media (max-width: 1024px) {
		display: none;
	}
`;
