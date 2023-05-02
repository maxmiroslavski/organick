import styled from 'styled-components';
import bannerBackgroundImage from '../../../../assets/img/homepage/homepageTopBanner.jpg';

export const TopBannerStyled = styled.div`
	width: 100%;
	min-height: 900px;
	background: url(${bannerBackgroundImage});
	display: flex;
	align-items: center;
	padding-left: 260px;

	.title__main-text {
		font-family: 'Roboto-Bold';
		font-size: 70px;
		max-width: 530px;
		color: #274c5b;
		margin: 10px 0 10px;
	}

	@media (max-width: 1440px) {
		padding-left: 200px;
	}

	@media (max-width: 1024px) {
		padding-left: 100px;
		min-height: 750px;
	}

	@media (max-width: 768px) {
		padding: 0 40px;
		min-height: 600px;
		justify-content: center;

		.heading {
			text-align: center;
		}

		.link-btn {
			display: flex;
			justify-content: center;
		}

		.title__main-text {
			font-size: 54px;
			text-align: center;
			margin: 0 0 20px;
		}
	}

	@media (max-width: 425px) {
		min-height: 500px;
		padding: 0 15px;

		.title__main-text {
			font-size: 46px;
		}
	}

	@media (max-width: 375px) {
		.title__main-text {
			font-size: 42px;
		}
	}
`;
