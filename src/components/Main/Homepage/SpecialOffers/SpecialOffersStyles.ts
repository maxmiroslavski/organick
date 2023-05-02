import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SpecialOffersStyled = styled(motion.div)`
	display: flex;
	justify-content: center;
	margin: 120px 0;
	gap: 30px;
	flex-wrap: wrap;
	padding: 0 50px;

	@media (max-width: 768px) {
		margin: 60px 0;
		flex-direction: column;
		padding: 0 30px;
	}

	@media (max-width: 425px) {
		margin: 60px 0;
		flex-direction: column;
		padding: 0 15px;
	}
`;

interface styledProps {
	backgroundImage: string;
	titleColor: string;
	textColor: string;
}

export const OfferItemStyled = styled.div.attrs((props: styledProps) => ({
	backgroundImage: props.backgroundImage,
	titleColor: props.titleColor,
	textColor: props.textColor,
}))`
	background: url(${(props) => props.backgroundImage}) no-repeat center
		center/cover;
	height: 360px;
	width: 660px;
	padding-left: 50px;
	display: flex;
	align-items: center;
	border-radius: 30px;

	.content__heading {
		color: ${(props) => props.titleColor};
		font-family: 'Yellowtail';
		font-weight: 400;
		font-size: 36px;
	}

	.content__description {
		font-family: 'Roboto-Bold';
		font-size: 40px;
		max-width: 260px;
		color: ${(props) => props.textColor};
	}
	@media (max-width: 1440px) {
		width: 550px;
	}

	@media (max-width: 768px) {
		width: 100%;
		padding: 30px;
		height: 300px;
	}

	@media (max-width: 425px) {
		width: 100%;
		padding: 20px;
		height: 300px;
	}
`;
