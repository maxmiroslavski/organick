// React
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { TopBannerStyled } from './TopBannerStyles';
import { Btn } from '../../../UI/Btn';
import { GreenHeading } from '../../../UI/GreenHeading';

export const TopBanner = () => {
	return (
		<TopBannerStyled>
			<div className="title">
				<GreenHeading className="heading">
					100% Natural Food
				</GreenHeading>

				<h1 className="title__main-text">
					Choose the best healthier way <br /> of life
				</h1>
				<Link to="/about" className="link-btn">
					<Btn
						padding="30px 40px"
						backgroundColor="#EFD372"
						textColor="#274C5B"
					>
						Explore Now
					</Btn>
				</Link>
			</div>
		</TopBannerStyled>
	);
};
