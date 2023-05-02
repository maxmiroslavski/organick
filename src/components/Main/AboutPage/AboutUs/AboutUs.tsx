import React from 'react';
import { Link } from 'react-router-dom';
import tractorIcon from '../../../../assets/svg/tractor-icon.svg';
import fabric from '../../../../assets/svg/fabric-icon.svg';
import veggie from '../../../../assets/png/aboutVeggie.png';
import { AboutUsStyled } from './AboutUsStyles';
import { GreenHeading } from '../../../UI/GreenHeading';
import { SubText } from '../../../UI/SubText';
import { Btn } from '../../../UI/Btn';

export const AboutUs = () => {
	return (
		<AboutUsStyled>
			<div className="image">
				<img className="image__inner" src={veggie} alt="" />
			</div>
			<div className="about-us">
				<GreenHeading className="heading">About Us</GreenHeading>
				<SubText className="subheading">
					We do Creative Things for Success
				</SubText>
				<p className="about-us__paragraph">
					Simply dummy text of the printing and typesetting industry.
					Lorem had ceased to been the industry's standard dummy text
					ever since the 1500s, when an unknown printer took a galley.
				</p>
				<p className="about-us__paragraph">
					Simply dummy text of the printing and typesetting industry.
					Lorem had ceased to been the industry's standard dummy text
					ever since the 1500s, when an unknown printer took a galley.
				</p>
				<ul className="about-us__list">
					<li className="list__item">
						<img src={tractorIcon} alt="" />
						<span className="item__text">
							Modern Agriculture Equipment
						</span>
					</li>
					<li className="list__item">
						<img src={fabric} alt="" />
						<span className="item__text">
							No growth hormones are used
						</span>
					</li>
				</ul>
				<Link to="/shop">
					<Btn
						backgroundColor="#274C5B"
						textColor="#fff"
						padding="30px 40px"
					>
						Explore More
					</Btn>
				</Link>
			</div>
		</AboutUsStyled>
	);
};
