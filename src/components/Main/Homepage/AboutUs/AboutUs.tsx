// React
import React from 'react';

// Packages
import { Link } from 'react-router-dom';

// Components
import { AboutUsStyled } from './AboutUsStyles';

// Assets
import fruitsImage from '../../../../assets/png/homepage/aboutUsFruitImage.jpg';
import organicFoods from '../../../../assets/svg/organic-food-icon.svg';
import qulityStandard from '../../../../assets/svg/quality-standards-icon.svg';

// Components
import { Btn } from '../../../UI/Btn';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';

export const AboutUs = () => {
	return (
		<AboutUsStyled>
			<div className="image">
				<img className="image__inner" src={fruitsImage} alt="" />
			</div>

			<div className="content">
				<GreenHeading className="heading">About Us</GreenHeading>
				<SubText className="subtext">
					We Believe in Working Accredited Farmers
				</SubText>

				<p className="content__text-smaller">
					Simply dummy text of the printing and typesetting industry.
					Lorem had ceased to been the industry's standard dummy text
					ever since the 1500s, when an unknown printer took a galley.
				</p>

				<ul className="list">
					<li className="list__item">
						<img className="item__icon" src={organicFoods} alt="" />
						<div className="item__description">
							<span className="description__heading">
								Organic Foods Only
							</span>
							<p className="description__text">
								Simply dummy text of the printing and
								typesetting industry. Lorem Ipsum
							</p>
						</div>
					</li>
					<li className="list__item">
						<img
							className="item__icon"
							src={qulityStandard}
							alt=""
						/>
						<div className="item__description">
							<span className="description__heading">
								Quality Standards
							</span>
							<p className="description__text">
								Simply dummy text of the printing and
								typesetting industry. Lorem Ipsum
							</p>
						</div>
					</li>
				</ul>
				<Link to="/shop" className="link-btn">
					<Btn
						backgroundColor="#274C5B"
						textColor="#fff"
						padding="25px 50px"
					>
						Shop Now
					</Btn>
				</Link>
			</div>
		</AboutUsStyled>
	);
};
