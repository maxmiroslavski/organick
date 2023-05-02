import styled from 'styled-components';

export const PostNewsStyled = styled.div.attrs(
	(props: { background: string }) => props.background
)`
	margin-bottom: 200px;
	.banner {
		background: url(${(props) => props.background}) no-repeat center
			center/cover;
		height: 650px;
		width: 100%;
		position: relative;
		z-index: 1;
	}

	.banner__description {
		border-radius: 25px;
		position: absolute;
		left: 50%;
		transform: translate(-50%, -50%);
		bottom: -40%;
		min-width: 1400px;
		box-shadow: 0px 20px 36px rgba(204, 204, 204, 0.4);
		background: #fff;
		padding: 80px;
		z-index: 1;
	}

	.description__post-info {
		display: flex;
		align-items: center;
		gap: 30px;
	}

	.post-info__date {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.date__posted-on {
		font-family: 'Roboto-Medium';
		font-weight: 600;
		font-size: 18px;
		color: #274c5b;
	}

	.date__full-date {
		font-family: 'Roboto-Medium';
		font-weight: 100;
		font-size: 18px;
		color: #274c5b;
	}

	.post-info__author {
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.author__name {
		font-family: 'Roboto-Medium';
		font-weight: 100;
		font-size: 18px;
		color: #274c5b;
	}

	.description__heading {
		margin: 20px 0 30px;
		max-width: 100%;
	}

	@media (max-width: 1440px) {
		.banner {
			min-height: 550px;
		}
		.banner__description {
			min-width: 900px;
			padding: 60px;
		}
	}

	@media (max-width: 1024px) {
		margin-bottom: 100px;
		.banner__description {
			min-width: 700px;
			padding: 40px;
		}
	}

	@media (max-width: 768px) {
		margin-bottom: 75px;
		.banner {
			min-height: 600px;
			display: flex;
			justify-content: center;
			flex-direction: column;
		}

		.banner__description {
			border-radius: 0px;
			position: static;
			margin: auto;
			min-width: 100%;
			padding: 30px;
			transform: translate(0%, 0%);
		}

		.description__post-info {
			flex-wrap: wrap;
		}
	}
`;
