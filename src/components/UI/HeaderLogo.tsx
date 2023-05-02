import React from 'react';
import styled from 'styled-components';
import organickLogo from '../../assets/svg/organick-logo.svg';

export const HeaderLogo = () => {
	return (
		<HeaderLogoStyled>
			<img className="img-logo" src={organickLogo} alt="organick-logo" />
			<h1 className="header-logo__text">Organick</h1>
		</HeaderLogoStyled>
	);
};

const HeaderLogoStyled = styled.div`
	display: flex;
	align-items: center;

	.img-logo {
		@media (max-width: 768px) {
			height: 50px;
			width: 100%;
		}
	}

	.header-logo__text {
		margin-left: 10px;
		font-size: 38px;
		color: #274c5b;
		font-family: 'Roboto-Bold';
		@media (max-width: 768px) {
			font-size: 34px;
		}
	}
`;
