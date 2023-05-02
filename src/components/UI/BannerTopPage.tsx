import React from 'react';
import styled from 'styled-components';

export const BannerTopPage = ({
	heading,
	background,
}: {
	heading: string;
	background: string;
}) => {
	return (
		<BannerTopPageStyled background={background}>
			<h2 className="heading">{heading}</h2>
		</BannerTopPageStyled>
	);
};

const BannerTopPageStyled = styled.div.attrs(
	(props: { background: string }) => props.background
)`
	background: url(${(props) => props.background}) center center;
	height: 450px;
	display: flex;
	align-items: center;
	justify-content: center;

	.heading {
		font-family: 'Roboto-Bold';
		font-style: normal;
		font-weight: 800;
		font-size: 70px;
		line-height: 82px;
		color: #274c5b;
	}

	@media (max-width: 1024px) {
		height: 400px;
		.heading {
			font-size: 62px;
		}
	}

	@media (max-width: 768px) {
		height: 350px;
		.heading {
			font-size: 56px;
		}
	}

	@media (max-width: 425px) {
		height: 300px;
		.heading {
			font-size: 50px;
		}
	}
`;
