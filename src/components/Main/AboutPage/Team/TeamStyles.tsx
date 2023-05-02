import styled from 'styled-components';

export const TeamStyled = styled.div`
	margin-top: 180px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	padding: 0 100px;
	margin-bottom: 140px;

	.text {
		margin: 20px 0 30px;
		max-width: 850px;
		text-align: center;
	}

	.team-members {
		display: flex;
		justify-content: center;
		gap: 20px;
	}

	@media (max-width: 1440px) {
		.team-members {
			flex-wrap: wrap;
		}
	}

	@media (max-width: 1024px) {
		margin-top: 120px;
		padding: 0 50px;
		.text {
			max-width: 100%;
			margin: 20px 0 20px;
		}
	}

	@media (max-width: 768px) {
		margin-top: 80px;
	}

	@media (max-width: 425px) {
		margin-top: 50px;
		padding: 0 20px;
	}
`;

export const TeamItemStyled = styled.div.attrs((props: { image: string }) => {
	props.image;
})`
	display: flex;
	flex-direction: column;
	background: #f9f8f8;
	border-radius: 25px;
	/* max-width: 200px; */

	.image {
		background: url(${(props) => props.image}) no-repeat center center/cover;
		min-height: 500px;
		min-width: 500px;
	}

	.name {
		font-size: 25px;
	}

	.role {
		font-size: 22px;
	}

	.person__description {
		padding: 30px;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.social-media__icon {
		margin-left: 10px;
	}

	@media (max-width: 768px) {
		.image {
			min-width: 400px;
			min-height: 400px;
		}

		.person__description {
			flex-direction: column;
			align-items: center;
		}

		.role {
			text-align: center;
			margin-bottom: 10px;
		}
	}

	@media (max-width: 425px) {
		.image {
			min-width: 350px;
			min-height: 350px;
		}
	}
`;
