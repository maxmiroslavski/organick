import styled from 'styled-components';
import broccoli from '../../../assets/img/cashew.jpg';
export const ListItemStyled = styled.li.attrs(
	(props: { background: string }) => props.background
)`
	padding: 20px 0;
	border-bottom: 1px solid #929799;
	display: flex;
	justify-content: space-between;
	.description__image {
		background: url(${(props) => props.background}) no-repeat center
			center/cover;
		height: 80px;
		width: 80px;
	}

	.item__description {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.description__name {
		font-size: 20px;
	}

	.right {
		display: flex;
		align-items: center;
		margin-left: 15px;
	}

	.actions {
		display: flex;
		align-items: center;
		gap: 15px;
	}

	.actions__btn {
		background: transparent;
		outline: none;
		border: none;
		cursor: pointer;
	}

	.actions__count {
		/* border: 1px solid #929799; */
		padding: 5px;
		font-size: 16px;
		color: #274c5b;
		font-family: 'Roboto-Medium';
	}

	.right__amount {
		margin-left: 30px;
		margin-bottom: 2px;
		font-family: 'Roboto-Bold';
		font-size: 20px;
		color: #274c5b;
	}

	.right__remove-all {
		margin-left: 5px;
		padding: 5px;
	}

	.rigtn__remove-btn {
		background: transparent;
		border: none;
		display: flex;
		align-items: center;
		margin-left: 10px;
		cursor: pointer;
	}
	.remove-all__icon {
		width: 45px;
		height: 45px;
		margin-bottom: 2px;
	}

	@media (max-width: 768px) {
		.description__image {
			width: 60px;
			height: 60px;
		}

		.description__name {
			font-size: 16px;
		}

		.actions {
			gap: 10px;
		}

		.right__amount {
			font-size: 16px;
		}

		.right__amount {
			margin-left: 20px;
		}

		.remove-all__icon {
			width: 35px;
			height: 35px;
		}
	}

	@media (max-width: 425px) {
		.description__image {
			display: none;
		}
	}
`;
